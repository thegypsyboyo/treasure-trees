import {defineField, defineType} from "sanity"

export default defineType({
    name: "workFlow",
    title: "Work Flow",
    description: "How we do our work and our process",
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
            name: "title",
            title: "Title",
            description: "Give a title here",
            type: "string",
        }),
        defineField({
            name: "description",
            title: "Description",
            validation: (Rule) => Rule.max(100),
            type: "string"
        })
    ],
    preview: {
        select: {
            title: "title",
            media: "image"
        }
    }

})