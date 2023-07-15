import {defineField, defineType} from "sanity"

export default defineType({
    name: "imageArray",
    title: "Home About Images ",
    type: "document",
    fields: [
        defineField({
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "id",
            title: "ID",
            type: "number",
        })
    ],
    preview : {
        select: {
            title: "id",
            media: "image"
        },
    },
})