'use client'

import { useRouter } from "next/navigation"

export default function PostNavButton({id}) {
    const router = useRouter();

    function handleclick(){
        router.push(`/post/${id}`)
    }

  return (
    <button onClick={handleclick}>
        Viw Post
    </button>
  )
}
