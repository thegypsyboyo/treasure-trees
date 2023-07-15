import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'team',
  title: 'THE TEAM',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'position',
      title: 'Position In Company',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
        name: 'socials',
        title: 'Social Media',
        type: 'array',
        of: [{type: 'reference', to: {type: 'socialmedia'}}],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
