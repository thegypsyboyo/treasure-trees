import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'aboutusIntro',
  title: 'Aboutus Introduction',
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
      description: 'Give a brief description of About Us',
      type: 'string',
    }),
    defineField({
      name: 'infoOne',
      title: 'Info One',
      type: 'string',
      description: "give a brief description here too."
    }),
    defineField({
      name: 'infoTne',
      title: 'Info Tne',
      type: 'string',
      description: "give a brief description here too."
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
