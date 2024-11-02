import Post from "@/app/components/Post"

async function getPost(params) {

    const res = await fetch(`http://localhost:3000/posts/${id}`);
    const data = await res.json();
    return data.data;
    
}

export default async function PostPage({params}) {
    const post = await getPost(params.id)
  
    return <Post id={post.id} title={post.title} body={post.body} />

}
