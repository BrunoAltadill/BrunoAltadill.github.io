require.config({
    paths: {
        'ko': '../libs/knockout/knockout-3.4.0',
        'ko-mapping': '../libs/knockout/knockout.mapping-latest.debug'
    }
});

require(['ko', 'ko-mapping', 'app'], function (ko, mapping, app) {
    ko.mapping = mapping;
    app.init();
    ko.applyBindings(app);
});