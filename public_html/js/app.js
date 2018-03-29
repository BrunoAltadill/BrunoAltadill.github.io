define(['ko'], function (ko) {

    function Model() {
        var self = this;
        self.index = 0;
        self.image = ko.observable();
        self.images = [
            '01.jpg',
            '02.jpg',
            '03.jpg',
            '04.jpg'
        ];

        //Init page
        self.init = function () {
            self.image(self.images[self.index]);
        };

        //Previous image
        self.previous = function () {
            self.index--;
            if (self.index < 0) {
                self.index = self.images.length;
                self.index--;
            }
            self.loadImage();
        };

        //Next image
        self.next = function () {
            self.index++;
            if (self.index >= self.images.length) {
                self.index = 0;
            }
            self.loadImage();
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
        self.loadImage = function () {
            self.image(self.images[self.index]);
        };
    }

    return new Model();
});
