import { defineField, defineType } from 'sanity'

export default defineType({
     name: 'faq',
     title: 'FAQ',
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
               title: 'FAQ Titel 1',
               type: 'string',
          }),
          defineField({
               name: 'text1',
               title: 'FAQ brødtekst 1',
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
               }],
               validation: Rule => Rule.max(3).error('Du kan kun oprette op til 3 medarbejdere.')
          }),
          defineField({
               name: 'title2',
               title: 'FAQ Titel 2',
               type: 'string',
          }),
          defineField({
               name: 'analyser',
               title: 'ANALYSER Bulletpoints',
               type: 'array',
               of: [{
                    type: 'object',
                    fields: [
                         {
                              name: 'bullettitle1',
                              title: 'Bulletpoint Titel',
                              type: 'string',
                         },
                         {
                              name: 'bullettext1',
                              title: 'Bulletpoint Tekst',
                              type: 'blockContent',
                         },
                         {
                              name: 'bulletpointlink',
                              title: 'Bulletpoint Link',
                              type: 'string',
                         },
                    ]
               }],
          }),
          defineField({
               name: 'leverandor',
               title: 'LEVERANDØRER & KONTRAKTER Bulletpoints',
               type: 'array',
               of: [{
                    type: 'object',
                    fields: [
                         {
                              name: 'bullettitle2',
                              title: 'Bulletpoint Titel',
                              type: 'string',
                         },
                         {
                              name: 'bullettext2',
                              title: 'Bulletpoint Tekst',
                              type: 'blockContent',
                         },
                         {
                              name: 'bulletpointlink',
                              title: 'Bulletpoint Link',
                              type: 'string',
                         },
                         
                    ]
               }],
          }),
          defineField({
               name: 'okonomi',
               title: 'ØGET ØKONOMISK RÅDERUM Bulletpoints',
               type: 'array',
               of: [{
                    type: 'object',
                    fields: [
                         {
                              name: 'bullettitle3',
                              title: 'Bulletpoint Titel',
                              type: 'string',
                         },
                         {
                              name: 'bullettext3',
                              title: 'Bulletpoint Tekst',
                              type: 'blockContent',
                         }
                    ]
               }],
          }),
          defineField({
               name: 'drift',
               title: 'DRIFT & CONTROLLING Bulletpoints',
               type: 'array',
               of: [{
                    type: 'object',
                    fields: [
                         {
                              name: 'bullettitle4',
                              title: 'Bulletpoint Titel',
                              type: 'string',
                         },
                         {
                              name: 'bullettext4',
                              title: 'Bulletpoint Tekst',
                              type: 'blockContent',
                         },
                         {
                              name: 'bulletpointlink',
                              title: 'Bulletpoint Link',
                              type: 'string',
                         },
                    ]
               }],
          }),
          defineField({
               name: 'indkob',
               title: 'INDKØB & UDBUD Bulletpoints',
               type: 'array',
               of: [{
                    type: 'object',
                    fields: [
                         {
                              name: 'bullettitle5',
                              title: 'Bulletpoint Titel',
                              type: 'string',
                         },
                         {
                              name: 'bullettext5',
                              title: 'Bulletpoint Tekst',
                              type: 'blockContent',
                         },
                         {
                              name: 'bulletpointlink',
                              title: 'Bulletpoint Link',
                              type: 'string',
                         },
                    ]
               }],
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
