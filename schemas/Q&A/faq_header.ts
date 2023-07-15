import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'faq_header',
  title: 'HEADER',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: "Give a title for the page",
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: 'Give a description of the page',
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
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})
