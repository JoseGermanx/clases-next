import PostItemCoponent from "@/components/PostItem";


async function getPost() {
  const post = await fetch("https://jsonplaceholder.typicode.com/posts")
  if (!post.ok){
    throw new Error("Error el hacer la petición")
  }
  return post.json()
}


export default async function Home() {

  const data = await getPost()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <PostItemCoponent post={data} />
    </main>
  );
}
