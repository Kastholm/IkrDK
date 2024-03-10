import { defineField, defineType } from 'sanity'

export default defineType({
     name: 'Kontakt',
     title: 'Kontakt',
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
               title: 'Kontakt Titel 1',
               type: 'string',
          }),
          defineField({
               name: 'title2',
               title: 'Kontakt Titel 2',
               type: 'string',
          }),
          defineField({
               name: 'title3',
               title: 'Kontakt Titel 3',
               type: 'string',
          }),
          defineField({
               name: 'title4',
               title: 'Kontakt Titel 4',
               type: 'string',
          }),
          defineField({
               name: 'title5',
               title: 'Kontakt Titel 5',
               type: 'string',
          }),
          defineField({
               name: 'text1',
               title: 'Kontakt brødtekst 1',
               type: 'blockContent',
          }),

          defineField({
               name: 'title6',
               title: 'Kontakt Titel 6',
               type: 'string',
          }),
          defineField({
               name: 'title7',
               title: 'Kontakt Titel 7',
               type: 'string',
          }),
          defineField({
               name: 'title8',
               title: 'Kontakt Titel 8',
               type: 'string',
          }),
          defineField({
               name: 'title9',
               title: 'Kontakt Titel 9',
               type: 'string',
          }),
          defineField({
               name: 'title10',
               title: 'Kontakt Titel 10',
               type: 'string',
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
