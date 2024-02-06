import sanityclient from './createClient'
export async function getPosts() {
  return await sanityclient.fetch<any[]>(`*[_type == 'post']{title, excerpt, slug, 'image': mainImage}`);
}

export async function getPostBySlug(slug: string) {
  return await sanityclient.fetch<any[]>(`*[_type == 'post' && slug.current == $slug]{title, body, excerpt, 'image': mainImage}[0]`, { slug });
}
