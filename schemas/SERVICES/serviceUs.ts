import {defineField, defineType} from 'sanity'

export default defineType({
    name:'serviceUs',
    title: 'Service',
    type: 'document',
    fields: [
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string'
        }),

        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'

        }),
        defineField({
            name: 'serviceUsContents',
            title: 'Service Content ',
            type: 'array',
            of:[{ type: 'reference', to: [{ type: 'serviceUsContent' }] }]
        }),  
        defineField({
            name: 'bgImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true
            },
            validation: (Rule) => Rule.required(),
        }),
    ],
    preview: {
        select: {
            title: 'subtitle',
            media: 'bgImage',
        }
    }
})