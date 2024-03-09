import { defineField, defineType } from 'sanity'

export default defineType({
     name: 'ydelser',
     title: 'Ydelser',
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
               title: 'Ydelser Titel 1',
               type: 'string',
          }),
          defineField({
               name: 'text1',
               title: 'Ydelser brødtekst 1',
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
               title: 'Ydelser Titel 2',
               type: 'string',
          }),
          defineField({
               name: 'text2',
               title: 'Ydelser brødtekst 2',
               type: 'blockContent',
          }), 
          
          defineField({
               name: 'kasse1',
               title: 'Kasse 1 Titel',
               type: 'string',
             }),
             defineField({
               name: 'text3',
               title: 'Kasse 1 brødtekst',
               type: 'blockContent',
             }),
               defineField({
                 name: 'kasse2',
                 title: 'Kasse 2 Titel',
                 type: 'string',
               }),
               defineField({
                 name: 'text4',
                 title: 'Kasse 2 brødtekst',
                 type: 'blockContent',
               }),
               defineField({
                 name: 'kasse3',
                 title: 'Kasse 3 Titel',
                 type: 'string',
               }),
               defineField({
                 name: 'text5',
                 title: 'Kasse 3 brødtekst',
                 type: 'blockContent',
               }),
          
          
          
          
          defineField({
               name: 'title3',
               title: 'Ydelser Titel 3',
               type: 'string',
          }),
          defineField({
               name: 'text6',
               title: 'Ydelser brødtekst 3',
               type: 'blockContent',
          }),
          defineField({
               name: 'bulletpoint',
               title: 'Bulletpoints',
               type: 'array',
               of: [{ type: 'string' }],
          }),
          defineField({
               name: 'text7',
               title: 'Ydelser brødtekst 4',
               type: 'blockContent',
          }),
          defineField({
               name: 'title4',
               title: 'Ydelser Titel 4',
               type: 'string',
          }),
          defineField({
               name: 'text8',
               title: 'Ydelser brødtekst 5',
               type: 'blockContent',
          }),
          defineField({
               name: 'title5',
               title: 'Ydelser Titel 5',
               type: 'string',
          }),
          defineField({
               name: 'text9',
               title: 'Ydelser brødtekst 6',
               type: 'blockContent',
          }),
          defineField({
               name: 'title6',
               title: 'Ydelser Titel 6',
               type: 'string',
          }),
          defineField({
               name: 'text10',
               title: 'Ydelser brødtekst 7',
               type: 'blockContent',
          }),	
          defineField({
               name: 'title7',
               title: 'Ydelser Titel 7',
               type: 'string',
          }),
          defineField({
               name: 'text11',
               title: 'Ydelser brødtekst 8',
               type: 'blockContent',
          }),
     ],
     preview: {
          select: {
               title: 'lang',
          },
     },
})
