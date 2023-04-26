export class Button extends Phaser.GameObjects.Sprite {
    constructor(scene,x,y,type) {
        super(scene,x,y,"ui");
        this.setFrame(type);
        this.setScale(2)
        scene.add.existing(this);
        this.setInteractive();


        this.on('pointerdown',function(){
            if (localStorage.soundState==="true") { scene.sound.play("click") }

            this.setScale(1.8);
        });
    }

}
export class Toast extends Phaser.GameObjects.Container{
constructor(scene,height,width){
    //center location of the canvas
    super(scene, -1400, (scene.game.config.height / 2) - (height / 2));
    this.centerLocation = { x: (scene.game.config.width / 2) - (width / 2), y: (scene.game.config.height / 2) - (height / 2) }

    const box = scene.add.graphics();
    box.fillStyle(0xffffff, 1);
    //  32px radius on the corners
    box.fillRoundedRect(0,0, height,width, 32);
    box.lineStyle(2, 0x000000, 1);
    box.strokeRoundedRect(0, 0, height, width, 32);
    this.add(box)
    scene.add.existing(this);
}
show()
{
    this.slideAnim= this.scene.tweens.add({
targets:this,
x:this.centerLocation.x,
y:this.centerLocation.y,
duration:1000,
ease:"Power2",
repeat:0

    })
}

hide(){
this.hideAnim=this.scene.tweens.add({
    targets:this,
    x:this.x+1800,
    duration:100,
    ease:"Power2",
    repeat:0
})

}

}