import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contactMap',
  title: 'CONTACT INFORMATION',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'title',
      type: "string"
    }),
    defineField({
      name: 'mapCoordinates',
      title: 'Map Cooriantes',
      type: 'array',
      of: [{type: "reference", to: {type: "mapCoordinate"}}]
    }),
    defineField({
      name: 'infoMedia',
      title: 'MEDIA INFORMATION',
      type: 'array',
      of: [{
        type: "reference", to: {type: "infoMedias"}}]
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})
