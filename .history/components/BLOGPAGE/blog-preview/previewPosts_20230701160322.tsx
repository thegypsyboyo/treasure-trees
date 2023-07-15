// ./nextjs-pages/src/components/PreviewPosts.tsx

import type { SanityDocument } from "@sanity/client";
import { useLiveQuery } from '@sanity/preview-kit'
import { query } from "./page";
// import Posts from "./Posts";
import BlogList from "../blog-list/blog-list";

export default function PreviewPosts({ posts = [] }: { posts: Post[] }) {
const [data] = useLiveQuery(posts, query)
  return <BlogList posts={data} />;
}