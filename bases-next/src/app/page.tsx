
import PostList from "@/components/PostList";
import GetApiInfo from "@/lib/fetch";

export default async function Home() {
  const data = await GetApiInfo.getPostList();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Blog</h1>
    <PostList post={data} />
    </main>
  );
}
