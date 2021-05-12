const { Server } = require("socket.io");
const io = new Server.attach(81);
const infector = require("./public/infector/js/game");


console.log(infector)
console.log(infector.Grid)





class GameServer{
    constructor(){
        this.tickSpeed = 300;
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