import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getPostListings } from "~/models/post.server";

export const loader = async () => {
  const posts = await getPostListings()
  return json({posts})
};

function PostRoute() {

  const { posts } = useLoaderData<typeof loader>();

  return (
    <main>
        <h1>
            Post
        </h1>
        <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              to={post.slug}
              className="text-blue-600 underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default PostRoute