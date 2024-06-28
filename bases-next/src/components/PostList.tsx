import type { PostItem } from "@/types/postItem";
import Link from "next/link";

interface Props {
  post: PostItem[]
}

export default function PostList({ post }: Props) {
  return (
    <div>
      <div className="article-list">
        {post.map((item, index) => (
          <div key={index} className="mt-5">
            <Link href={`/post/${item.id}`}>
              {item.title}
            </Link>
          </div>
        ))
        }
      </div>
    </div>
  );
}