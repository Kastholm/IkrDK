import { defineField, defineType } from 'sanity'

export default defineType({
     name: 'okoanalyser',
     title: 'Økonomiske Analyser',
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
               title: 'Økonomi Analyse Titel 1',
               type: 'string',
          }),
          defineField({
               name: 'text1',
               title: 'Økonomi Analyse brødtekst 1',
               type: 'blockContent',
          }),
          defineField({
               name: 'title2',
               title: 'Økonomi Analyse Titel 2',
               type: 'string',
          }),
          defineField({
               name: 'text2',
               title: 'Økonomi Analyse brødtekst 2',
               type: 'blockContent',
          }),
          defineField({
               name: 'title3',
               title: 'Økonomi Analyse Titel 3',
               type: 'string',
          }),
          defineField({
               name: 'text3',
               title: 'Økonomi Analyse brødtekst 3',
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
