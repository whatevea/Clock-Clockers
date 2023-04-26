import data from "./data.js";
export default class TypeWrite {
constructor(scene,text,x,y,time){
this.scene=scene;
this.text=text;
this.time=time;
this.length=text.length;
this.x=x,
this.y=y
}
makeText(){
    this.textObj=this.scene.add.text(this.x,this.y," ",data.textStyles.casual2)
return this.textObj;
}


showText(){
    let i=0;
    this.event=this.scene.time.addEvent({
        delay:this.time,
        repeat:this.length-1,
        callback:()=>{
            this.textObj.text+=this.text[i];
            i++;
            if(i===this.length-1){
                this.scene.gameOver=false;
            }

        }
    })

}
destroy(t){
this.scene.time.addEvent({
    delay:t*1000,
    callback:()=>{
        this.textObj.destroy()
    }
})
}




}