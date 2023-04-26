let home;

export default function processLayer(scene,layer){

layer.forEachTile((tile) => {

    if (tile.properties.type === "spike") {
        const spike = scene.physics.add.sprite(tile.getCenterX(), tile.getCenterY(), "spikes").setScale(0.8,0.48);
        spike.body.setAllowGravity(false);
        scene.physics.add.overlap(scene.player,spike,()=>{
            if(spike.frame.name === 1){
                
                scene.emitter.emit("GameOver","Ouch !!!")



            } 
        })
        scene.emitter.on("rightdown",()=>{
            spike.play("updown")
        })
        scene.emitter.on("rightup", () => {
            spike.stop()
        })
    }


   else  if (tile.properties.type == "home") {

        home=scene.physics.add.sprite(tile.getCenterX(),tile.getCenterY(),"door").setScale(2.5).setOrigin(0,0);
        if(scene.levelData.homeOpen){
            home.setFrame(4);
        }
        home.body.setAllowGravity(false);
        scene.physics.add.overlap(scene.player,home,()=>{
if(home.frame.name===4){
scene.emitter.emit("LevelCompleted")
    
}

        })
        
        
        layer.removeTileAt(tile.x,tile.y)

    }


  else  if(tile.properties.type==="key"){
        let x = tile.getCenterX();
        let y = tile.getCenterY() - 20;
let key=scene.physics.add.sprite(x,y,"key").setScale(2)
key.play("spin");
layer.removeTileAt(tile.x,tile.y);
        key.body.setAllowGravity(false);
scene.physics.add.overlap(scene.player,key,()=>{

    if(localStorage.soundState==="true"){
        scene.sound.play("dooropen")
    }
    home.play("dooropen")
    const emitter = scene.add.particles(x, y, "pblue", {
        emitting: false,
        lifespan: 1000,
        speed: { min: 100, max: 400 },
        scale: { start: 0.4, end: 0 },
        blendMode: "ADD",
        gravityY: 150,
    })
    emitter.explode(14);
    key.destroy();

})

    }


else if(tile.properties.type==="updownblock"){
    const x=tile.getCenterX()
const y=tile.getCenterY();
layer.removeTileAt(tile.x,tile.y);
let obj=scene.physics.add.image(x,y,"updownblock")
obj.direction = "up";
obj.body.setAllowGravity(false);
 obj.body.setImmovable(true);
scene.physics.add.collider(obj,layer);
        scene.physics.add.collider(obj,scene.player);

scene.emitter.on("rightdown",()=>{

if(obj.direction==="down"){
    obj.setVelocityY(100);
}
else if( obj.direction==="up"){
    obj.setVelocityY(-100);

}

    
})
scene.emitter.on("rightup",()=>{
obj.setVelocity(0);

})



scene.updownplatforms.push(obj);

//finish
    }

    else if(tile.properties.type==="leftrightblock")
{
        const x = tile.getCenterX()
        const y = tile.getCenterY();
let obj=scene.physics.add.image(x,y,"sideblock");
scene.physics.add.collider(obj,scene.player);
        scene.physics.add.collider(obj, layer);
        obj.body.setAllowGravity(false);
        obj.body.setImmovable(true);
        obj.direction="left";
        scene.emitter.on("rightdown", () => {

            if (obj.direction === "right") {
                obj.setVelocityX(100);
            }
            else if (obj.direction === "left") {
                obj.setVelocityX(-100);

            }


        })
        scene.emitter.on("rightup", () => {
            obj.setVelocity(0);

        })
scene.leftrightplatforms.push(obj)


layer.removeTileAt(tile.x,tile.y)
//finsish
}
else if (tile.properties.type==="spring"){
        const x = tile.getCenterX()
        const y = tile.getCenterY();
        let obj=scene.physics.add.sprite(x,y,"spring").setScale(0.7);

        obj.body.setAllowGravity(false);
        scene.physics.add.overlap(scene.player,obj,()=>{

            if(obj.anims.isPlaying){
                if (localStorage.soundState === "true") { scene.sound.play("jump") }

                scene.player.body.setVelocityY(-409);
                console.log("jump here mf")
                scene.player.play("jump")

            }

        })
        scene.emitter.on("rightdown", () => {
            obj.play("boing");
        })
        scene.emitter.on("rightup", () => {
            obj.stop()
        })

}




}





)
}