'use strict';

module.exports = {
  port    : 443,
  db      : process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://localhost/swara-server',
  assets  : {
    lib : {
      css : [
        'public/lib/bootstrap/dist/css/bootstrap.min.css',
        'public/lib/bootstrap/dist/css/bootstrap-theme.min.css',
        'public/lib/angular-busy/dist/angular-busy.min.css'
      ],
      js  : [
        'public/lib/angular/angular.min.js',
        'public/lib/angular-resource/angular-resource.min.js',
        'public/lib/angular-cookies/angular-cookies.min.js',
        'public/lib/angular-animate/angular-animate.min.js',
        'public/lib/angular-touch/angular-touch.min.js',
        'public/lib/angular-sanitize/angular-sanitize.min.js',
        'public/lib/angular-ui-router/release/angular-ui-router.min.js',
        'public/lib/angular-ui-utils/ui-utils.min.js',
        'public/lib/angular-bootstrap/ui-bootstrap-tpls.min.js',
        'public/lib/angular-prompt/dist/angular-prompt.min.js',
        'public/lib/angular-utils-pagination/dirPagination.js',
        'public/lib/angular-breadcrumb/release/angular-breadcrumb.min.js',
        'public/lib/angular-scroll-glue/src/scrollglue.js',
        'public/lib/angular-busy/dist/angular-busy.min.js'
      ]
    },
    css : 'public/dist/application.min.css',
    js  : 'public/dist/application.min.js'
  },
  twitter : {
    clientID     : process.env.TWITTER_KEY || 'CONSUMER_KEY',
    clientSecret : process.env.TWITTER_SECRET || 'CONSUMER_SECRET',
    callbackURL  : 'https://localhost:443/auth/twitter/callback'
  },
  google  : {
    clientID     : process.env.GOOGLE_ID || 'APP_ID',
    clientSecret : process.env.GOOGLE_SECRET || 'APP_SECRET',
    callbackURL  : 'https://localhost:443/auth/google/callback'
  },
  github  : {
    clientID     : process.env.GITHUB_ID || 'APP_ID',
    clientSecret : process.env.GITHUB_SECRET || 'APP_SECRET',
    callbackURL  : 'https://localhost:443/auth/github/callback'
  },
  mailer  : {
    from    : process.env.MAILER_FROM || 'MAILER_FROM',
    options : {
      service : process.env.MAILER_SERVICE_PROVIDER || 'MAILER_SERVICE_PROVIDER',
      auth    : {
        user : process.env.MAILER_EMAIL_ID || 'MAILER_EMAIL_ID',
        pass : process.env.MAILER_PASSWORD || 'MAILER_PASSWORD'
      }
    }
  }
};
