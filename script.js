alert("🧿📣Intersteller || Red Giant [ Mira (ο Ceti) ]..!\n\n\n👉The current size of the Sun compared to its estimated maximum size during its red-giant phase in the future. The Sun will exit the main sequence in approximately 5 billion years and start to turn into a red giant. As a red giant, the Sun will grow so large that it will engulf Mercury, Venus, and probably Earth.\n\n\n👉Wait for 10sec to load the sound effect. The sound effect is recorded by NASA, in 2019. Thanks for visiting. Enjoy🥰");

//DOM loader

window.addEventListener('load', checkJSLoaded)

function checkJSLoaded() {  

var sound = new Howl({

  src: ['http://dl.dropbox.com/s/kjcwqsw5xml1148/The%20Sound%20of%20Space%20%28Use%20Your%20Headphone%29%20%28%20256kbps%20cbr%20%29.mp3']

});

// Clear listener after first call.

sound.once('load', function(){

  sound.play();

});

var canvas = document.getElementById("canvas");

canvas.height = window.innerHeight;

canvas.width = window.innerWidth;

var ctx = canvas.getContext("2d");

window.addEventListener('resize',

    function(){

    

    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;

    init1();

    init2();

});

function Circle(x,y,dx,dy,radius)

{

    this.x = x;

    this.y = y;

    this.radius = radius;

    this.dx = dx;

    this.dy = dy;

    

    this.draw = function()

    {

        ctx.beginPath();

        ctx.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);

       // ctx.fillStyle = "#fff";

       ctx.fillStyle = 'hsl(' + 5000 * Math.random() + ', 150%, 50%)';

        ctx.shadowColor = '#fff';

        ctx.shadowBlur = 50;

        ctx.fill();

    }

    

    this.update = function()

    {

        this.draw();

        

        if(this.x + this.radius > innerWidth || this.x - this.radius < 0)

        {

            this.dx = -this.dx;

        }

        if(this.y + this.radius > innerHeight || this.y - this.radius < 0)

        {

            this.dy = -this.dy;

        }

        

        this.x += this.dx;

        this.y += this.dy;

    }

}

var circleArray1 = [];

function init1()

{

    circleArray1 = [];

    

    for(var i = 0;i < 100;i++)

    {

        var radius = Math.random() * 2+1;

        

        var x = Math.random() * (innerWidth - radius * 2) + radius;

        var y = Math.random() * (innerHeight - radius * 2) + radius;

        if(radius > 2)

        {

            var dx = (Math.random() - 0.5) * 2;

            var dy = (Math.random() - 0.5) * 2;

    

        }

        else

        {

            var dx = (Math.random() - 0.5);

            var dy = (Math.random() - 0.5);

        }

        

        circleArray1.push(new Circle(x,y,dx,dy,radius));

    }

}

var circleArray2 = [];

function init2()

{

    circleArray2 = [];

    

    for(var i = 0;i < 800;i++)

    {

        var radius = Math.random() * 1;

        

        var x = Math.random() * (innerWidth - radius * 2) + radius;

        var y = Math.random() * (innerHeight - radius * 2) + radius;

        

        var dx = (Math.random() - 0.2);

        var dy = (Math.random() - 0.2);

        

        circleArray2.push(new Circle(x,y,dx,dy,radius));

    }

}

function animation() {

    

    requestAnimationFrame(animation);

    

    ctx.clearRect(0,0,innerWidth,innerHeight);

    

    for(var i = 0;i < circleArray1.length;i++)

    {

        circleArray1[i].update();

        circleArray2[i].update();

    }

    for(var i = 0;i < circleArray2.length;i++)

    {

        

        circleArray2[i].update();

    }

}

init1();

init2();

animation();};

/*

┈┈┈╲┈┈┈┈╱

 ┈┈╱    ▔╲

┈┈┃┈▇┈┈▇┈┃

╭╮┣━━━━━━┫╭╮

┃┃┃┈┈┈┈┈┈┃┃┃

╰╯┃┈┈┈┈┈┈┃╰╯

┈┈╰┓┏━━┓┏╯

┈┈┈╰╯┈┈╰╯      

😊You r always welcome 😊

The EnD

*/
