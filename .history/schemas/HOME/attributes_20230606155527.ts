import {defineField, defineType} from "sanity"

export default defineType ({
    name: "attributes",
    title: "Attributes",
    type: "Document",
    fields: [
        defineField: {
            name: "title",
            type: "string",
            title: "Title",
        },
        defineField: {
            name: "id",
            type: "number",
            description: "Give a unique number here. Eg. 1,2,3 ...",
        }
    ]
})