import { defineField, defineType } from 'sanity'

export default defineType({
     name: 'vier',
     title: 'Vi Er',
     type: 'document',
     fields: [
          defineField({
               name: 'lang',
               title: 'Hvilket sprog',
               type: 'string',
                 hidden: true,
          }),
          defineField({
               name: 'title',
               title: 'Vi Er Titel 1',
               type: 'string',
          }),
          defineField({
               name: 'text1',
               title: 'Vi Er brødtekst 1',
               type: 'blockContent',
          }),
          defineField({
               name: 'workers',
               title: 'Medarbejdere',
               type: 'array',
               of: [{
                    type: 'object',
                    fields: [
                         {
                              name: 'workertitle',
                              title: 'Medarbejder navn',
                              type: 'string',
                         },
                         {
                              name: 'workerjob',
                              title: 'Medarbejders stilling',
                              type: 'string',
                         },
                         {
                              name: 'workerinfo',
                              title: 'Medarbejders information',
                              type: 'string',
                         }
                    ]
               }]
          }),
          defineField({
               name: 'title2',
               title: 'Vi Er Titel 2',
               type: 'string',
          }),
          defineField({
               name: 'bulletpoint',
               title: 'Bulletpoints',
               type: 'array',
               of: [{
                    type: 'object',
                    fields: [
                         {
                              name: 'bullettitle',
                              title: 'Bulletpoint Titel',
                              type: 'string',
                         },
                         {
                              name: 'bullettext',
                              title: 'Bulletpoint Tekst',
                              type: 'string',
                         }
                    ]
               }],
          }),
          defineField({
               name: 'text2',
               title: 'Vi Er brødtekst 2',
               type: 'blockContent',
          }),
          defineField({
               name: 'title3',
               title: 'Vi Er Titel 3',
               type: 'string',
          }),
          defineField({
               name: 'text3',
               title: 'Vi Er brødtekst 3',
               type: 'blockContent',
          }),
          defineField({
               name: 'title4',
               title: 'Vi Er Titel 3',
               type: 'string',
          }),
          defineField({
               name: 'text4',
               title: 'Vi Er brødtekst 4',
               type: 'blockContent',
          }),
          defineField({
               name: 'title5',
               title: 'Vi Er Titel 4',
               type: 'string',
          }),
          defineField({
               name: 'text5',
               title: 'Vi Er brødtekst 5',
               type: 'blockContent',
          }),

     ],
     preview: {
          select: {
               title: 'lang',
          },
     },
})
