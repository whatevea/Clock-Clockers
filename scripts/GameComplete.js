import data from "./data.js"
export default class GameComplete extends Phaser.Scene {
    constructor() {
        super({ key: "GameComplete" })
    }

    create() {

this.add.text(100,this.scale.height/2,"That was the final Level  .\n More levels will be made in after this Game JAM. ",data.textStyles.heading2).setOrigin(0,0)        


    }

    update() {


    }

}
