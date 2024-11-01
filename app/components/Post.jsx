import PostNavButton from "./PostNavButton";

export default function Post({title,body,id}) {
  return (
    <div className="border-2 border-white p-12 m-12">
      <h3>{title}</h3>
      <p>{body}</p>
      <PostNavButton id={id}/>
    </div>
  )
}
