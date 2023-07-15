import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contactMap',
  title: 'CONTACT INFORMATION',
  type: 'document',
  fields: [
    defineField({
      name: 'mapCoordiantes',
      title: 'Map Cooriantes',
      type: 'array',
      of: [{type: "reference", to: {type: "mapCoordinate"}}]
    }),
    defineField({
      name: 'infoMedia',
      title: 'MEDIA INFORMATION',
      type: 'array',
      of: [{type: "reference", to: {type: "infoMedias"}}]
    }),
    defineField({
      name: 'infoTime',
      title: 'TIME INFORMATION',
      type: 'array',
      of: [{type: "reference", to: {type: "infoTimes"}}]
    }),
  ],
  preview: {
    select: {
      title: 'infoTime',
      media: 'image',
    },
  },
})
