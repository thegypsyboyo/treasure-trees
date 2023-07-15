import { defineField, defineType } from 'sanity';

export default defineType ({
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',

  fields: [
    defineField( {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Please give a short title of the Portfolio Item',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: 'Please give a short brief description of the portfolio item',

      type: 'string',
    }),
    defineField({
        name: 'slug',
        title: 'slug',
        type: 'slug',
        description: 'DONT FORGET TO GIVE THE SLUG AS IT IS THE URL FOR THIS POST. YOU CAN GENERATE AUTOMATICALLY FROM THE DESCRIPTION',
        options: {
            source: 'description',
            maxLength: 100,
        }
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
        name: 'category',
        type: 'array',
        title: 'Category',
        description: 'PLEASE CHOOSE A CATEGORY FROM WHICH THE ITEM WILL BE GROUPED INTO. YOU HAVE TO CHOOSE!',
        of: [{ type: 'string' }],
        options: {
          list: [
            { title: 'All', value: 'All' },
            { title: 'Events', value: 'Events' },
            { title: 'Gardening', value: 'Gardening' },
            { title: 'People', value: 'People' },
            { title: 'Plants', value: 'Plants' },
          ],
        },
      }),

      defineField({
        name: 'singlePortfolioDatas',
        title: 'Information About Each Portfolio',
        description: 'Each Post has its own unique content, so here you can provide information about a particular portfolio you are editing',
        type: 'array',
        of: [{type: 'reference', to: {type: 'singlePortfolioData'}}],
        // readOnly: true,   
      }),
    ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    }
  }
})