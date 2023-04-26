const data={
levelsdata:{
level1:{
levelname:"Tutorial #1 ",
player:{
        x:330,
        y: 442
},
scrollingText: " Welcome ! Move the player by pressing LEFT Cursor Button or touching left side of screen. \n Find your way to the door. Notice in the middle of two clocks you have time which \n gets consumed as you move. Get to the door",
manaRate:60,
homeOpen:true

},
level2:{
    levelname: "Tutorial #2 ",
    player: {
        x: 400,
        y: 442
    },
    scrollingText: "Life is a lot like a game - sometimes we have to change direction to keep moving forward .\n    Nevertheless try to keep on moving.....",
    manaRate: 100,
    homeOpen: true

//

},
        level3: {
            levelname: "Tutorial #3 ",
            player: {
                x: 330,
                y: 442
            },
            scrollingText: "The moving platforms in our lives can be unpredictable,\n but by letting go and waiting for the right moment,\n we can find our footing and move forward with purpose..\n Hold RIGHT cursor key or touch right side of screen(mobile) to move platforms..",
            manaRate: 100,
            homeOpen: true

            //

        },
        level4: {
            levelname: "Level #1",
            player: {
                x: 330,
                y: 442
            },
            scrollingText: "Time is a key that can open doors to the treasures of life.\n Use it wisely and doors will never be closed to you.    --CHATGPT. \n    Holding Right key or pressing right side (mobile) will activate time in every blue looking thing."  ,
            manaRate: 320,
            homeOpen: false

            //

        },
        level5: {
            levelname: "Level #2 ",
            player: {
                x: 370,
                y: 442
            },
            scrollingText: "Level Hint : Time is everything.",
            manaRate: 80,
            homeOpen: false

            //

        },

        level6: {
            levelname: "Level #3 ",
            player: {
                x: 370,
                y: 442
            },
            scrollingText: "Level Hint : Dont Resist, Flow with Time.",
            manaRate: 38,
            homeOpen: false

            //

        },
        level7: {
            levelname: "Level #4 ",
            player: {
                x: 370,
                y: 442
            },
            manaRate: 250,
            homeOpen: false

            //

        },
        level8: {
            levelname: "Level #5 ",
            player: {
                x: 370,
                y: 12
            },
            manaRate: 300,
            homeOpen: false

            //

        },
        level9: {
            levelname: "Level #6 ",
            player: {
                x: 370,
                y: 120
            },
            manaRate: 350,
            homeOpen: false

            //

        }




},




buttons:{
    home:1,
    cross:5,
    play:0,
    tick:3,
    settings:2,
    icon:6
},



textStyles:{
heading:{
    fontFamily:"Bangers",
    fontSize:"52px",
    color:"#000000"
    }, heading2: {
        fontFamily: "Bangers",
        fontSize: "52px",
        color: "#ffffff"
    },
    casual: {
        fontFamily: "Bangers",
        fontSize: "24px",
        color: "#000000"
    }, casual2: {
        fontFamily: "Bangers",
        fontSize: "24px",
        color: "#ffffff"
    },
subheading:{
    fontFamily:"Bangers",
    fontSize:"32px",
    color:"#ff0000"
}





},



buildingsData:{
    building1:{
        scale:0.5,  //if you set this to 1 the size of the building will match with size of its image file
        y:800,      // the  y axis of builiding placement , 0 will put the building to top of screen (unreachable)
    },
    building2:{
        scale:0.5,
        y:768
    },
    building3:{
      y:800,
        scale:0.6
    },
},
//customisable data
gravity:600,
initialScore:0,
playerJumpVelocity:300,
distanceBetweenBuildings: { min: 170, max: 240 } ,   //changing this can make game very difficult and even non playable
baseSpeed:2, // this will increase speed of , the background ,lamposts ,brickstiles etc. increasing this value can be harmful to eyes and make you dizzy , set it between  1 and 2 
buildingsVelocity: -200, //this is the speed in which buildings come from right to left . 
maxJumpTime:20, //defines how long to jump button before player falls back. Increasing this can result in fly effect
billboardApperanceFrequency:5000, //reduce this to  make it appear very often  use range (1500-5000)
}
export default data;
