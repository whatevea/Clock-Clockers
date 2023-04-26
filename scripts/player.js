export default class Player extends Phaser.GameObjects.Sprite
{
    constructor (scene,x,y){
super(scene,x,y,"player");
 this.direction = "right";

scene.physics.world.enable(this);
scene.add.existing(this);
this.setFrame(16).setScale(2.5).setOrigin(0,0).setDepth(1);
this.play("idle");
this.body.setSize(22,30);
this.setEmitters()

// this.body.allowGravity=false;    
}


setEmitters(){
    
this.scene.emitter.on("leftdown",()=>{
    this.isMoving=true;
    if(this.direction==="right"){
        console.log("right is my direction")
        this.body.setVelocityX(200);

    }
    else if(this.direction==="left"){
        console.log("left is my direction")

        this.body.setVelocityX(-200)
    }

})
this.scene.emitter.on("leftup",()=>{
    this.isMoving =false

    this.body.setVelocityX(0);
    this.play("idle")
})
}


}