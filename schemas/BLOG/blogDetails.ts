import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'singlePostInformation',
  title: 'Information About Each Post',
  description: 'Each Post has its own unique content, so here you can provide information about a particular post you are editing',
  type: 'document',
  fields: [
    defineField({
      name: 'postDescriptionIntro',
      title: 'Introduction Description',
      type: 'string',
    }),
    defineField({
        name: 'image',
        title: 'Main Blog Image',
        description: 'Give The Main Image of the Blog',
        type: 'image',
        options: {
          hotspot: true,
        },
    }),
    defineField({
      name: 'blogTitle',
      title: 'Blog Title',
      description: 'Give The Main Title Of The Blog',
      type: 'string',
    }),
    defineField({
      name: 'blogDescriptionOne',
      title: 'Blog Description One',
      description: 'Give The First Description Of The Blog Title',
      type: 'string',
    }),
    defineField({
      name: 'blogSubInfoTitle',
      title: 'Blog Sub Info Title',
      description: 'Here we are rendering a Title for an Image and its information',
      type: 'string',
    }),
    defineField({
        name: 'blogSubImageInfo',
        title: 'Blog Sub Info Image',
        description: 'Here upload an Image then give information about the Image on next prompt ',
        type: 'image',
        options: {
          hotspot: true,
        },
    }),
    defineField({
        name: 'blogSubInfoDescription',
        title: 'Blog Sub Info Description',
        description: 'Here you can give information about the Image you uploaded!',
        type: 'string',
    }),
    defineField({
        name: 'quoteInfo',
        title: 'Quote Info',
        description: 'Please give a quote on the post from the founder!',
        type: 'string',
    }),
    defineField({
        name: 'quoteFounderName',
        title: 'Founder Name',
        description: 'Name of Founder',
        type: 'string',
    }),
    defineField({
        name: 'postDescriptionEnding',
        title: 'Post Description Ending',
        description: 'You can end the post with a description',
        type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'blogTitle',
      media: 'image',
    },
  },
})
