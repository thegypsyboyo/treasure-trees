import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'aboutusVideo',
  title: 'AboutUs Video',
  type: 'document',
  fields: [
    defineField({
      name: 'videoId',
      title: 'Video ID',
      type: 'string',
    }),
    defineField({
      name: 'bgImage',
      title: 'Background Image',
      description: 'Give a backgroud Image here',
      type: 'string',
    }),
    defineField({
      name: 'channel',
      title: 'Channel',
      type: 'string',
      options: {
        list: [
            {title: "Vimeo", value: "vimeo"},
            {title: "Youtube", value: "youtube"},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'channel',
      media: 'bgImage',
    },
  },
})
