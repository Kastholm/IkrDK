import { defineField, defineType } from 'sanity'

export default defineType({
     name: 'samarbejde',
     title: 'Samarbejde',
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
               title: 'Samarbejde Titel 1',
               type: 'string',
          }),
          defineField({
               name: 'text1',
               title: 'Samarbejde brødtekst 1',
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
               title: 'Samarbejde Titel 2',
               type: 'string',
          }),
          defineField({
               name: 'bulletpoint',
               title: 'Bulletpoints',
               type: 'array',
               of: [{ type: 'string' }],
          }),
          defineField({
               name: 'title3',
               title: 'Samarbejde Titel 3',
               type: 'string',
          }),
          defineField({
               name: 'bulletpoint2',
               title: 'Bulletpoints 2',
               type: 'array',
               of: [{ type: 'string' }],
          }),
          defineField({
               name: 'text2',
               title: 'Samarbejde brødtekst 2',
               type: 'blockContent',
          }), defineField({
               name: 'title4',
               title: 'Samarbejde Titel 3',
               type: 'string',
          }),
          defineField({
               name: 'text3',
               title: 'Samarbejde brødtekst 3',
               type: 'blockContent',
          }),
          defineField({
               name: 'title5',
               title: 'Samarbejde Titel 4',
               type: 'string',
          }),
          defineField({
               name: 'text4',
               title: 'Samarbejde brødtekst 4',
               type: 'blockContent',
          }),
     ],
     preview: {
          select: {
               title: 'lang',
          },
     },
})
