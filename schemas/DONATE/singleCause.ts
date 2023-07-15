import { defineField, defineType } from 'sanity';

export default defineType ({
  name: 'singleCause',
  title: 'Single Cause',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      description: "Give an informative description on this post",
      validation: (Rule) => Rule.max(100),

    }),
    defineField({
      name: 'firstDescription',
      type: 'string',
      title: 'First Description One',
      description: 'The first paragraph of the single item description.',
    }),
    defineField({
      name: 'secondDescription',
      type: 'string',
      title: 'Description Two',
      description: 'The second paragraph of the Cause item description.',
    }),
    defineField({
      name: 'image',
      type: 'array',
      title: 'Cause Sub Images',
      of: [{ type: 'image' }],
      description: 'Upload two images to correspond to description one and two.',
    }),
    defineField({
      name: 'lastDescription',
      type: 'string',
      title: 'Final Description',
      description: 'Give a final description.',
    }),
    defineField({
      name: 'donationFormDescription',
      type: 'string',
      title: 'Donation Form Description',
      description: 'Give some content about the donation. Wise words to encourage people to donate to the cause',
      validation: (Rule) => Rule.max(120),
    }),

  ],

  preview: {
    select: {
      title: 'title',
      media: 'image',
    }
  }
})