var ball;
var database
var position



function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database=firebase.database()
    var locofchild=database.ref("ball/position")
    locofchild.on("value", readop, showerror)
    
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        WritePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        WritePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        WritePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        WritePosition(0,+1);
    }
    drawSprites();
}

function WritePosition(x,y){
    database.ref("ball/position").set({
        x: ball.x+x,
        y: ball.y+y
    })
    
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}


 function readop(data){
 position=database.val()
 ball.x=position.x
 ball.y=position.y

}

function showerror(){
console.log("error")

}
