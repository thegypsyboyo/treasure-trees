import { defineField, defineType } from 'sanity';

export default defineType ({
  name: 'questions',
  title: 'FQAs',
  type: 'document',

  fields: [
    defineField({
        name: 'questionAnswers',
        type: 'array',
        title: 'Question & Answers',
        of: [{ type: 'object', fields: [
            { name: 'question', type: 'string', title: 'Question' },
            { name: 'answer', type: 'string', title: 'Answer' },
          ] }],
    }),
  ],

  preview: {
    select: {
      title: 'questionAnswers',
    }
  }
})