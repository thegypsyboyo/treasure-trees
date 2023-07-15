import {defineField, defineType} from 'sanity'

export default defineType({
    name:'serviceUsContent',
    title: 'Service',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),

        defineField({
            name: 'description',
            description: 'Enter a short snippet here',
            title: 'Description',
            type: 'string'

        }),  
        defineField({
            name: 'icon',
            title: 'Icon',
            type: 'image',
            options: {
                hotspot: true
            },
            validation: (Rule) => Rule.required(),
        }),
    ],
    preview: {
        select: {
            title: 'title',
            media: 'icon',
        }
    }
})