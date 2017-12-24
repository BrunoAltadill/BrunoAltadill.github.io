define(['jquery', 'typewriter'], function ($, typewrite) {

    function Model() {
        var self = this;

        //Init title page
        self.init = function () {
            //Presentation of webpage
            homePage();
        };

        //Show presentation
        function homePage() {
            $('#title').typewrite({
                blinkingCursor: false,
                actions: [
                    {type: 'Bruno Altadill Gonzalez '},
                    {delay: 1500},
                    {type: '<br>'},
                    {type: 'Informatics Engineer'},
                    {delay: 1500},
                    {remove: {num: 20, type: 'stepped'}},
                    {delay: 1500},
                    {type: 'Work in progress. Please be patient...'},
                    {delay: 10000}
                ]
            });
        }
    }

    return new Model();
});
