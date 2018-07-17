$(function(){
    var wid = document.body.clientWidth;
    var ox = document.body.clientWidth/2;
    var oy = document.body.clientHeight;
    var firework = new Firework();
    window.onclick=function(e){
        // var e = e||window.event;
        // var endX = e.clientX;
        // var endY = e.clientY;
        // firework.move(endX,endY);
    };
    function Firework (){ }
    Firework.prototype.randon=function(min,max){//产生区间随机数函数
        return Math.floor(Math.random()*(max-min)+min);
    }
    Firework.prototype.move=function(endX,endY){//烟花升空函数
        var that = this;
        var randon=this.randon;
        var rgb = `rgb(${randon(0,255)},${randon(0,255)},${randon(0,255)})`;
        var dot = document.createElement("div");
        dot.className="dot";
        dot.style.background=rgb;
        dot.style.top=`${oy-5}px`;
        dot.style.left=`${ox-2.5}px`;
        $("#wrap").append(dot);
        $(dot).animate({
            top:endY,
            left:endX
        },300,"linear",function(){
            $(this).remove();
            var pieces = randon(100,110);
            for(var i=0;i<pieces;i++){
                that.piece(endX,endY);
            }
        });
    }
    Firework.prototype.piece=function(endX,endY){//碎片创建
        var randon=this.randon;
        var piece = document.createElement('div');
        piece.className = 'piece';
        var rgb = `rgb(${randon(0,255)},${randon(0,255)},${randon(0,255)})`;
        piece.style.background = rgb;
        piece.style.top = `${endY}px`;
        piece.style.left = `${endX}px`;
        document.getElementById("wrap").appendChild(piece);
        var speedX = this.randon(1,25);
        var speedY = this.randon(10,50);
        speedX = Math.random()>0.5?speedX:-speedX;
        // speedY = Math.random()>0.5?speedY:-speedY;
        speedY = -speedY;
        this.pieceMove(piece,endX,endY,speedX,speedY);
    }
    Firework.prototype.pieceMove=function(piece,endX,endY,speedX,speedY){//碎片运动函数
        var i=0;
        piece.timer = setInterval(function(){
            i++;
            speedY +=4;//Y轴方向速度增加使烟花碎片做加速落体运动
            if(Math.abs(speedX*i)>100||Math.abs(speedY*i)>200){ 
                clearInterval(piece.timer);
                document.getElementById("wrap").removeChild(piece);
            }
            $(piece).css("top",speedY*i+endY);
            $(piece).css("left",speedX*i+endX);
        },200);
    }
    function triggerEvent(){
        var endX = firework.randon(0.45*wid,0.65*wid);
        var endY  = firework.randon(0.25*oy,0.35*oy);
        firework.move(endX,endY);
    }
    triggerEvent();
    var timer=setInterval(triggerEvent,1000*1.5)
})