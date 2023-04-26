import { Toast } from "./ui.js";
import data from "./data.js";

export const a="sdf";
export function enableDrag(obj) {
    let scene = obj.scene;
    obj.setInteractive();
    scene.input.setDraggable(obj);
    scene.input.on('drag', function (pointer, obj, dragX, dragY) { obj.x = dragX; obj.y = dragY; });
    scene.input.on('dragend', function (pointer, obj) { console.log(obj.x, obj.y) });
}

export function PauseHandler(scene){
scene.gameOver=true
    let bg= new Toast(scene,200,200)
    let text1= scene.add.text(25,12,"Game Paused !!",data.textStyles.subheading)
    let text2= scene.add.text(50,140,"Continue",data.textStyles.casual)
    let text3 = scene.add.text(39, 78, "Go Home", data.textStyles.casual)
    let continueBtn= scene.add.sprite(159,160,"uis").setFrame(5).setInteractive()
    let homeBtn = scene.add.sprite(160,91, "uis").setFrame(37).setInteractive()

    continueBtn.on("pointerdown",()=>{
        if (localStorage.soundState === "true") { scene.sound.play("click") }

        bg.hide();
        scene.gameOver=false;
    })
    homeBtn.on("pointerdown",()=>{
        if (localStorage.soundState === "true") { scene.sound.play("click") }

        scene.scene.start("GameScene")
    })

    bg.add([text1,continueBtn,homeBtn,text2,text3])
bg.show()

}
export function GameOverHandler(scene,text) {

    let bg = new Toast(scene, 250, 260)
    let text1 = scene.add.text(25, 12, text, data.textStyles.subheading)
    let text2 = scene.add.text(50, 140, "Restart", data.textStyles.casual)
    let text3 = scene.add.text(39, 78, "Go Home", data.textStyles.casual)

    let restartBtn = scene.add.sprite(159, 160, "uis").setFrame(5).setInteractive()
    let homeBtn = scene.add.sprite(160, 91, "uis").setFrame(37).setInteractive()

    restartBtn.on("pointerdown", () => {
        if (localStorage.soundState === "true") { scene.sound.play("click") }

        scene.scene.restart()
    })
    homeBtn.on("pointerdown", () => {
        if (localStorage.soundState === "true") { scene.sound.play("click") }

        scene.scene.start("GameScene")
    })

    bg.add([text1, restartBtn, homeBtn, text2, text3])
    bg.show()

}


