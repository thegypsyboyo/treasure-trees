import {defineField, defineType} from "sanity"

export default defineType({
    name: "homeAbout",
    title: "Home About Content",
    type: "document",
    fields: [
        defineField({
            name: "image",
            title: "Image Array",
            description: "Provide images here",
            type: "array",
            of:[{type: "reference", to: {type: "imageArray"}}]
        }),
        defineField({
            name: "sinceFrom",
            title: "Since From",
            description: "Give the date the company started: sincefrom 2008",
            validation: (Rule) => Rule.max(200),
            type: "string",

        }),
        defineField({
            name: "title",
            title:"Title",
            description: "give a title here",
            type: "string"
        }),
        defineField({
            name: "description",
            title: "Description",
            description: "Give a description here",
            type: "string"
        }),
        defineField({
            name: "skillTitles",
            title: "Skill Title",
            description: "Give the title for a skill",
            type: "array",
            of:[{type: "reference", to: {type: "skillTitle"}}]
        }),
        
    ],
    preview: {
        select: {
            title: 'title',
            media: 'image',
        }
    }
}) 