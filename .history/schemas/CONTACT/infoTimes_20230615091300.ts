import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'infoTimes',
  title: 'TIME INFORMATION',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'descriptionOne',
      title: 'Description One',
      type: 'string',
    }),
    defineField({
      name: 'descriptionTwo',
      title: 'Description Two',
      type: 'string',
    }),
    defineField({
      name: 'descriptionThree',
      title: 'Description Three',
      type: 'string',
    }),
    defineField({
      name: 'descriptionFour',
      title: 'Description Four',
      type: 'string',
    }),
    defineField({
      name: 'descriptionFive',
      title: 'Description Five',
      type: 'string',
    }),
    defineField({
      name: 'descriptionSix',
      title: 'Description Six',
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
      title: 'name',
      media: 'image',
    },
  },
})
