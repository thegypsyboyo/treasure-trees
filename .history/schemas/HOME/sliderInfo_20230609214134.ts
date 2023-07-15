import {defineField, defineType} from 'sanity'

export default defineType({
    name: "sliderInfo",
    title: "Slider",
    type: "document",
    fields: [
        defineField({
           name: "sliders",
           title: "Sliders",
           type: "array",
           of: [{type: "reference", to: {type: "slider"}}] 
        }),
        defineField({
            name: "sinceFrom",
            title: "Since From",
            description: 'You can give a year here',
            type: "string",   
        }),
        defineField({
            name: "activeReviews",
            title: "ActiveReviews",
            type : "string",
        })
    ]
})