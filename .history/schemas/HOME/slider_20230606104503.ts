import {defineField, defineType} from "sanity"

export default defineType({
    name: "slider",
    title: "Slider",
    type: "document",
    fields: [
        defineField({
           name: "image",
           title: "Image",
           description: 'Give an Image here!',
           type: "image",
           options: {
            hotspot: true,
           },
        }),
        defineField({
            name: "title",
            title: "Title",
            description: 'Give a brief title of slider',
            type: "string",
        }),
        defineField({
            name: "description",
            title: "Description",
            description: 'Give a brief description of slider',
            type: "string",
        })
    ]
})