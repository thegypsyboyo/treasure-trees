import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contactInfo',
  title: 'CONTNACT DATA',
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
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
    defineField({
      name: 'buttonNae',
      title: 'Button Name',
      description: "Give a name that will be shown in the button like: 'get a quote or send message..'"
      type: 'string',
    }),    
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
