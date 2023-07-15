import { defineField, defineType } from 'sanity';

export default defineType ({
  name: 'faq',
  title: 'FQAs',
  type: 'document',

  fields: [
    defineField({
        name: "question",
        title: "Question",
        type: "string"
    }),
    defineField({
        name: "answer",
        title: "Answer",
        type: "string"
    }),
  ],

  preview: {
    select: {
      title: 'questionAnswers',
      media: ""
    }
  }
})