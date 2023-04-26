export default function  handleControls(scene){
    const leftKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
     const rightKey= scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

rightKey.on("down",()=>{
    if(!scene.gameOver){
        scene.emitter.emit("rightdown")
    }
})

    rightKey.on("up", () => {
        if (!scene.gameOver) {
            scene.emitter.emit("rightup")
        }
    })

    leftKey.on("down", () => {
        if (!scene.gameOver) {
            scene.emitter.emit("leftdown")
        }
    })

leftKey.on("up", () => {
        if (!scene.gameOver) {
            scene.emitter.emit("leftup")
        }
    })

    scene.input.on("pointerdown", pointer => {
        if (!scene.gameOver) {

            if (pointer.x < scene.scale.width / 2) {
                scene.emitter.emit("leftdown")
            }
            else {
                scene.emitter.emit("rightdown")

            }
        }
    }

    )
    scene.input.on("pointerup", (pointer) => {

        if (pointer.x < scene.scale.width / 2) {
            scene.emitter.emit("leftup")

        }
        else {
            scene.emitter.emit("rightup")

        }



    }

    )

}