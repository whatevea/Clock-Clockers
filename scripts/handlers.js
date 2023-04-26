export  function enableDrag(obj){
    let scene = obj.scene;
    obj.setInteractive();
    scene.input.setDraggable(obj);
    scene.input.on('drag', function (pointer, obj, dragX, dragY) { obj.x = dragX; obj.y = dragY; });
    scene.input.on('dragend', function (pointer, obj) { console.log(obj.x, obj.y) });
}