/* Author: thyplock */

require.config({
    paths: {
        'text': '../libs/require/text',
        'jquery': '../libs/jQuery/jquery-3.2.1.min',
        'typewriter': '../libs/typewrite-master/typewrite.min'
    },
    shim: {
        'typewriter': {
            deps: ['jquery']
        }
    }
});

require(['app'], function (app) {
    app.init();
});