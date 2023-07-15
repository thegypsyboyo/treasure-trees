import { defineField, defineType } from 'sanity';

export default defineType ({
  name: 'questions',
  title: 'FQAs',
  type: 'document',

  fields: [
    defineField({
      name: 'faqs',
      title: 'FAQs',
      description: "Please provide questions and Answers here!",
      type: 'array',
      of: [{type: 'reference', to: {type: 'faq'}}],
    }),
  ],

  preview: {
    select: {
      title: 'faqs',
      media: ""
    }
  }
})