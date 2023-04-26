import { enableDrag } from "./extras.js"

export default function renderHud(scene){
const reduceDelay=scene.levelData.manaRate;
    const gap=360;
    var rotation1;
    var rotation2;
    var particle1;
    var particle2;
    var event1;
    var event2;
    const clock1=scene.add.image(76,77,"redclock")
    const spinner1 = scene.add.image(clock1.x+5,clock1.y,"spinner")
    const clock2 = scene.add.image(1195,77, "blueclock")

    const spinner2 = scene.add.image(clock2.x+5,clock2.y, "spinner")
    const timeholder= scene.add.image(scene.scale.width/2,100,"timeholder").setScale(0.3)
    const time=scene.add.image(timeholder.x,timeholder.y-3,"time").setScale(0.3);
scene.emitter.on("leftdown",()=>{
    event1=scene.time.addEvent({

        loop:true,
        callback:()=>{
            time.displayHeight--;
            if(time.displayHeight<1 ){
                scene.emitter.emit("GameOver", "Time is limited!.")

            }
        },
        delay:reduceDelay,

    })

        rotation1=scene.tweens.add({
            targets: spinner1,
            angle: spinner1.angle + 360,
            duration: 1000,
            repeat: -1 // repeat indefinitely
        })
        if(time.displayHeight>1){
particle1 = scene.add.particles(time.x,time.y, 'ppink', {
        scale:{start:0.3 ,end:0.1},
        lifespan:1200,
        blendMode:"ADD",
        angle: { min: 180, max:-300  },
        speed: 250,
    frequency:100,
    moveToY:-10,
    moveToX:-544,

    });
        }


    })

    scene.emitter.on("rightdown", () => {
       //reduce length
        event2 = scene.time.addEvent({

            loop: true,
            callback: () => {
                time.displayHeight--;
                if (time.displayHeight < 1 ) {
                    scene.emitter.emit("GameOver", "Time is Finished.")
                }
            },
            delay: reduceDelay,

        })
        //show rotation
        rotation2 = scene.tweens.add({

            targets: spinner2,
            angle: spinner2.angle + 360,
            duration: 1000,
            repeat: -1 // repeat indefinitely
        })
        //showParticle
        if (time.displayHeight > 1) {

        particle2 = scene.add.particles(time.x, time.y, 'pblue', {
            scale: { start: 0.3, end: 0.1 },
            lifespan: 1200,
            blendMode: "ADD",
            angle: { min: 0, max: 360 },
            speed: { min: 180, max: 300 },
            moveToX: 10,
            frequency: 100,
            moveToY: -10,
            moveToX: 540,
        });
    }
    })

    scene.emitter.on("leftup", () => {
        rotation1.stop()
        particle1.stop()
        event1.destroy()


    })
    scene.emitter.on("rightup", () => {
        rotation2.stop()
        particle2.stop()
        event2.destroy()
    })



}