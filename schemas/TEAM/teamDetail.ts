import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'teamDetail',
  title: 'TEAM DETAILS',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      description: "Give a name for the team member",
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      description: 'Give a phone number',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      description: 'Give an Email',
      type: 'string',
    }),
    defineField({
      name: 'skillSetInfo',
      title: 'Skillset Description',
      description: 'Give a description about your skills. Like a short Bio',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      description: 'Give a location',
      type: 'string',
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      description: 'Give your bio',
      type: 'string',
    }), 
    defineField({
      name: 'skills',
      title: 'Skill List',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skillTitle'}}],
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
      title: 'name',
      media: 'image',
    },
  },
})
