/* 
To DO List:

1: make 2 or more hiding places
2: make wormholes 2 for each player
3: find a way to import sound
4: Clarify/clean up the direction paragraph

6: add game over/losing system
7: add level






*/






//Canvas
mycan.style.display = "block";
mycan.height = 600;
mycan.width = 600;
//make players
let player = {x:510, y: 541, w:30, h:30};
let player2 = {x:60, y:31, w:30, h:30};
//make walls
let wall = {x: 90, y: 91 , w: 30, h:500};
let wall2 = {x:120, y:511, w:300, h:29};
let wall3 = {x:390, y:271, w:30, h:260};
let wall4 = {x:510, y:181, w:100, h:120};
let wall5 = {x:120, y:91, w:150, h:30};
let wall6 = {x:330, y:91, w:90, h:30};
let wall7 = {x:390, y:121, w:30, h:90};
//make obticles
let obsticle1 = {x:180, y:361, w:60, h:30};
let obsticle2 = {x:270, y:361, w:60, h:30};
let obsticle3 = {x:180, y:421, w:60, h:30};
let obsticle4 = {x:270, y:421, w:60, h:30};
//make hiding zones
//we dont need to make collisions for hiding zones
let hide1 = {x:150, y:451, w:30, h:30};
let hide2 = {x:510, y:151, w:30, h:30};
//make wormholes for player1
let worm1p1 = {x:240, y:151, w:30, h:30};
let worm2p1 = {x:30, y:540, w:30, h:30};
let worm3p1 = {x:240, y:151, w:30, h:30};
let worm4p1 = {x:30, y:540, w:30, h:30};
//make wormholes for player2
let worm1p2 = {x:540, y:30, w:30, h:30};
let worm2p2 = {x:300, y:331, w:30, h:30}








//make border
let border1 = {x:0, y:0, w:30, h:600};
let border2 = {x:0, y:571, w:600, h:30};
let border3 = {x:571, y:0, w:30, h:600};
let border4 = {x:0, y:0, w:600, h:30};






//Context
const ctx = mycan.getContext("2d");

function checkCollison(rect1, rect2) {
    if (
        rect1.x < rect2.x + rect2.w &&
        rect1.x + rect1.w > rect2.x &&
        rect1.y < rect2.y + rect2.h &&
        rect1.h + rect1.y > rect2.y
    ) {
        // Collision detected!
        return true;
    } else {
        // No collision
        return false;
    }
}
        


 
function movePlayer(object, x, y) {
    object.x += x;
    object.y += y;

    //get collisions for walls
    //wall1
    if (checkCollison(object, wall)) {
        object.x -= x;
        object.y -= y;
        return;
    };
     //wall2
    if (checkCollison(object, wall2)) {
        object.x -= x;
        object.y -= y;
        return;
    };
    //wall3
    if (checkCollison(object, wall3)) {
        object.x -= x;
        object.y -= y;
        return;
    };
    //wall4
    if (checkCollison(object, wall4)) {
        object.x -= x;
        object.y -= y;
        return;
    };
    //wall5
    if (checkCollison(object, wall5)){
        object.x -=x;
        object.y -=y;
        return;
    }
    //wall6
    if (checkCollison(object, wall6)){
        object.x -=x;
        object.y -=y;
        return;
    }
    //wall7
    if (checkCollison(object, wall7)){
        object.x -=x;
        object.y -=y;
        return;
    }
    //check collision for obsitcles
    //obsticle1
    if (checkCollison(object, obsticle1)){
        object.x -=x;
        object.y -=y;
        return;
    }
    //obsticle2
    if (checkCollison(object, obsticle2)){
        object.x -=x;
        object.y -=y;
        return;
    }
    //obsticle3
    if (checkCollison(object, obsticle3)){
        object.x -=x;
        object.y -=y;
        return;
    }
    //obsticle4
    if (checkCollison(object, obsticle4)){
        object.x -=x;
        object.y -=y;
        return;
    }
    






    //making collision for border
    if (checkCollison(object, border1)){
        object.x -= x;
        object.y -= y;
        return;
    };
    if(checkCollison(object, border2)){
        object.x -= x;
        object.y -= y;
        return;
    }
    if(checkCollison(object, border3)){
        object.x -=x;
        object.y -=y;
        return;
    }
    if(checkCollison(object, border4)){
        object.x -=x;
        object.y -=y;
        return;
    }
    //make collision for wormhole
    //wormhole1, and 2 for player 1
    if (checkCollison(player, worm1p1)){
        player = {x: 30, y:540, w:30, h:30};
        return;
    }
    if (checkCollison(player, worm2p1)){
        player = {x:240, y:151, w:30, h:30};
        return;
    }
    //wormhole3, and 4 for player 2
    if (checkCollison(player2, worm3p2)){
        player2 = {x:300, y:331, w:30, h:30};
        return;
    }
    if (checkCollison(player2, worm4p2 )){
        player2 = {x:540, y:30, w:30, h:30}
    }
    

    
    
}

const moveHandler = (isPlayer1) => {
    if (player.x == player2.x && player.y == player2.y) {
        document.getElementById('info').textContent = isPlayer1 ? 'Player1 killed player2' : 'Player2 killed player1';
        location.reload();

    }
}
//hide1, player1, player2, collision
const hide1p1 = (isPlayer1) => {
    if (player.x == hide1.x && player.y == hide1.y) {
        document.getElementById('hide1Text1').textContent = isPlayer1 = 'Player1 is hiding...'

    }
    if (player.x != hide1.x) {
        document.getElementById('hide1Text1').textContent = isPlayer1 = ''

    }
    if (player.y != hide1.y) {
        document.getElementById('hide1Text1').textContent = isPlayer1 = ''

    }
    
}
const hide1p2 = (isPlayer2) => {
    if (player2.x == hide1.x && player2.y == hide1.y) {
        document.getElementById('hide1Text2').textContent = isPlayer2 = 'Player2 is hiding...'

    }
    if (player2.x != hide1.x) {
        document.getElementById('hide1Text2').textContent = isPlayer2 = ''

    }
    if (player2.y != hide1.y) {
        document.getElementById('hide1Text2').textContent = isPlayer2 = ''

    }

}


//end of hide1, player1, player2, collision
//hide2, player1, player2, collision
const hide2p1 = (isPlayer1) => {
    if (player.x == hide2.x && player.y == hide2.y) {
        document.getElementById('hide2Text1').textContent = isPlayer1 = 'Player1 is hiding...'

    }
    if (player.x != hide2.x) {
        document.getElementById('hide2Text1').textContent = isPlayer1 = ''

    }
    if (player.y != hide2.y) {
        document.getElementById('hide2Text1').textContent = isPlayer1 = ''

    }
    
}
const hide2p2 = (isPlayer2) => {
    if (player2.x == hide2.x && player2.y == hide2.y) {
        document.getElementById('hide2Text2').textContent = isPlayer2 = 'Player2 is hiding...'

    }
    if (player2.x != hide2.x) {
        document.getElementById('hide2Text2').textContent = isPlayer2 = ''

    }
    if (player2.y != hide2.y) {
        document.getElementById('hide2Text2').textContent = isPlayer2 = ''

    }
    
}


//Start-position
ctx.fillRect(player.x, player.y, player.w, player.h);
ctx.fillRect(player2.x, player2.y, player2.w, player2.h);
//No-smooth-movement
window.onkeydown = move = (e) => {
    let key = e.key;
  //player1(red)
    switch (key) {
        case 'w':
            movePlayer(player2, 0, -30);
            moveHandler(false);
            hide1p1(false);
            hide1p2(false);
            hide2p1(false);
            hide2p2(false);
            break;
        case 'a':
            movePlayer(player2, -30, 0);
            moveHandler(false);
            hide1p1(false);
            hide1p2(false);
            hide2p1(false);
            hide2p2(false);



            break;
        case 's':
            movePlayer(player2, 0, 30);
            moveHandler(false);
            hide1p1(false);
            hide1p2(false);
            hide2p1(false);
            hide2p2(false);



            break;
        case 'd':
            movePlayer(player2, 30, 0);
            moveHandler(false);
            hide1p1(false);
            hide1p2(false);
            hide2p1(false);
            hide2p2(false);



            break;
        case 'ArrowRight':
            movePlayer(player, 30, 0);
            moveHandler(true);
            hide1p1(false);
            hide1p2(false);
            hide2p1(false);
            hide2p2(false);



            break;
        case 'ArrowLeft':
            movePlayer(player, -30, 0);
            moveHandler(true);
            hide1p1(false);
            hide1p2(false);
            hide2p1(false);
            hide2p2(false);



            break;
        case 'ArrowDown':
            movePlayer(player, 0, 30);
            moveHandler(true);
            hide1p1(false);
            hide1p2(false);
            hide2p1(false);
            hide2p2(false);



            break;
        case 'ArrowUp':
            movePlayer(player, 0, -30);
            moveHandler(true);
            hide1p1(false);
            hide1p2(false);
            hide2p1(false);
            hide2p2(false);



            break;
    }
}

const draw = ()=>{
//player draw, and player colors
  ctx.clearRect(0,0, mycan.width, mycan.height);
  ctx.fillStyle = "blue";
  ctx.fillRect(player.x, player.y, player.w, player.h);
  ctx.fillStyle = 'red';
  ctx.fillRect(player2.x,player2.y, player2.w, player2.h);

 
  //wall1, and so on...
  ctx.fillStyle = 'green';
  ctx.fillRect(wall.x, wall.y, wall.w, wall.h);
  ctx.fillStyle = 'green';
  ctx.fillRect(wall2.x, wall2.y, wall2.w, wall2.h);
  ctx.fillStyle = 'green';
  ctx.fillRect(wall3.x, wall3.y, wall3.w, wall3.h);
  ctx.fillStyle = 'green';
  ctx.fillRect(wall4.x, wall4.y, wall4.w, wall4.h);
  ctx.fillStyle = 'green';
  ctx.fillRect(wall5.x, wall5.y, wall5.w, wall5.h);
  ctx.fillStyle = 'green';
  ctx.fillRect(wall6.x, wall6.y, wall6.w, wall6.h);
  ctx.fillStyle = 'green';
  ctx.fillRect(wall7.x, wall7.y, wall7.w, wall7.h);

  //obsitcle1, and so on...
  ctx.fillStyle = '#158466';
  ctx.fillRect(obsticle1.x, obsticle1.y, obsticle1.w, obsticle1.h);
  ctx.fillStyle = '#158466';
  ctx.fillRect(obsticle2.x, obsticle2.y, obsticle2.w, obsticle2.h);
  ctx.fillStyle = '#158466';
  ctx.fillRect(obsticle3.x, obsticle3.y, obsticle3.w, obsticle3.h);
  ctx.fillStyle = '#158466';
  ctx.fillRect(obsticle4.x, obsticle4.y, obsticle4.w, obsticle4.h);
  //hide1, and so on...
  ctx.fillStyle = '#688e45';
  ctx.fillRect(hide1.x, hide1.y, hide1.w, hide1.h);
  ctx.fillStyle = '#688e45';
  ctx.fillRect(hide2.x, hide2.y, hide2.w, hide2.h);
  //worm1, and so on...
    //wormhole 1, and 3 for player1
  ctx.fillStyle = '#2a6099';
  ctx.fillRect(worm1p1.x, worm1p1.y, worm1p1.w, worm1p1.h);
  ctx.fillStyle = '#2a6099';
  ctx.fillRect(worm2p1.x, worm2p1.y, worm2p1.w, worm2p1.h);
    //wormhole3, and 4 for player2
  ctx.fillStyle = '#c85845';
  ctx.fillRect(worm3p2.x, worm3p2.y, worm3p2.w, worm3p2.h);
  ctx.fillStyle = '#c85845';
  ctx.fillRect(worm4p2.x, worm4p2.y, worm4p2.w, worm4p2.h);
  

  











  //border
  ctx.fillStyle = 'black';
  ctx.fillRect(border1.x, border1.y, border1.w, border1.h);
  ctx.fillStyle = 'black';
  ctx.fillRect(border2.x, border2.y, border2.w, border2.h);
  ctx.fillStyle = 'black';
  ctx.fillRect(border3.x, border3.y, border3.w, border3.h);
  ctx.fillStyle = 'black';
  ctx.fillRect(border4.x, border4.y, border4.w, border4.h);




  

};

setInterval(()=>{
  draw();
},1000/60);