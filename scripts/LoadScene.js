export default class LoadScene extends Phaser.Scene{
constructor(){
    super(sceneConfig);
}
preload(){
    this.load.image("timeholder","/Clock-Clockers/assets/timeholder.png")
    this.load.image("time", "/Clock-Clockers/assets/time.png")
    this.load.image("pblue", "/Clock-Clockers/assets/blueparticle.png")
    this.load.image("ppink", "/Clock-Clockers/assets/pinkparticle.png")
this.load.image("sideblock","/Clock-Clockers/assets/sideblock.png")
this.load.audio("click","/Clock-Clockers/assets/sounds/click.wav")
    this.load.audio("explode", "/Clock-Clockers/assets/sounds/explosion.wav")
    this.load.audio("hurt", "/Clock-Clockers/assets/sounds/click.wav")
    this.load.audio("jump", "/Clock-Clockers/assets/sounds/jump.wav")
    this.load.audio("music", "/Clock-Clockers/assets/sounds/music.mp3")
    this.load.audio("win", "/Clock-Clockers/assets/sounds/win.wav")
    this.load.audio("dooropen", "/Clock-Clockers/assets/sounds/dooropen.wav")

    this.load.image("updownblock", "/Clock-Clockers/assets/downblock.png")
    this.load.spritesheet("spring","/Clock-Clockers/assets/spring.png",
    {frameWidth:117,
    frameHeight:51})
this.load.spritesheet("key","/Clock-Clockers/assets/key-white.png",{
    frameWidth:32,
    frameHeight:32
})
    this.load.image("pausebtn", "/Clock-Clockers/assets/pausebtn.png")
    this.load.spritesheet("uis","/Clock-Clockers/assets/56x59gui.png",
    {frameWidth:56,
    frameHeight:59})
    this.load.image("redclock","/Clock-Clockers/assets/redclock.png")
    this.load.image("blueclock", "/Clock-Clockers/assets/blueclock.png")
    this.load.image("spinner","/Clock-Clockers/assets/spinner.png")
    this.add.text(322,213," Loading..................");
    this.plugins.get('rexwebfontloaderplugin').addToScene(this);
this.load.spritesheet("spikes","/Clock-Clockers/assets/spikes.png",{
    frameWidth:114,
    frameHeight:87
})
    var config = {
        google: {
            families: ['Bangers']
        }
    };
    this.load.rexWebFont(config);
    this.load.image("billboard","/Clock-Clockers/assets/billboard.png");
    this.load.image("bgTile","/Clock-Clockers/assets/bgTile.png")
    this.load.spritesheet("ui","/Clock-Clockers/assets/ui.png",
    {
        frameWidth:36,
        frameHeight:37.5
    })
    this.load.spritesheet("player","/Clock-Clockers/assets/character/dj idle run.png",
    {
        frameWidth:32,
        frameHeight:32
    })
this.load.image('tiles',"/Clock-Clockers/assets/gridtiles.png");
this.load.tilemapTiledJSON("level1","/Clock-Clockers/assets/level1.json")
    this.load.tilemapTiledJSON("level2", "/Clock-Clockers/assets/level2.json")
    this.load.tilemapTiledJSON("level3", "/Clock-Clockers/assets/level3.json")
    this.load.tilemapTiledJSON("level4", "/Clock-Clockers/assets/level4.json")
    this.load.tilemapTiledJSON("level5", "/Clock-Clockers/assets/level5.json")
    this.load.tilemapTiledJSON("level6", "/Clock-Clockers/assets/level6.json")
    this.load.tilemapTiledJSON("level7", "/Clock-Clockers/assets/level7.json")
    this.load.tilemapTiledJSON("level8", "/Clock-Clockers/assets/level8.json")
    this.load.tilemapTiledJSON("level9", "/Clock-Clockers/assets/level9.json")
    this.load.tilemapTiledJSON("level10", "/Clock-Clockers/assets/level10.json")
    this.load.tilemapTiledJSON("level11", "/Clock-Clockers/assets/level11.json")
    this.load.tilemapTiledJSON("level12", "/Clock-Clockers/assets/level12.json")
    this.load.tilemapTiledJSON("level13", "/Clock-Clockers/assets/level13.json")
    this.load.tilemapTiledJSON("level14", "/Clock-Clockers/assets/level14.json")
    this.load.tilemapTiledJSON("level15", "/Clock-Clockers/assets/level15.json")
this.load.spritesheet("door","/Clock-Clockers/assets/door.png",{
    frameWidth:16,
    frameHeight:32
})
}

create(){
    this.anims.create({
        key: "boing",
        frames: this.anims.generateFrameNumbers("spring", { frames: [0, 1, 2, 3] }),
        frameRate: 5,
        repeat: -1
    })

    //phaser animation simple code
this.anims.create({
    key:"dooropen",
    frames:this.anims.generateFrameNumbers("door",{frames:[0,1,2,3,4]}),
    frameRate:5,
    repeat:0
})
    this.anims.create({
        key: "spin",
        frames: this.anims.generateFrameNumbers("key", { frames: [0, 1, 2, 3, 4,5,6,7,8,9,10,11] }),
        frameRate: 5,
        repeat: -1
    })



this.anims.create({

key:"updown",
frames:this.anims.generateFrameNumbers("spikes",{frames:[0,1]}),
frameRate:5,
repeat:-1

})
this.anims.create({

    key:"jump",
    frames:this.anims.generateFrameNumbers("player",{frames:[0,1,2,3,4,5,6]}),
    frameRate:11,
    repeat:0

})
this.anims.create({

    key:"idle",
    frames: this.anims.generateFrameNumbers("player",{
        frames:[6,7,8,9,10,11,12,13,14,15,16]
    }),
    repeat:-1
})
    this.anims.create({

        key: "run",
        frames: this.anims.generateFrameNumbers("player", {
            frames: [17,18,19,20,21,22,23,24,25,26,27,28]
        }),
        repeat: -1
    })

 //code here
this.scene.start("GameScene");


}


}
var sceneConfig = {
    key: 'LoadScene',
    pack: {
        files: [{
            type: 'plugin',
            key: 'rexwebfontloaderplugin',
            url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexwebfontloaderplugin.min.js',
            start: true
        }]
    }
};
