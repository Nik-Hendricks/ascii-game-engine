const { Server } = require("socket.io");
const io = new Server(81);
const infector = require("./public/infector/js/game");


var test = new infector.Grid(10, 10)

console.log(test.Grid)





class GameServer{
    constructor(){
        this.tickSpeed = 50;
        this.init();
        
        //server tick
    }

    setupSocketEvents(){
        io.on('connection', (socket) =>  {
            console.log(socket);
        })
    }

    init(){
        setInterval(() => {
            this.update();
        }, this.tickSpeed);

        this.setupSocketEvents();

    }

    update(){
        console.log("update");
    }
}

new GameServer();