import {defineField, defineType} from "sanity"

export default defineType({
    name: "countUp",
    title: "Count Up",
    description: "This is the count up components",
    type: "document",
    fields: [
        defineField({
            name: "id",
            title: "Id",
            description: "Give a unique number say 1,2,3 ..",
            type: "number",
        }),
        defineField({
            name: "value",
            title: "Value",
            description: "Give the value for the number here. eg.  10012",
            type: "number"
        }),
        defineField({
            name: "suffix",
            title: "Suffix",
            description: "give a value to be followed after the value above. Eg. +, - and so on",
            type: "string",
        }),
        defineField({
            name: "title",
            title: "Title",
            description: "give a title here",
            validation: (Rule) => Rule.max(100),
            type: "string"
        }),
        defineField({
            name: "description",
            title: "Description",
            validation: (Rule) => Rule.max(100),
            type: "string"
        }),
    ]
})