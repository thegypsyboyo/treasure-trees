import { defineField, defineType } from "sanity";

export default defineType( {
    name: "postTag",
    title: "Post Tag",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
        }),
        defineField({
            name: "slug",
            title: "slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
        })
    ]
})