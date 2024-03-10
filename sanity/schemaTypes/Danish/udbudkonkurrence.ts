import { defineField, defineType } from 'sanity'

export default defineType({
     name: 'udbudkonkurrence',
     title: 'Udbud og Konkurrence',
     type: 'document',
     fields: [
          defineField({
               name: 'lang',
               title: 'Hvilket sprog',
               type: 'string',
               hidden: true,
          }),
          defineField({
               name: 'mainImage',
               title: 'Main image',
               type: 'image',
               hidden: true,
               options: {
                 hotspot: true,
               },
             }),
          defineField({
               name: 'title',
               title: 'Udbudkonkurrence Titel 1',
               type: 'string',
          }),
          defineField({
               name: 'text1',
               title: 'Udbudkonkurrence brødtekst 1',
               type: 'blockContent',
          }),
          defineField({
               name: 'title2',
               title: 'Udbudkonkurrence Titel 2',
               type: 'string',
          }),
          defineField({
               name: 'text2',
               title: 'Udbudkonkurrence brødtekst 2',
               type: 'blockContent',
          }),
          defineField({
               name: 'title3',
               title: 'Udbudkonkurrence Titel 3',
               type: 'string',
          }),
          defineField({
               name: 'text3',
               title: 'Udbudkonkurrence brødtekst 3',
               type: 'blockContent',
          }),
     ],
     preview: {
          select: {
               title: 'lang',
               subtitle: 'title',
               media: 'mainImage',
          },
     },
})
