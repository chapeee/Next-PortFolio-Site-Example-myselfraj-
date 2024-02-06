// pages/page.tsx

import React from 'react';
import {getPosts} from '../apis/api'

 
export default async function Page() {
  const data = await getPosts()
 
  return (

  <main>
      {!data ? (
        <p style={{ color: 'red' }}>something went wrong</p>
      ) : (
        <div>
          {data.map((post : any) => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}