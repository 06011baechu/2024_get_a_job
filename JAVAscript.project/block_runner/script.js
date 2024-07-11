var i = 0;

function random( min, max) {
    return Math.round( min + (Math.random() * ( max - min)));
}

function randomChoice(array){
    return array[ Math.round( random( 0, array.length -1))];
}

var InfiniteRunner = Sketch.create({
    fullscreen: false,
    width: 640,
    height: 360,
    container : document.getElementById('container')
});


function Vetor2(x, y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.previousX = 0;
    this.previousY = 0;
};

Vector2.prototype.setPosition = function(x, y){
    this.previousX = this.x;
    this.previousY = this.y;

    this.x = x;
    this.y = y;
};

Vector2.prototype.setX = function(x){
    this.previousX = this.x
    this.x = x;
};

Vector2.prototype.setY = function(y){
    this.previousY = this.y;
    this.y = y;
};

Vector2.prototype.insercects = function(obj){
    if(obj.x < this.x + this.width && obj.y < this.y + this.height &&
        obj.x + obj.width > this.x && obj.y + obj.height > this.y
    ){
        return true;
    
    }
    return false;
};

Vector2.prototype.insercectsLeft = function(obj){
    if(obj.x < this.x + this.width && obj.y < this.y + this.height){
        return true;
    }
    return false;
};


function Player(option){
    this.setPosition(option.x, option.y);
    this.width = options.width;
}