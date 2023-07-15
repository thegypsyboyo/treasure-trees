// ./nextjs-pages/src/components/PreviewPosts.tsx

import type { SanityDocument } from "@sanity/client";
import { useLiveQuery } from '@sanity/preview-kit'
import { query } from "./page";
// import Posts from "./Posts";
import BlogList from "../blog-list/blog-list";
type Props =  {
    posts:Post[]
}

export default function PreviewPosts({ posts}: Props) {
const [data] = useLiveQuery(posts, query)
  return <BlogList posts={data} />;
}