import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'mapLocation',
  title: 'LOCATION ON MAP',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      description: "Give the name of the place!",
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
