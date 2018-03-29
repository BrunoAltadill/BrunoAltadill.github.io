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
        
        //Load image
        self.loadImage = function() {
            console.log(self.index);
            self.image(self.images[self.index]);
        };
    }

    return new Model();
});
