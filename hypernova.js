import hypernova from 'hypernova/server';

const isDev = process.env.NODE_ENV !== 'production' ? true : false;

hypernova({
  devMode: isDev,

  getComponent(name) {
    if (name === 'Hello') {
      if (isDev) {
        delete require.cache['./app/javascript/packs/hello_react'];
        console.log(require('./app/javascript/packs/hello_react').default);
        return require('./app/javascript/packs/hello_react').default;
      }
    }
  },

  port: 3030,
});
