import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'team',
  title: 'THE TEAM',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'position',
      title: 'Position In Company',
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
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
        name: 'socials',
        title: 'Social Media',
        type: 'array',
        of: [{type: 'reference', to: {type: 'socialmedia'}}],
    }),
    defineField({
      name: 'teamDetails',
      title: 'MORE INFO ON EACH MEMBER',
      type: 'array',
      of: [{type: 'reference', to: {type: 'teamDetail'}}],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
