
import { config, collection, fields } from '@keystatic/core';

//export default config({
//storage: {
 // kind: 'github',
 // repo: 'mbrowndesn/mbrowndesn.github.io',
//},

export default config({
  // Local files while running `astro dev`; Keystatic Cloud on the deployed site.
  storage: import.meta.env.DEV ? { kind: 'local' } : { kind: 'cloud' },
  cloud: {
    // TODO: replace with the identifier from your Keystatic Cloud project's settings page.
   project: 'macylynn-com/mbrowndesn-github-io',
 },
 ui: {
 brand: { name: 'Photo Gallery' },
  },

  collections: {
    designs: collection({
      label: 'Designs',
      slugField: 'title',
      path: 'src/content/designs/*',
      schema: {
        title: fields.slug({
          name: { label: 'Title' },
        }),
        date: fields.text({
          label: 'Date',
        }),
        image: fields.image({
          label: 'Design Image',
          directory: 'public/designs',
          publicPath: '/designs/',
        }),
        order: fields.integer({
          label: 'Display Order',
          defaultValue: 0,
        }),
      },
    }),

    film: collection({
      label: 'Film',
      slugField: 'title',
      path: 'src/content/film/*',
      schema: {
        title: fields.slug({
          name: { label: 'Title' },
        }),
        date: fields.text({
          label: 'Date',
        }),
        image: fields.image({
          label: 'Film Photograph',
          directory: 'public/film',
          publicPath: '/film/',
        }),
        order: fields.integer({
          label: 'Display Order',
          defaultValue: 0,
        }),
      },
    }),

notebook: collection({
  label: 'Notebook',
  slugField: 'title',
  path: 'src/content/notebook/*',
  schema: {
    title: fields.slug({
      name: { label: 'Title' },
    }),
    image: fields.image({
      label: 'Image',
      directory: 'public/notebook',
      publicPath: '/notebook/',
    }),
    description: fields.text({
      label: 'Short Description',
      multiline: true,
    }),
    content: fields.text({
      label: 'Expanded Content',
      multiline: true,
    }),
    order: fields.integer({
      label: 'Display Order',
      defaultValue: 0,
    }),
  },
}),

  },
});
