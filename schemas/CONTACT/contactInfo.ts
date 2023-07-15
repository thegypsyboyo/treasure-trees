import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contactInfo',
  title: 'CONTNACT INFORMATION',
  type: 'document',
  fields: [
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'Title',
      title: 'Title',
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
      name: 'buttonName',
      title: 'Button Name',
      description: "Give a name that will be shown in the button like: 'get a quote or send message..'",
      type: 'string',
    }),    
  ],
  preview: {
    select: {
      title: 'subtitle',
      media: 'image',
    },
  },
})
