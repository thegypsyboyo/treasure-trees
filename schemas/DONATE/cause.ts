import { defineField, defineType } from 'sanity';

export default defineType ({
  name: 'cause',
  title: 'Causes',
  type: 'document',

  fields: [
    defineField( {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Please give a short title of the Cause Item',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: 'Please give a short brief description of the Cause item',
      validation: (Rule) => Rule.max(200),
      type: 'string',
    }),
    defineField({
        name: 'slug',
        title: 'slug',
        type: 'slug',
        description: 'DONT FORGET TO GIVE THE SLUG AS IT IS THE URL FOR THIS POST. YOU CAN GENERATE AUTOMATICALLY FROM THE TITLE',
        options: {
            source: 'title',
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
      name: 'amountDonated',
      title: 'Amount Donated',
      type: 'string',
      description: "give the exact amount because it is being used somewhere in our code",
    }),
    defineField({
      name: 'amountTargeted',
      title: 'Target Amount',
      type: 'string',
      description: "Give the target amount you want to achieve.",
    }),
    defineField({
      name: 'estimatePercentage',
      title: 'Percetage Estimate',
      type: 'number',
      description: "Give the percentage in number of how much we have raised to reach the Target Amount",
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
            { title: 'Cleaning', value: 'Cleaning' },
            { title: 'Clean Water', value: 'Clean Water' },
            { title: 'Forestry', value: 'Forestry' },
            { title: 'Planting', value: 'Planting' },
          ],
        },
      }),

      defineField({
        name: 'singleCauses',
        title: 'Information About Each Cause',
        description: 'Each Cause has its own unique content, so here you can provide information about a particular cause you are editing and PROVIDE ALL THE INFORMATION',
        type: 'array',
        of: [{type: 'reference', to: {type: 'singleCause'}}],
      }),
    ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    }
  }
})