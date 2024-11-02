import { NextResponse } from "next/server"

export async function GET(request,{params}) {

    const postId = params.id;

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

  
    const data = await  res.json();
    const posts =data.slice(0,4);
    return NextResponse.json({data:posts})
  
}