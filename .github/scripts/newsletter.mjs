// Crea un borrador en Buttondown por cada entrada de content/posts con
// `newsletter: true` en el frontmatter que todavía no tenga borrador o
// envío asociado (comprobado por canonical_url, la URL de la propia entrada).
import { readdirSync, readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";

const API_KEY = process.env.BUTTONDOWN_API_KEY;
const BASE_URL = process.env.SITE_BASE_URL;
const POSTS_DIR = "content/posts";

if (!API_KEY) {
  console.error("Falta BUTTONDOWN_API_KEY");
  process.exit(1);
}

function findNewsletterPosts() {
  const posts = [];
  for (const entry of readdirSync(POSTS_DIR, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const indexPath = join(POSTS_DIR, entry.name, "index.md");
    if (!existsSync(indexPath)) continue;

    const { data, content } = matter(readFileSync(indexPath, "utf8"));
    if (data.newsletter !== true) continue;

    posts.push({
      slug: entry.name,
      title: data.title,
      description: data.description,
      content,
      canonicalUrl: `${BASE_URL}/posts/${entry.name}/`,
    });
  }
  return posts;
}

function excerpt(markdown) {
  const plain = markdown
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "") // imágenes
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1") // enlaces -> solo texto
    .replace(/[#*_`>]/g, "") // marcado sobrante
    .replace(/\s+/g, " ")
    .trim();

  if (plain.length <= 300) return plain;
  const cut = plain.slice(0, 300);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace)}…`;
}

async function buttondownFetch(path, options = {}) {
  const res = await fetch(`https://api.buttondown.com/v1${path}`, {
    ...options,
    headers: {
      Authorization: `Token ${API_KEY}`,
      "Content-Type": "application/json",
      ...options.headers,
    },
  });
  if (!res.ok) {
    throw new Error(`Buttondown API ${path} -> ${res.status}: ${await res.text()}`);
  }
  return res.json();
}

async function existingCanonicalUrls() {
  const urls = new Set();
  let path = "/emails?page=1";
  while (path) {
    const data = await buttondownFetch(path);
    for (const email of data.results) {
      if (email.canonical_url) urls.add(email.canonical_url);
    }
    path = data.next ? data.next.replace("https://api.buttondown.com/v1", "") : null;
  }
  return urls;
}

async function createDraft(post) {
  const summary = post.description?.trim() || excerpt(post.content);
  const body = `${summary}\n\n[Leer el artículo completo](${post.canonicalUrl})`;

  await buttondownFetch("/emails", {
    method: "POST",
    body: JSON.stringify({
      subject: post.title,
      body,
      status: "draft",
      canonical_url: post.canonicalUrl,
    }),
  });
  console.log(`Borrador creado: ${post.title}`);
}

const posts = findNewsletterPosts();
const already = await existingCanonicalUrls();

const pending = posts.filter((p) => !already.has(p.canonicalUrl));
if (pending.length === 0) {
  console.log("Nada pendiente: todas las entradas con newsletter: true ya tienen borrador o envío.");
}

for (const post of pending) {
  await createDraft(post);
}
