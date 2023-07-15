import { defineField, defineType } from "sanity";

export default defineType( {
    name: 'socialmedia',
    title: 'Social Media',
    type: 'document',
    fields: [
        defineField({
            name: 'platform',
            title: 'Platform',
            type: 'string',
            options: {
              list: [
                { title: 'Twitter', value: 'twitter' },
                { title: 'Facebook', value: 'facebook' },
                { title: 'Instagram', value: 'instagram' },
                { title: 'LinkedIn', value: 'linkedin' },
                { title: 'Youtube', value: 'youtube' },
              ],
            },
            validation: (Rule) => Rule.required(),
          }),

          defineField({
            name: 'url',
            title: 'URL',
            type: 'url',
            validation: (Rule) => Rule.required(),
          }),
        ],
        validation: (Rule) => Rule.required(),
        preview: {
            select: {
              title: 'platform',
            },
        },
})