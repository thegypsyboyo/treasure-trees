import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name:'description',
      description:'Enter a short snippet for the blog...',
      title:'Desrption',
      type: 'string'
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'pageViews',
      title: 'Number Of Views',
      type: 'number',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [{type: 'reference', to: {type: 'authorinfo'}}],
    }),
    defineField({
      name: "postTags",
      title: "Post Tags",
      description: "This contains the tags in each blog post",
      type: 'array',
      of: [{type: 'reference', to: {type: 'postTag'}}],
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: 'array',
      of: [{type: 'reference', to: {type: 'tag'}}],
      // readOnly: true,

    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
      // readOnly: true,   
    }),
    defineField({
      name: 'singlePostInformations',
      title: 'Information About Each Post',
      description: 'Each Post has its own unique content, so here you can provide information about a particular post you are editing',
      type: 'array',
      of: [{type: 'reference', to: {type: 'singlePostInformation'}}],
      // readOnly: true,   
    }),
    defineField({
      name: 'mainImage',
      title:'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
