import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'imageLogo',
  title: 'IMAGE LOGOS',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'ID',
      description: "give a unique number here !",
      type: 'number',
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
      title: 'id',
      media: 'image',
    },
  },
})
