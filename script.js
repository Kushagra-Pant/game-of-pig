let score = 0;
let turn=true 
let s1 = 0;
let s2 = 0;

function getctx(){
    const canvas = document.getElementById("myCanvas");
    return(canvas.getContext("2d"))
}

function popup(){
    ctx = getctx()
    ctx.strokeStyle="black"
    ctx.fillStyle = "rgba(220,20,60, 0.7)";
    ctx.beginPath();
    ctx.roundRect(165, 100, 1035, 500, [40]);
    ctx.stroke();
    ctx.fill();
}

function b(){
    ctx.fillStyle = "white"
    ctx.font = "60px Average";
    ctx.fillText("Dice 1:", 350, 330);
    ctx.fillText("Dice 2:", 850, 330);
}

function hold(){
    if(turn){
        Hold('You')
    }
}

function Hold(player){
    clear()
    popup()
    ctx.fillStyle = "white"
    ctx.font = "80px Average";
    ctx.fillText(player+" held", 350, 330);
    if(player=='You'){
        turn=false
        function z(){
            Turn(false)
        }
        setTimeout(z, 1000)
    }
}

function Roll(){
    if (turn){
        clear()
        turn = false
        var d1
        var d2

        ctx = getctx() 
        popup()

        function a(){
            ctx.fillStyle = "rgb(3, 12, 79)"
            ctx.strokeStyle = "rgb(38, 186, 255)"
            ctx.font = "80px Average";
            ctx.strokeText("You rolled", 520, 200);
            ctx.fillText("You rolled", 520, 200);
        }

        function c(){
            d1=Math.floor(6*Math.random()+1)
            d2=Math.floor(6*Math.random()+1)
            ctx.font = "80px Average";
            ctx.fillText(d1, 430, 430)
            ctx.fillText(d2, 930, 430)
        }

        function d(){
            ctx.fillStyle = "rgb(3, 12, 79)"
            ctx.strokeStyle = "rgb(38, 186, 255)"
            ctx.font = "80px Average";
            if(d1==1 || d2==1){
                ctx.font = "50px Average";
                if(d1==d2){
                    ctx.strokeText("Looks like you got two ones! Your score is reset!", 206, 550);
                    ctx.fillText("Looks like you got two ones! Your score is reset!", 206, 550);
                    score = 0
                } else {
                    ctx.strokeText("Looks like you got a one! Added Score: 0", 275, 550);
                    ctx.fillText("Looks like you got a one! Added Score: 0", 275, 550);
                }
                Turn(false)
            } else if(d1==d2){
                ctx.strokeText("You must roll again.", 380, 550);
                ctx.fillText("You must roll again.", 380, 550);
                score+=d1+d2
                turn = true
            } else {
                ctx.strokeText("Total: " +(d1+d2), 565, 550);
                ctx.fillText("Total: "+(d1+d2), 565, 550);
                score+=d1+d2
                Turn(false)
            }   
            document.getElementById("score").innerHTML="Your Score: "+score
        }
        setTimeout(a, 500)
        setTimeout(b, 1000)
        setTimeout(c, 1500)
        setTimeout(d, 2000)
    } 
}

function clear(){
    const canvas = document.getElementById("myCanvas");
    const ctx = getctx()
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function Turn(t){
    if(t){
        turn = true
    } else {
        setTimeout(clear, 2000)
        setTimeout(otherturn, 2700)
    }
}

function otherturn(){
    const ctx = getctx()
    let again = false
    turn = false
    popup()
    d1=Math.floor(6*Math.random()+1)
    d2=Math.floor(6*Math.random()+1)
    
    ctx.fillStyle = "rgb(3, 12, 79)"
    ctx.strokeStyle = "rgb(38, 186, 255)"
    ctx.font = "80px Average";
    ctx.strokeText("Player 1 rolled...", 450, 200);
    ctx.fillText("Player 1 rolled...", 450, 200);

    function c(){
        ctx.font = "80px Average";
        ctx.fillText(d1, 430, 430)
        ctx.fillText(d2, 930, 430)
    }

    function d(){
        if(d1==1 || d2==1){
            ctx.font = "50px Average";
            if(d1==d2){
                ctx.strokeText("Player 1 got two ones, their score is reset!", 206, 550);
                ctx.fillText("Player 1 got two ones, their score is reset!", 206, 550);
                s1 = 0
            } else {
                ctx.strokeText("Player 1 got a one! Added Score: 0", 275, 550);
                ctx.fillText("Player 1 got a one! Added Score: 0", 275, 550);
            }
        } else if(d1==d2){
            ctx.strokeText("Player 1 rolls again.", 380, 550);
            ctx.fillText("Player 1 rolls again.", 380, 550);
            s1+=d1+d2
            again = true
        } else {
            ctx.strokeText("Total: " +(d1+d2), 565, 550);
            ctx.fillText("Total: "+(d1+d2), 565, 550);
            s1+=d1+d2
        }
        document.getElementById("p1").innerHTML="Player 1 Score: "+s1
    }
    
    if(s1<=s2 || s1<score){
        setTimeout(b, 500)
        setTimeout(c, 1000)
        setTimeout(d, 1500)
        function h(){
            if(again){
                again1()
            }
        }
        setTimeout(h, 2000)
    } else {
        function y(){
            Hold('Player 1')
        }
        setTimeout(y, 500)
    }

    function again1(){
        setTimeout(clear, 400)
        setTimeout(popup, 700)
        d1=Math.floor(6*Math.random()+1)
        d2=Math.floor(6*Math.random()+1)
        setTimeout(b, 1000)
        setTimeout(c, 2500)
        setTimeout(d,2000)
    }

    setTimeout(clear, 3000)
    
    function e(){
        d1=Math.floor(6*Math.random()+1)
        d2=Math.floor(6*Math.random()+1)
        ctx.fillStyle = "rgb(3, 12, 79)"
        ctx.strokeStyle = "rgb(38, 186, 255)"
        ctx.font = "80px Average";
        ctx.strokeText("Player 2 rolled...", 450, 200);
        ctx.fillText("Player 2 rolled...", 450, 200);
    }

    function f(){
        ctx.font = "80px Average";
        ctx.fillText(d1, 430, 430)
        ctx.fillText(d2, 930, 430)
    }
    
    function g(){
        if(d1==1 || d2==1){
            ctx.font = "50px Average";
            if(d1==d2){
                ctx.strokeText("Player 2 got two ones, their score is reset!", 206, 550);
                ctx.fillText("Player 2 got two ones, their score is reset!", 206, 550);
                s2 = 0
            } else {
                ctx.strokeText("Player 2 got a one! Added Score: 0", 275, 550);
                ctx.fillText("Player 2 got a one! Added Score: 0", 275, 550);
            }
        } else if(d1==d2){
            ctx.strokeText("Player 2 rolls again.", 380, 550);
            ctx.fillText("Player 2 rolls again.", 380, 550);
            s2+=d1+d2
            again = true
        } else {
            ctx.strokeText("Total: " +(d1+d2), 565, 550);
            ctx.fillText("Total: "+(d1+d2), 565, 550);
            s2+=d1+d2
        }
        document.getElementById("p2").innerHTML="Player 2 Score: "+s2
    }

    if(s2<=s1 || s2<score){
        setTimeout(popup, 3500)
        setTimeout(e, 4000)
        setTimeout(b, 4500)
        setTimeout(f, 5000)
        setTimeout(g, 5500)
        function k(){
            if(again){
                again2()
            } else {
                setTimeout(w, 500)
            }
        }
        setTimeout(k, 5500)
    } else {
        function x(){
            Hold('Player 2')
        }
        setTimeout(x, 3500)
        setTimeout(w, 5000)
    }

    function again2(){
        setTimeout(clear, 500)
        setTimeout(popup, 1000)
        d1=Math.floor(6*Math.random()+1)
        d2=Math.floor(6*Math.random()+1)
        setTimeout(b, 1500)
        setTimeout(e, 2000)
        setTimeout(f, 2500)
        setTimeout(g, 3000)
        setTimeout(w, 3000)
    }

    function w(){
        Turn(true)
    }
}
