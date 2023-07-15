import {defineType, defineField} from "sanity"

export default defineType({
    name: "ourFeatures",
    title: "Our Features",
    type: "document",
    fields: [
        defineField ({
            name: "name",
            title: "Name",
            type: "string",
        }),
        defineField ( {
            name: "image",
            type: "image",
            options: {
                hotspot: true,
            },
            title: "Image",
        }), 
        defineField ({
            name: "attribute",
            title: "Attribute",
            type: "array",
            of: [{type:"reference", to: {
                type: "attributes"
            }}]
        }),
    ]
})