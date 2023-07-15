import {defineField, defineType} from "sanity"

export default defineType({
    name: "navbar",
    title: "Navbar",
    type: "document",
    fields: [
        defineField({
           name: "closingDays",
           title: "Closing Days",
           description: 'Give a Day of the week.Perhaps Sunday!',
           type: "string"
        }),
        defineField({
           name: "logo",
           title: "Logo",
           type : "image",
           options: {
            hotspot: true,
           },
        }),
        defineField({
            name: "emailAddress",
            title: "Email Address",
            description: 'Give a functional email address here!',
            type: "string",
        }),
        defineField({
            name: 'socials',
            title: 'Social Media',
            type: 'array',
            of: [{type: 'reference', to: {type: 'socialmedia'}}],
        }),
        defineField({
            name: "emergencyContact",
            title: "Emergency Contact",
            description: "Give the mobile number here!",
            type: "string"
        }),
        defineField({
            name: "locationAddress",
            title: "Location Address",
            type: "string",
            description: "Give the physical location"
        }),
        defineField({
            name: "openingDays",
            title: "Opening Days",
            description: "give the dates when it is opened. For instace Mon - Sat",
            type: "string"
        }),
        defineField({
            name: "aboutWebsite",
            title: "About the Website",
            description: "Give a brief description of the website to about 200 char.",
            validation: (Rule) => Rule.max(200),
            type: "string",
        })
    ]
})