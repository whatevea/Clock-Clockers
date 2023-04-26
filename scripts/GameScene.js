import data from "./data.js";
import { Button, Toast } from "./ui.js";
export default class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: "GameScene" })
    }

    create() {
        // this.scene.start("PlayScene")
        const {width,height}=this.scale;
        this.bgTile = this.add.tileSprite(0, 0, width, height, "bgTile").setOrigin(0,0);
        const box= new Toast(this,400,400)
        const playBtn=new Button(this,200,220,data.buttons.play);
        const settingBtn = new Button(this, 57,337, data.buttons.settings);
        const aboutBtn = new Button(this, 347, 336, data.buttons.icon);
        const titleText=this.add.text(17,19,"Color Clockers ..",data.textStyles.heading)
        box.add([playBtn,settingBtn,aboutBtn,titleText])
        box.show()
//box2
        const box2 = new Toast(this, 400, 500);
        let text1 = this.add.text(53, 234, "Music",data.textStyles.subheading)
        let text2 = this.add.text(57, 68, "Sound",data.textStyles.subheading)
        let text3 = this.add.text(49, 408, "GoBack", data.textStyles.subheading)
        this.musicBtn = new Button(this, 295, 257, data.buttons.tick)
        this.soundBtn = new Button(this, 295, 95, data.buttons.tick)
        let homeBtn = new Button(this,299, 431, data.buttons.home).on("pointerup", () => {
            box2.hide();
            box.show();
        })
        box2.add([text1, text2, this.musicBtn, this.soundBtn, homeBtn,text3])


//box2

        
        
    playBtn.on("pointerup",()=>{
this.scene.start("LevelLoader",  { level: localStorage.lastLevel || "level1"   })
 
// this.scene.start("PlayScene")
        })
    //settings btn:
    settingBtn.on("pointerup",()=>{

box.hide()
box2.show()
    })
    
    //initalize sounds and music
    if(localStorage.musicState ===undefined && localStorage.soundState === undefined){
        localStorage.musicState=false;
        localStorage.soundState=true;
    }


//hooks for btn
this.musicBtn.on("pointerup",()=>
{
//set Inverse 
localStorage.musicState=!JSON.parse(localStorage.musicState)
if(localStorage.musicState==="true"){
    //play music
}
else{

    //stop music
}
    this.setFrameBtn()


    try {
        this.sound.stopAll()
    }
    catch {

    }
//stop music here

})
        this.soundBtn.on("pointerup", () => {
            localStorage.soundState = !JSON.parse(localStorage.soundState)

            this.setFrameBtn()
        })



}

update(){

    this.bgTile.tilePositionX--;
this.bgTile.tilePositionY--;
}

    setFrameBtn() {
        let state1 = JSON.parse(localStorage.musicState) ? data.buttons.tick : data.buttons.cross
        this.musicBtn.setFrame(state1);
        let state2 = JSON.parse(localStorage.soundState) ? data.buttons.tick : data.buttons.cross
        this.soundBtn.setFrame(state2);
    }

}
