import { defineField, defineType } from 'sanity';

export default defineType ({
  name: 'allData',
  title: 'All Data',
  type: 'document',

  fields: [
    defineField( {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Please give the EXACT TITLE of the serivce you are currently editing',
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
      name: 'descriptionOne',
      title: 'Description One',
      type: 'string',
    }),
    defineField({
      name: 'descriptionTwo',
      title: 'Description Two',
      type: 'string',
    }),
    defineField({
      name: 'descriptionThree',
      title: 'Description Three',
      type: 'string',
    }),
    defineField({
      name: "serviceImageOne",
      title: "Sub Service Image one",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "serviceImageTwo",
      title: "Sub Service Image Two",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'string',
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
              name: 'arrowDegree',
              title: 'Arrow Degree',
              type: 'string',
            }),
            defineField({
              name: 'id',
              title: 'ID',
              type: 'number',
            }),
          ],
        },
      ],
    }),
    
    defineField({
      name: 'serviceList',
      title: 'Service List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'id',
              title: 'ID',
              type: 'number',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'sidebarMaterials',
      title: 'Sidebar Materials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: {
                list: [
                  { title: 'PDF File', value: 'pdf' },
                  { title: 'Image File', value: 'image' },
                  { title: 'Fillable PDF File', value: 'fillablePdf' },
                ],
              },
            }),
            defineField({
              name: 'id',
              title: 'ID',
              type: 'number',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'sidebarServiceLink',
      title: 'Sidebar Service Link',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'id',
              title: 'ID',
              type: 'number',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "sidebarImageAdd",
      title: "Sidebar Image Advert",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    }
  }
})