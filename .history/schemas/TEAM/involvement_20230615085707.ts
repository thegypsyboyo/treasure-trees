import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'involvement',
  title: 'COLLABORATION & TEAM',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'imageLogos',
      title: 'Image Logos',
      type: 'array',
      of: [{type: "reference", to: {type: "imageLogo"}}],
    }),

    defineField({
        name: "mainImage",
        type: "image",
        title: "Main Image",
        description: "give the main image here",
        options: {
            hotspot: true
        }
    })
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})
