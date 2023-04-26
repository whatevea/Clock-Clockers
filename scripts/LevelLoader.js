import data from "./data.js";
export default class LevelLoader extends Phaser.Scene {
    constructor() {
        super({ key: "LevelLoader" })
    }

    create() {
const level= this.scene.settings.data.level;
console.log(level)
const levelname=data.levelsdata[level].levelname;
        console.log(levelname)
this.text= this.add.text(this.cameras.main.width/2,this.cameras.main.height/2,levelname,data.textStyles.heading2).setOrigin(0.5)


        this.tweens.add({
            targets: this.text,
            alpha: { from: 0, to: 1 },
            duration: 2000,
            ease: 'Linear',
            onComplete: () => {
                // Set up fade out tween
                this.tweens.add({
                    targets: this.text,
                    alpha: { from: 1, to: 0 },
                    duration: 1000,
                    ease: 'Linear',
                    onComplete: () => {
                        // Transition to another scene
                        this.scene.start('PlayScene',{level:level});
                    }
                });
            }
        });

    }

    update(){


    }

}
