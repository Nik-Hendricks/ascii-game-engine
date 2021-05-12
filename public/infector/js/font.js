const charmap = [
    [' ','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x','y',
    'z', '☺', '☻','♡','♦','♣','♤', '•', '◘', '○', '◙','♂','♀','♪','♫',
    '☼','►','◄','↕','‼','¶','§','▬','↨','↑','↓','→','←','∟','↔','▲','▼',
    '░','▒','▓','│','┤','╡','╢','╖','╕','╣','║','╗','╝','╜','╛','┐',
    '└','┴','┬','├','─','┼','╞','╟','╚','╔','╩','╦','╠','═','╬','╧',
    '╨','╤','╥','╙','╘','╒','╓','╫','╪','┘','┌','█','▄','▌','▐','▀',
    'space', '!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',
    '0','1','2','3','4','5','6','7','8','9',':',';','<','=','>','?',
    '@','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O',
    'P','Q','R','S','T','U','V','W','X','Y','Z','[','/',']','^','_',
    ],
    [
        [0,0],[6, 1], [6, 2], [6, 3], [6, 4], [6, 5], [6, 6], [6, 7], [6, 8], [6, 9], [6, 10], [6, 11], [6, 12],[6, 13],[6, 14], [6, 15],[7,0],
        [7, 1],[7, 2], [7, 3], [7, 4], [7, 5], [7, 6], [7, 7], [7, 8],[7, 9],[7, 10],
        [0, 1], [0, 2],[0,3], [0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],[0,12],[0,13],[0,14],[0,15],
        [1,0],[1,1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [1, 8], [1, 9], [1, 10], [1, 11], [1, 12], [1, 13], [1, 14], [1, 15],
        
        [11,0],[11,1],[11,2],[11,3],[11,4], [11, 5], [11, 6], [11, 7], [11, 8], [11, 9], [11, 10], [11, 11], [11, 12], [11, 13], [11, 14], [11, 15],
        [12,0],[12,1],[12,2],[12,3],[12,4], [12, 5], [12, 6], [12, 7], [12, 8], [12, 9], [12, 10], [12, 11], [12, 12], [12, 13], [12, 14], [12, 15],
        [13,0],[13,1],[13,2],[13,3],[13,4], [13, 5], [13, 6], [13, 7], [13, 8], [13, 9], [13, 10], [13, 11], [13, 12], [13, 13], [13, 14], [13, 15],
        [2,0],[2,1], [2, 2], [2, 3], [2, 4], [2, 5], [2, 6], [2, 7], [2, 8], [2, 9], [2, 10], [2, 11], [2, 12], [2, 13], [2, 14], [2, 15],
        [3,0],[3,1], [3, 2], [3, 3], [3, 4], [3, 5], [3, 6], [3, 7], [3, 8], [3, 9], [3, 10], [3, 11], [3, 12], [3, 13], [3, 14], [3, 15],
        [4,0],[4,1], [4, 2], [4, 3], [4, 4], [4, 5], [4, 6], [4, 7], [4, 8], [4, 9], [4, 10], [4, 11], [4, 12], [4, 13], [4, 14], [4, 15],
        [5,0],[5,1], [5, 2], [5, 3], [5, 4], [5, 5], [5, 6], [5, 7], [5, 8], [5, 9], [5, 10], [5, 11], [5, 12], [5, 13], [5, 14], [5, 15],
    ],
    [   3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 3, 4, 3, 4, 5, 3, 1, 3, 3,
        3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
        3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
        3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 
        3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
        3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
        3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
        3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
        3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
        3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
        3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
        3, 3, 3, 3, 3, 3, 3, 3, 3, 3
    ]
]

const charmap1 = {
    ' ':{
        "position": [0, 0],
        "color": 3
    },
    '☺':{
        "position": [0, 1]
    },
    '☻':{
        "position": [0, 2]
    },
    '♡':{
        "position": [0, 3]
    },
    '♦':{
        "position": [0, 4]
    },
    '♣':{
        "position": [0, 5]
    },
    '♤':{
        "position": [0, 6]
    },
    '•':{
        "position": [0, 7]
    },
    '◘':{
        "position": [0, 8]
    },
    '○':{
        "position": [0, 9]
    },
    '◙':{
        "position": [0, 10]
    },
    '♂':{
        "position": [0, 11]
    },
    '♀':{
        "position": [0, 12]
    },
    '♪':{
        "position": [0, 13]
    },
    '♫':{
        "position": [0, 14]
    },
    '☼':{
        "position": [0, 15]
    },


    '►':{
        "position": [1, 0],
        "color": 3
    },
    '◄':{
        "position": [1, 1]
    },
    '↕':{
        "position": [1, 2]
    },
    '‼':{
        "position": [1, 3]
    },
    '¶':{
        "position": [1, 4]
    },
    '§':{
        "position": [1, 5]
    },
    '▬':{
        "position": [1, 6]
    },
    '↨':{
        "position": [1, 7]
    },
    '↑':{
        "position": [1, 8]
    },
    '↓':{
        "position": [1, 9]
    },
    '→':{
        "position": [1, 10]
    },
    '←':{
        "position": [1, 11]
    },
    '∟':{
        "position": [1, 12]
    },
    '↔':{
        "position": [1, 13]
    },
    '▲':{
        "position": [1, 14]
    },
    '▼':{
        "position": [1, 15]
    },

    'space':{
        "position": [2, 0],
        "color": 3
    },
    '!':{
        "position": [2, 1]
    },
    '"':{
        "position": [2, 2]
    },
    '#':{
        "position": [2, 3]
    },
    '$':{
        "position": [2, 4]
    },
    '%':{
        "position": [2, 5]
    },
    '&':{
        "position": [2, 6]
    },
    "'":{
        "position": [2, 7]
    },
    '(':{
        "position": [2, 8]
    },
    ')':{
        "position": [2, 9]
    },
    '*':{
        "position": [2, 10]
    },
    '+':{
        "position": [2, 11]
    },
    ',':{
        "position": [2, 12]
    },
    '-':{
        "position": [2, 13]
    },
    '.':{
        "position": [2, 14]
    },
    '/':{
        "position": [2, 15]
    },


    '0':{
        "position": [3, 0],
        "color": 3
    },
    '1':{
        "position": [3, 1]
    },
    '2':{
        "position": [3, 2]
    },
    '3':{
        "position": [3, 3]
    },
    '4':{
        "position": [3, 4]
    },
    '5':{
        "position": [3, 5]
    },
    '6':{
        "position": [3, 6]
    },
    "7":{
        "position": [3, 7]
    },
    '8':{
        "position": [3, 8]
    },
    '9':{
        "position": [3, 9]
    },
    ':':{
        "position": [3, 10]
    },
    ';':{
        "position": [3, 11]
    },
    '<':{
        "position": [3, 12]
    },
    '=':{
        "position": [3, 13]
    },
    '>':{
        "position": [3, 14]
    },
    '?':{
        "position": [3, 15]
    },

    '@':{
        "position":[4, 0]
    },
    'A':{
        "position:": [4, 1]
    },
    'B':{
        "position:": [4, 2]
    },
    'C':{
        "position:": [4, 3]
    },
    'D':{
        "position:": [4, 4]
    },
    'E':{
        "position:": [4, 5]
    },
    'F':{
        "position:": [4, 6]
    },
    'G':{
        "position:": [4, 7]
    },
    'H':{
        "position:": [4, 8]
    },
    'I':{
        "position:": [4, 9]
    },
    'J':{
        "position:": [4, 10]
    },
    'K':{
        "position:": [4, 11]
    },
    'L':{
        "position:": [4, 12]
    },
    'M':{
        "position:": [4, 13]
    },
    'N':{
        "position:": [4, 14]
    },
    'O':{
        "position:": [4, 15]
    },



    'P':{
        "position:": [5, 0]
    },
    'Q':{
        "position:": [5, 1]
    },
    'R':{
        "position:": [5, 2]
    },
    'S':{
        "position:": [5, 3]
    },
    'T':{
        "position:": [5, 4]
    },
    'U':{
        "position:": [5, 5]
    },
    'V':{
        "position:": [5, 6]
    },
    'W':{
        "position:": [5, 7]
    },
    'X':{
        "position:": [5, 8]
    },
    'Y':{
        "position:": [5, 9]
    },
    'Z':{
        "position:": [5, 10]
    },
    '[':{
        "position:": [5, 11]
    },
    'slash':{
        "position":[5, 12]
    },
    ']':{
        "position":[5, 13]
    },
    '^':{
        "position":[5,14]
    },
    "_":{
        "position":[5, 15]
    },


    'a':{
        "position:": [6, 1]
    },
    'b':{
        "position:": [6, 2]
    },
    'c':{
        "position:": [6, 3]
    },
    'd':{
        "position:": [6, 4]
    },
    'e':{
        "position:": [6, 5]
    },
    'f':{
        "position:": [6, 6]
    },
    'g':{
        "position:": [6, 7]
    },
    'h':{
        "position:": [6, 8]
    },
    'i':{
        "position:": [6, 9]
    },
    'j':{
        "position:": [6, 10]
    },
    'k':{
        "position:": [6, 11]
    },
    'l':{
        "position:": [6, 12]
    },
    'm':{
        "position:": [6, 13]
    },
    'n':{
        "position:": [6, 14]
    },
    'o':{
        "position:": [6, 15]
    },


    'p':{
        "position:": [7, 0]
    },
    'q':{
        "position:": [7, 1]
    },
    'r':{
        "position:": [7, 2]
    },
    's':{
        "position:": [7, 3]
    },
    't':{
        "position:": [7, 4]
    },
    'u':{
        "position:": [7, 5]
    },
    'v':{
        "position:": [7, 6]
    },
    'w':{
        "position:": [7, 7]
    },
    'x':{
        "position:": [7, 8]
    },
    'y':{
        "position:": [7, 9]
    },
    'z':{
        "position:": [7, 10]
    },
    '{':{
        "position:": [7, 11]
    },
    ':':{
        "position":[7, 12]
    },
    '}':{
        "position":[7, 13]
    },
    '~':{
        "position":[7,14]
    },
    "⌂":{
        "position":[7, 15]
    },
    //skipped this part of spritesheet for a sec 😆


    '░':{
        "position:": [11, 0]
    },
    '▒':{
        "position:": [11, 1]
    },
    '▓':{
        "position:": [11, 2]
    },
    '│':{
        "position:": [11, 3]
    },
    '┤':{
        "position:": [11, 4]
    },
    '╡':{
        "position:": [11, 5]
    },
    '╢':{
        "position:": [11, 6]
    },
    '╖':{
        "position:": [11, 7]
    },
    '╕':{
        "position:": [11, 8]
    },
    '╣':{
        "position:": [11, 9]
    },
    '║':{
        "position:": [11, 10]
    },
    '╗':{
        "position:": [11, 11]
    },
    '╝':{
        "position":[11, 12]
    },
    '╜':{
        "position":[11, 13]
    },
    '╛':{
        "position":[11,14]
    },
    "┐":{
        "position":[11, 15]
    },


    '└':{
        "position:": [12, 0]
    },
    '┴':{
        "position:": [12, 1]
    },
    '┬':{
        "position:": [12, 2]
    },
    '├':{
        "position:": [12, 3]
    },
    '─':{
        "position:": [12, 4]
    },
    '┼':{
        "position:": [12, 5]
    },
    '╞':{
        "position:": [12, 6]
    },
    '╟':{
        "position:": [12, 7]
    },
    '╚':{
        "position:": [12, 8]
    },
    "╔":{
        "position:": [12, 9]
    },
    '╩':{
        "position:": [12, 10]
    },
    '╦':{
        "position:": [12, 11]
    },
    '╠':{
        "position":[12, 12]
    },
    '═':{
        "position":[12, 13]
    },
    '╬':{
        "position":[12,14]
    },
    "╧":{
        "position":[12, 15]
    },

}

class Font{
    constructor(src){
        this.charmap1 = charmap1
        this.fontImage = new Image();
        this.fontImage.src = src;
        this.colors = ["#0000", "#FFFF", "#FFE0", "#F81F", "#00F", "#00FF00"]
        this.currentColor = 0;
        this.colorMap = []
        this.fontImage.onload = () => {
            this.init();

        }
        
        //this.init();
    }

    init(){
        var w = 128;
        var h = 320;

        this.colors.forEach(color => {

            var can = document.createElement("canvas");
            var canCtx = can.getContext('2d')

            canCtx.fillStyle = color;
            canCtx.fillRect(0, 0, w, h);
            canCtx.globalCompositeOperation = "destination-in";

            canCtx.drawImage(this.fontImage, 0, 0)

            this.colorMap.push(can)
        })
    }

    drawChar(charCode, posX, posY, color, context){


        


        if(!color){
            color = charmap[2][charmap[0].indexOf(charCode)]            
        }


        var scopeX = charmap[1][charmap[0].indexOf(charCode)][1] * 8;
        var scopeY = charmap[1][charmap[0].indexOf(charCode)][0] * 16

        //let [scopeX, scopeY] = charmap1[charCode].position

        //var scopeX = charmap1[charCode].position[0] * 8
        //var scopeY = charmap1[charCode].position[1] * 8

        if(charCode != ' '){
            context.ctx.drawImage(this.colorMap[color], scopeX, scopeY, 7 , 15 , posX, posY, context.fontX, context.fontY);
        }
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
