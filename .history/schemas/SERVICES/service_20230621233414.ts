import {defineField, defineType} from 'sanity'

export default defineType({
    name:'service',
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
            description: 'Enter a short snippet for the service',
            title: 'Description',
            type: 'string'

        }),
        defineField({
            name: 'slug',
            title: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 40,
            }
        }),
        defineField({
            name: 'servicesSlugInformation',
            title: 'Service Slug Information',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'allData' }] }]
        }),  
        defineField({
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true
            }
        }),
        defineField({
            name: 'icon',
            title: 'Icon',
            type: 'image',
            options: {
                hotspot: true
            }
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
          }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            media: 'mainImage',
        }
    }
})