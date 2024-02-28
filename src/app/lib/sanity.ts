import sanityclient from './createClient'
export async function getPosts() {
  return await sanityclient.fetch<any[]>(`*[_type == 'post']{title, excerpt, slug, 'image': mainImage}`);
}

export async function getPostBySlug(slug: string) {
  return await sanityclient.fetch<any[]>(`*[_type == 'post' && slug.current == $slug]{title, body, excerpt, 'image': mainImage}[0]`, { slug });
}

export async function getLatestPosts() {
  return await sanityclient.fetch<any[]>(`
    *[_type == 'post']
    | order(_createdAt desc)
    | [0..2] { title, excerpt, slug, 'image': mainImage }
  `);
}

export async function getLearnTitle() {
  return await sanityclient.fetch<any[]>(`*[_type == 'learn']{title, slug, excerpt}`);
}

export async function getLearnSlug(slug: string) {
  return await sanityclient.fetch<any[]>(`*[_type == 'learn' && slug.current == $slug]{title, body, excerpt, 'image': mainImage}[0]`, { slug });
}