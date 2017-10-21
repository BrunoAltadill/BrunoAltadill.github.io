define(['jquery', 'typewriter'], function ($, typewrite) {

    function Model() {
        var self = this;

        //Init title page
        self.init = function () {
            $('#title').typewrite({
                actions: [
                    {type: 'Bruno Altadill Gonzalez'},
                    {delay: 1500},
                    {remove: {num: 23, type: 'stepped'}},
                    {delay: 1500},
                    {type: 'Work in progress. Please be patient...'},
                    {delay: 10000}
                ]
            });
        };
    }

    return new Model();
});
