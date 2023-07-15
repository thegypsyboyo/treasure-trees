import { defineField, defineType } from 'sanity';

export default defineType ({
  name: 'singlePortfolioData',
  title: 'Portfolio',
  type: 'document',

  fields: [
    defineField({
      name: 'mainImage',
      type: 'image',
      title: 'Main Image',
      description: 'The main image for this portfolio item.',
    }),
    // defineField({
    //   name: 'listItem',
    //   type: 'string',
    //   title: 'List Item',
    //   of: [{ type: 'array' }],
    //   description: 'A list of items to display in this portfolio item.',
    // }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'portfolioDescriptionOne',
      type: 'string',
      title: 'Portfolio Description One',
      description: 'The first paragraph of the portfolio item description.',
    }),
    defineField({
      name: 'portfolioDescriptionTwo',
      type: 'string',
      title: 'Portfolio Description Two',
      description: 'The second paragraph of the portfolio item description.',
    }),
    defineField({
      name: 'portfolioSubImage',
      type: 'array',
      title: 'Portfolio Sub Images',
      of: [{ type: 'image' }],
      description: 'Additional images to display in this portfolio item.',
    }),
    defineField({
      name: 'quoteInfo',
      type: 'string',
      title: 'Quote Info',
      description: 'A quote to display in this portfolio item.',
    }),
    defineField({
      name: 'quoteAuthor',
      type: 'string',
      title: 'Quote Author',
      description: 'The author of the quote to display in this portfolio item.',
    }),
    defineField({
      name: 'authorPosition',
      type: 'string',
      title: 'Position ',
      description: 'Position In The Company.',
    }),
    defineField({
      name: 'informationOnQuestion',
      type: 'string',
      title: 'Information On Question',
      description: 'Describe some indroductionry information about the frequetly asked questions then give Q&A on the next slide...',
    }),
    defineField({
        name: 'questionAnswers',
        type: 'array',
        title: 'Question Answers',
        of: [{ type: 'object', fields: [
            { name: 'question', type: 'string', title: 'Question' },
            { name: 'answer', type: 'string', title: 'Answer' },
          ] }],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    }
  }
})