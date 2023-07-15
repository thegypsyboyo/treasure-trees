import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'mapLocations',
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
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
