import data from "./data.js";
export default class LevelWinScene extends Phaser.Scene {
    constructor() {
        super({ key: "LevelWinScene" })
    }

    create() {
        const level = this.scene.settings.data.level;

        const nextlevel = `level${+(level.split("level")[1]) + 1}`;

        console.log(nextlevel)
        this.text = this.add.text(this.cameras.main.width / 2, this.cameras.main.height / 2, "Level Completed.", data.textStyles.heading2).setOrigin(0.5)
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
                        if(localStorage.lastLevel!=="level9"){
                        localStorage.lastLevel=nextlevel;
                        // Transition to another scene
                        this.scene.start('LevelLoader', { level: nextlevel });}
                        else{
                            this.scene.start("GameComplete")
                        }
                    }
                });
            }
        });

    }

    update() {


    }

}
