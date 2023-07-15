import { defineField, defineType } from 'sanity';

export default defineType ({
  name: 'singlePortfolioData',
  title: 'Portfolio',
  type: 'document',

  fields: [
    defineField({
        name: 'title',
        type: 'string',
        title: 'Title',
        description: 'Title of the Item eg Date, Services Category, .',
      }),
    defineField({
        name: 'name',
        type: 'string',
        title: 'Name',
        description: 'Give the name in relation to the title you gave, .',
      }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    }
  }
})