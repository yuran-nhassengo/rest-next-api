import Post from "../components/Post";

async function getPosts() {

    const res = await fetch('http://localhost:3000/posts');
    const data = await res.json();
    return data.data;
}

export default async function Posts() {

    const posts = await getPosts();
  return (
    <>
        <h1>Posts</h1>
        {
            posts.map((post) =>{
                return (
                    <Post key={post.id} id={post.id} title={post.title} body={post.body}/>
                )
            })
        }
    </>
  )
}

