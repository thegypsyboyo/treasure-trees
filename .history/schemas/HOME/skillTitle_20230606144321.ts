import {defineField, defineType} from "sanity"

export default defineType({
    name: "skillTitle",
    title: "Skill Title",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
        }),
        defineField({
            name: "percentage",
            title: "Percentage",
            decription: "Give a percentage level of experience here!",
        })
    ],
    preview : {
        select: {
            title: "title"
        },
    },
})