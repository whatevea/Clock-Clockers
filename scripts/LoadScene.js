export default class LoadScene extends Phaser.Scene{
constructor(){
    super(sceneConfig);
}
preload(){
    this.load.image("timeholder","/Color-Clockers/timeholder.png")
    this.load.image("time", "/Color-Clockers/time.png")
    this.load.image("pblue", "/Color-Clockers/blueparticle.png")
    this.load.image("ppink", "/Color-Clockers/pinkparticle.png")
this.load.image("sideblock","/Color-Clockers/sideblock.png")
this.load.audio("click","/Color-Clockers/sounds/click.wav")
    this.load.audio("explode", "/Color-Clockers/sounds/explosion.wav")
    this.load.audio("hurt", "/Color-Clockers/sounds/click.wav")
    this.load.audio("jump", "/Color-Clockers/sounds/jump.wav")
    this.load.audio("music", "/Color-Clockers/sounds/music.mp3")
    this.load.audio("win", "/Color-Clockers/sounds/win.wav")
    this.load.audio("dooropen", "/Color-Clockers/sounds/dooropen.wav")

    this.load.image("updownblock", "/Color-Clockers/downblock.png")
    this.load.spritesheet("spring","/Color-Clockers/spring.png",
    {frameWidth:117,
    frameHeight:51})
this.load.spritesheet("key","/Color-Clockers/key-white.png",{
    frameWidth:32,
    frameHeight:32
})
    this.load.image("pausebtn", "/Color-Clockers/pausebtn.png")
    this.load.spritesheet("uis","/Color-Clockers/56x59gui.png",
    {frameWidth:56,
    frameHeight:59})
    this.load.image("redclock","/Color-Clockers/redclock.png")
    this.load.image("blueclock", "/Color-Clockers/blueclock.png")
    this.load.image("spinner","/Color-Clockers/spinner.png")
    this.add.text(322,213," Loading..................");
    this.plugins.get('rexwebfontloaderplugin').addToScene(this);
this.load.spritesheet("spikes","/Color-Clockers/spikes.png",{
    frameWidth:114,
    frameHeight:87
})
    var config = {
        google: {
            families: ['Bangers']
        }
    };
    this.load.rexWebFont(config);
    this.load.image("billboard","/Color-Clockers/billboard.png");
    this.load.image("bgTile","/Color-Clockers/bgTile.png")
    this.load.spritesheet("ui","/Color-Clockers/ui.png",
    {
        frameWidth:36,
        frameHeight:37.5
    })
    this.load.spritesheet("player","/Color-Clockers/character/dj idle run.png",
    {
        frameWidth:32,
        frameHeight:32
    })
this.load.image('tiles',"/Color-Clockers/gridtiles.png");
this.load.tilemapTiledJSON("level1","/Color-Clockers/level1.json")
    this.load.tilemapTiledJSON("level2", "/Color-Clockers/level2.json")
    this.load.tilemapTiledJSON("level3", "/Color-Clockers/level3.json")
    this.load.tilemapTiledJSON("level4", "/Color-Clockers/level4.json")
    this.load.tilemapTiledJSON("level5", "/Color-Clockers/level5.json")
    this.load.tilemapTiledJSON("level6", "/Color-Clockers/level6.json")
    this.load.tilemapTiledJSON("level7", "/Color-Clockers/level7.json")
    this.load.tilemapTiledJSON("level8", "/Color-Clockers/level8.json")
    this.load.tilemapTiledJSON("level9", "/Color-Clockers/level9.json")
    this.load.tilemapTiledJSON("level10", "/Color-Clockers/level10.json")
    this.load.tilemapTiledJSON("level11", "/Color-Clockers/level11.json")
    this.load.tilemapTiledJSON("level12", "/Color-Clockers/level12.json")
    this.load.tilemapTiledJSON("level13", "/Color-Clockers/level13.json")
    this.load.tilemapTiledJSON("level14", "/Color-Clockers/level14.json")
    this.load.tilemapTiledJSON("level15", "/Color-Clockers/level15.json")
this.load.spritesheet("door","/Color-Clockers/door.png",{
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
