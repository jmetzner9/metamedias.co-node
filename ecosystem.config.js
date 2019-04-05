module.exports = {
  apps: [
    {
      name: 'MetaMedias',
      script: './bin/www',

      node_args: ['--inspect=0.0.0.0:9229'],
      watch: true,
      ignore_watch: ['public/**/*', 'views/**/*.ejs'],
    },
  ],
};
