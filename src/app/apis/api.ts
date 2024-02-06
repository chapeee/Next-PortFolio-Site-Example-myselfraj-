export async function getPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/',{ cache: 'force-cache' })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      return false
    }
   
    return res.json()
  }