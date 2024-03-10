import { defineField, defineType } from 'sanity'

export default defineType({
     name: 'aftalestyring',
     title: 'Aftalestyring',
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
               title: 'Aftalestyring Titel 1',
               type: 'string',
          }),
          defineField({
               name: 'text1',
               title: 'Aftalestyring brødtekst 1',
               type: 'blockContent',
          }),
          defineField({
               name: 'title2',
               title: 'Aftalestyring Titel 2',
               type: 'string',
          }),
          defineField({
               name: 'text2',
               title: 'Aftalestyring brødtekst 2',
               type: 'blockContent',
          }),
          defineField({
               name: 'title3',
               title: 'Aftalestyring Titel 3',
               type: 'string',
          }),
          defineField({
               name: 'text3',
               title: 'Aftalestyring brødtekst 3',
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
