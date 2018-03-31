define(['ko'], function (ko) {

    function Model() {
        var self = this;
        self.index = 0;
        self.image = ko.observable();
        self.footer = ko.observable();
        self.images = [
            '01.jpg',
            '02.jpg',
            '03.jpg',
            '04.jpg'
        ];
        self.footers = [
            {"title": "title_1", "description": "description_1"},
            {"title": "title_2", "description": "description_2"},
            {"title": "title_3", "description": "description_3"},
            {"title": "title_4", "description": "description_4"}
        ];

        //Init page
        self.init = function () {
            loadImage();
        };

        //Previous image
        self.previous = function () {
            self.index--;
            if (self.index < 0) {
                self.index = self.images.length;
                self.index--;
            }
            loadImage();
        };

        //Next image
        self.next = function () {
            self.index++;
            if (self.index >= self.images.length) {
                self.index = 0;
            }
            loadImage();
        };

        //Arrow pressed
        self.arrowPressed = function (data, event) {
            var key = event.key;
            if (key === 'ArrowLeft') {
                self.previous();
            } else if (key === 'ArrowRight') {
                self.next();
            }
            return true;
        };

        //Load image
        function loadImage() {
            self.image(self.images[self.index]);
            self.footer(self.footers[self.index]);
        }
    }

    return new Model();
});
