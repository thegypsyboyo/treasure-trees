"use client"

import BlogList from "./blog-list"
import { usePreview } from "../../../lib/sanity.preview";

type Props = {
    query: string;
};


export default function PreviewBLogList({query}: Props) {
    const posts = usePreview(null, query);

    return <BlogList posts={posts}/>
}