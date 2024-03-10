import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'forside',
  title: 'Forside',
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
      title: 'Forside Titel 1',
      type: 'string',
    }),
    defineField({
     name: 'title2',
     title: 'Forside Titel 2',
     type: 'string',
   }),
   defineField({
     name: 'text1',
     title: 'Forside brødtekst 1',
     type: 'blockContent',
   }),
   defineField({
     name: 'workertitle',
     title: 'Medarbejder navn',
     type: 'string',
   }),
   defineField({
     name: 'workerjob',
     title: 'Medarbejders stilling',
     type: 'string',
   }),
   defineField({
     name: 'workerinfo',
     title: 'Medarbejders information',
     type: 'blockContent',
   }),
   defineField({
     name: 'title3',
     title: 'Forside Titel 3',
     type: 'string',
   }),
   defineField({
     name: 'text2',
     title: 'Forside brødtekst 2',
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
          name: 'title4',
          title: 'Forside Titel 4',
          type: 'string',
        }),
        defineField({
          name: 'text6',
          title: 'Forside brødtekst 3',
          type: 'blockContent',
        }),
        defineField({
          name: 'title5',
          title: 'Forside Titel 5',
          type: 'string',
        }),
        defineField({
          name: 'text7',
          title: 'Forside brødtekst 4',
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
