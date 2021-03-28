

class Dungeon{
    constructor(x, y){
        this.grid = new Grid(x, y);
        this.tiles = ['█', ' ']
        this.init();
        this.CellularAutomata(4)
        return this.grid
    }

    init(){
        var width = this.grid[0].length
        var height = this.grid.length

        for(var i = 0; i < height; i++) {
            var line = this.grid[i];
            for(var j = 0; j < width; j++) {
                var randomNumber = Math.floor(Math.random()*this.tiles.length);
                this.grid[j][i] = this.tiles[randomNumber]
            }
        }
        
    }


    room(x, y){

    }


    CellularAutomata(x){
        var width = this.grid[0].length
        var height = this.grid.length
        var newGrid = this.grid;
        var overPop = 4;


        for(var iteration = 0; iteration < x; iteration++){
            for(var i = 0; i < height; i++) {
                var line = this.grid[i];
                for(var j = 0; j < width; j++) {
                    var neighbors = getOccurrence(this.findingNeighbors(i, j), '█');
                    var alive = '█'

                    if(this.grid[j][i] == alive && neighbors < 2){
                        newGrid[j][i] = ' '
                    }
                    if(this.grid[j][i] == alive && (neighbors == 2 || neighbors == 3)){
                        newGrid[j][i] = '█'
                    }
                    if(this.grid[j][i] == alive && neighbors >= overPop){
                        newGrid[j][i] = ' '
                    }
                    if(this.grid[j][i] != alive && neighbors == overPop-1){
                        newGrid[j][i] = '█';
                    }

                }

                
            }
        }

            this.grid = newGrid

            
        
    }

    BinarySpacePartition(iteration){
        var partitions = [];
        for(var iteration = 0; iteration < x; iteration++){
            for(var i = 0; i < height; i++) {
                var line = this.grid[i];
                for(var j = 0; j < width; j++) {
                    var randomNumber = Math.floor(Math.random()*this.grid[i].length);
                    
                }
            }
        }
    }

    findingNeighbors(i, j) {
        var rowLimit = this.grid.length-1;
        var columnLimit = this.grid[0].length-1;

        var neighbors = []
      
        for(var x = Math.max(0, i-1); x <= Math.min(i+1, rowLimit); x++) {
          for(var y = Math.max(0, j-1); y <= Math.min(j+1, columnLimit); y++) {
            if(x !== i || y !== j) {
              neighbors.push(this.grid[x][y])
            }
          }
        }
        return neighbors
    }

    partition(x, y, w, h){
        return new Grid(w, h);
    }


}


class partition{
    constructor(x, y, w, h){
        this.position = [x, y]
        this.demensions = [w, h]
    }
}


class Generator{
    constructor(){

    }

    makeBorder(arr){
        for(var i = 0; i < arr.length; i++) {
            var screenLine = arr[i];
            for(var j = 0; j < screenLine.length; j++) {
                 if(i == 0 && j == 0){
                    arr[i][j] = '╔'
                }
                else if(i == 0 && j == screenLine.length - 1){
                    arr[i][j] = '╗'
                }
                else if(j == 0 && i == arr.length - 1){
                    arr[i][j] = '╚'
                }
                else if(j == screenLine.length -1 && i == arr.length -1){
                    arr[i][j] = '╝'
                }
                else if(i == 0){
                    arr[i][j] = '═'
                }
                else if(i == arr.length - 1){
                    arr[i][j] = '═'
                }
                else if(j == 0){
                    arr[i][j] = '║'
                }
                else if(j == screenLine.length - 1){
                    arr[i][j] = '║'
                }


            }
        }   

        return arr;
    } 

    fill(arr, char){
        var retarr = new Grid(arr[0].length, arr.length);
        for(var i = 0; i < arr.length; i ++){
            for(var j = 0; j < arr[0].length; j ++){
                retarr[i][j] = char;
            }
        }

        return retarr;
    }

    makeTitle(title, arr){
        var titlearr = title.split('');
        var startPos = Math.round((arr[0].length - titlearr.length) / 2);
        for(var i = 0; i < title.split('').length; i++){
            arr[0][startPos] = title.split('')[i]
            startPos++
        }
        return arr;
    }

    makeText(text, x, y, arr){

    }

    makeDungeon(x, y){
        return new Dungeon(x, y)
    }

    makeWindowContent(arr, content){
        var width = arr[0].length - 2;
        var height = arr.length - 2;
        var x_pos = 1
        var y_pos = 1

        for(var i = 1; i < height; i++) {
            y_pos++
            var line = this.grid[i];
            for(x_pos;x_pos < width; x_pos++) {
                x_pos ++
                
            }
        }

    }

    appendSprite(x,y, arr, sprite){
        var arrheight = arr[0].length
        var arrwidth = arr.length
        var spriteheight = sprite[0].length
        var spritewidth = sprite.length

        var startX = x;
        var startY = y;
        var endX = spritewidth + x;
        var endY = spriteheight + y;

        //console.log(`startX: ${startX} startY: ${startY} endX: ${endX} endY: ${endY}`)

        for(var i = startY; i < endY; i++){
            for(var j = startX; j < endX; j++){
                arr[j][i] = sprite[j - x][i - y]
            }
        }

        return arr;
    }

    bsp(arr, opts){
        var direction = (opts) ? opts.direction : 'x';
        var position = (opts) ? opts.position : [randRange(0, arr[0].length), randRange(0, arr.length)]

        //console.log(direction)
        //console.log(position)


    }
} 



class BSP{
    constructor(arr, opts){
        var gen = new Generator();
        this.direction = (opts) ? opts.direction : 'x';

        //here i could check to make sure values have a difference of minroomsize making sure i dont make tiny rooms with the randRange generator

        this.position = (opts) ? opts.position : [randRange(0, arr[0].length), randRange(0, arr.length)]
        this.splits = (opts) ? opts.splits : 5;
        //console.log(this.split(splits))
        this.split(arr).forEach(item => {
            //console.log(item)
            //console.log(gen.makeBorder(new Grid(item[2], item[3])))
            gen.appendSprite(item[0], item[1], arr, gen.makeBorder(new Grid(item[3], item[2])))
        })
    }

    split(arr){
        //return array containing the x, y, w, h of the split
        //var arrAxis = (this.direction = 'x') ? arr[]
        //return [ (this.direction = 'x') ? this.position[0] : 0, (this.direction = 'y') ? this.position[1] : 0 ]
        return [[0, 0, this.position[0], arr.length], [this.position[0], 0 , arr[0].length - this.position[0] - 1, arr.length]]
    }

    //--------IDEA--------//
    // i have position, for optimixzing the algorithm it might
    // be useful to use that location and make 4 splits on each negative and positive axis



}


class Layer{
    constructor(x, y){
        var gen = new Generator();
        this.position = [0, 0]
        this.grid = new Grid(x, y)
        this.entities = [];
    }

    add(entity){
        console.log(entity)
        this.entities.push(entity)
    }

    update(){
        for(var i = 0; i < this.entities.length; i ++){
            console.log(this.entities[i].grid)
            console.log(this.grid)
            this.grid = gen.appendSprite(this.entities[i].position[0], this.entities[i].position[1], this.grid, this.entities[i].grid)
        }
    }

    snapshot(x, y, w, h){
        return this.grid.slice(y, y + h).map(a => a.slice(x, x + w))
    }
}

class PlayerCamera{
    constructor(following, layers,  rendersizeX, rendersizeY){
        //this.applyCamera(following, layers, rendersizeX, rendersizeY)
        this.following = following;
        this.layers = layers;
        this.rendersizeX = rendersizeX;
        this.rendersizeY = rendersizeY;
    }

    update(){

        var following = this.following;
        var layers = this.layers;
        var rendersizeX = this.rendersizeX;
        var rendersizeY = this.rendersizeY

        var startX = (following.mapPosition[0] - rendersizeX / 2 > 0) ? following.mapPosition[0] - rendersizeX / 2: 0;
        var startY = (following.mapPosition[1] - rendersizeY / 2 > 0) ? following.mapPosition[1] - rendersizeY / 2: 0;
        following.cameraScrollY = true;
        following.cameraScrollX = true;

        
        for(var i = 0; i < layers.length; i ++){
            if(startX <= 0 || startX - rendersizeX >= layers[i].grid[0].length){
                following.cameraScrollX = false;
                following.position[0] = following.mapPosition[0]
            }else{

            }
            if(startY <= 0 || startY - rendersizeY >= layers[i].grid[0].length){
                following.cameraScrollY = false;
                following.position[1] = following.mapPosition[1]
            }else{

            }
        }


        // IF I CAN RASTER THE LAYERS TOGETHER I WILL HAVE A GUCCI GANG ASS SYSTEM AND IT SHOULD BE OPTIMIZED

        return this.layers[0].snapshot(startX, startY, rendersizeX, rendersizeY)   
    }
}


class Entity{
    constructor(px, py, fontX, fontY ,grid){
        this.mapPosition = [px, py]
        this.prevPosition = [px, py]
        this.position = [px, py]
        this.grid = grid;
        this.font = new Font('img/IBM8x16_NoPadding_extended.png', fontX, fontY)
        this.actions = []
    }

    setAction(x, y, action, game){
        game.actions.push([x + this.position[0], y + this.position[1], action])
        this.actions.push([x + this.position[0], y + this.position[1], action])
    }

    setPosition(x, y){
        this.position = [x, y];
    }

    destroy(game){
        var index = game.layerGroup.indexOf(this);
		if (index > -1) {
			game.layerGroup.splice(index, 1);
        }
        this.actions.forEach(action => {
            for( var i=game.actions.length - 1; i>=0; i--){
                for( var j=0; j<action.length; j++){
                    if(game.actions[i] && (game.actions[i].name === action[j].name)){
                       game.actions.splice(i, 1);
                   }
               }
           }
        })
    }

    snapshot(x, y, w, h){
        return this.grid.slice(y, y + h).map(a => a.slice(x, x + w))
    }

    applyCamera(following, rendersizeX, rendersizeY){

        
        var startX = (following.mapPosition[0] - rendersizeX / 2 > 0) ? following.mapPosition[0] - rendersizeX / 2: 0;
        var startY = (following.mapPosition[1] - rendersizeY / 2 > 0) ? following.mapPosition[1] - rendersizeY / 2: 0;

        //console.log(`startX ${startX} startY ${startY}`)

        following.prevPosition = following.mapPosition        
        following.cameraScrollY = true;
        following.cameraScrollX = true;
        if(startX <= 0 || startX - rendersizeX >= this.grid[0].length){
            following.cameraScrollX = false;
            following.position[0] = following.mapPosition[0]
        }else{
            
        }
        if(startY <= 0 || startY - rendersizeY >= this.grid[0].length){
            following.cameraScrollY = false;
            following.position[1] = following.mapPosition[1]
        }else{

        }
        return this.snapshot(startX, startY, rendersizeX, rendersizeY)   
    }

    show(){
        this.grid = this.prevGrid
    }

    hide(){
        this.prevGrid = this.grid
        this.grid = []
    }

}


class Grid{
    constructor(x, y){
        var arr = [];
        for (var i=0;i< y;i++){
          var data = [];
          for (var j=0;j< x;j++){
            data.push(" ");
          }
          arr.push(data);
        }
        return(arr)
    }


}


class Game{

    constructor(){
        this.canvas = document.getElementById("canvas")
        this.tempCanvas = document.getElementById("temp-canvas")
        this.ctx = this.setupCanvas(this.canvas);
        this.tempCtx = this.tempCanvas.getContext('2d');
        this.fontX = 16;
        this.fontY = 32;
        this.font = new Font('img/IBM8x16_NoPadding_extended.png', this.fontX, this.fontY)
        this.layerGroup = [];
        this.entities = [];
        this.actions = [];

    }

    setupCanvas(canvas) {
        // Get the device pixel ratio, falling back to 1.
        var dpr = window.devicePixelRatio || 1;
        // Get the size of the canvas in CSS pixels.
        var rect = canvas.getBoundingClientRect();
        // Give the canvas pixel dimensions of their CSS
        // size * the device pixel ratio.
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        var ctx = canvas.getContext('2d');
        // Scale all drawing operations by the dpr, so you
        // don't have to worry about the difference.
        ctx.scale(dpr, dpr);
        return ctx;
    }

    updateGroup(spriteGroup){
        for(var z = 0; z < spriteGroup.length; z++){
            var drawPosX = 0;
            var drawPosY = 0;
            for(var i = 0; i < spriteGroup[z].grid.length; i++) {
                var screenLine = spriteGroup[z].grid[i];
                for(var j = 0; j < screenLine.length; j++) {
                    drawPosX = j * this.fontX + (spriteGroup[z].position[0] * this.fontX);
                    drawPosY = i * this.fontY + (spriteGroup[z].position[1] * this.fontY);

                    //all groups will need to eventually be 2d with an extra deminsion in the root arrays so idont have to iterate over 2 2d arrays just one and get the last value... maybe
                    if(spriteGroup[z].grid[i][j][1]){
                        console.log('has color')
                    }
                    this.font.drawChar(spriteGroup[z].grid[i][j], drawPosX, drawPosY)
                    
                }
            }
        }
    }
}

function getOccurrence(array, value) {
    var count = 0;
    array.forEach((v) => (v === value && count++));
    return count;
}


function map1(){
    var map1_grid = new Grid(100, 100);
    var gen = new Generator();
    gen.appendSprite(0,0, map1_grid, gen.fill(map1_grid, '•'))
    gen.appendSprite(5, 5, map1_grid, gen.makeBorder(new Grid(10, 10)))
    gen.appendSprite(23,40, map1_grid, gen.makeBorder(new Grid(2, 2)))
    gen.appendSprite(20, 20, map1_grid, gen.makeBorder(new Grid(15, 10)))
    gen.appendSprite(20, 90, map1_grid, gen.makeBorder(new Grid(4, 4)))
    return map1_grid;
}


function randRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }