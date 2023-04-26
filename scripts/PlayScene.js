import renderHud from "./hud.js";
import data from "./data.js";
import processLayer from "./layerProcess.js";
import Player from "./player.js";
import { Button, Toast } from "./ui.js";
import { GameOverHandler,enableDrag,PauseHandler } from "./extras.js";
import handleControls from "./controlHandler.js";
import TypeWrite from "./TypeWriter.js";
export default class PlayScene extends Phaser.Scene {
    constructor() {
        super({ key: "PlayScene" })
    }
create(){
if(localStorage.musicState==="true"){
    console.log("music bajapp")
    this.music = this.sound.add('music');
    this.music.play()
}

    const level=this.scene.settings.data.level;
    this.levelData=data.levelsdata[level]
    this.updownplatforms=[];
    this.leftrightplatforms=[];
    this.gameOver=true;
    this.input.addPointer(1);
    this.emitter = new Phaser.Events.EventEmitter();
    this.setEmitter();
this.map=this.make.tilemap({key:level,tileWidth:32,tileHeight:32});
this.tileset=this.map.addTilesetImage("gridtiles","tiles");
this.layer=this.map.createLayer("Tile Layer 1",this.tileset,150);
this.map.setCollision([6,19,33,47])

//level render starts here 
//render text
if(this.levelData.scrollingText){
    let text = new TypeWrite(this, this.levelData.scrollingText,250,300,50)
    text.makeText();
    text.showText()
}
else{
    this.gameOver=false;
}
this.player=new Player(this,this.levelData.player.x,this.levelData.player.y);
this.physics.add.collider(this.player, this.layer);
processLayer(this,this.layer);
this.left=false;
this.right=false;
this.pausebtn=this.add.image(67,247,"pausebtn").setScale(0.3);
this.pausebtn.setInteractive();
enableDrag(this.pausebtn)
this.pausebtn.on("pointerdown",()=>{
    if(!this.gameOver){
PauseHandler(this)
    }
})
renderHud(this);
handleControls(this);
}
update()
{
    // console.log(this.player.direction)
    if (this.player.direction === "right" && this.player.body.blocked.right &&this.player.isMoving){
    this.player.setFlipX(true);
    this.player.direction="left";
        this.player.body.setVelocityX(-200)
    }

   else  if(this.player.direction === "left"  && this.player.body.blocked.left && this.player.isMoving){
        console.log("leftblocked")

    this.player.setFlipX(false);
        this.player.direction = "right";
        this.player.body.setVelocityX(200)

    }

    if(this.updownplatforms){
        this.updownplatforms.forEach((item)=>{
            if (item.direction === "up" && item.body.blocked.up) {
                item.direction = "down";
                item.body.setVelocityY(100)

            }
            else if (item.direction === "down" && item.body.blocked.down) {
                item.direction = "up";
                item.body.setVelocityY(-100)

            }
        })
    }
    if (this.leftrightplatforms){
    this.leftrightplatforms.forEach((item) => {
        if (item.direction === "left" && item.body.blocked.left) {
            item.direction = "right";
            item.body.setVelocityX(100)

        }
        else if (item.direction === "right" && item.body.blocked.right) {
            item.direction = "left";
            item.body.setVelocityX(-100)

        }
    })

}
if(!this.gameOver && this.player.body.velocity.x!==0 && this.player.body.velocity.y===0){
this.player.play("run",true);

}

}

setEmitter(){
    console.log("calling Game over")
    this.emitter.on("GameOver", (message) => {

        if(!this.gameOver){
            this.gameOver=true;
            try{
                this.music.stop()
            }
            catch{

            }
        const emitter = this.add.particles(this.player.x,this.player.y, "ppink", {
            emitting: false,
            lifespan: 1000,
            speed: { min: 100, max: 400 },
            scale: { start: 0.4, end: 0 },
            blendMode: "ADD",
            gravityY: 150,
        })
        emitter.explode(74);
            if (localStorage.soundState === "true") { this.sound.play("explode") }

        this.player.setVisible(false);
        this.player.setActive(false);
            GameOverHandler(this,message);

    }

}
    
    )
this.emitter.on("LevelCompleted",()=>{
    if(!this.gameOver){
    
if(localStorage.soundState==="true"){
    this.sound.play("win")

}

        try {
            this.music.stop()
          
        }
        catch {

        }
    this.scene.start("LevelWinScene", { level: this.scene.settings.data.level})}
})


}
}
