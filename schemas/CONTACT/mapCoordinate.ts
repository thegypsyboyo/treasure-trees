import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'mapCoordinate',
  title: 'MAP COORDINATES',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: "",
      type: 'string',
    }),
    defineField({
      name: 'latitude',
      title: 'LATITUDE',
      description: "provide a latitude point of a map here",
      type: 'number',
    }),
    defineField({
      name: 'longitude',
      title: 'LONGITUDE',
      description: "provide a longitude point of a map here",
      type: 'number',
    }),
 
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})
