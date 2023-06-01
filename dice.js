function genrandom(){
    var m=Math.floor((Math.random())*6)+1;
    var n=Math.floor((Math.random())*6)+1;
    console.log(m);
    console.log(n);
    if(m==1){
        document.querySelector("img").setAttribute("src","f1.png");
    }else if(m==2){
        document.querySelector("img").setAttribute("src","f2.png");
    }else if(m==3){
        document.querySelector("img").setAttribute("src","f3.png");
    }else if(m==4){
        document.querySelector("img").setAttribute("src","f4.png");
    }else if(m==5){
        document.querySelector("img").setAttribute("src","f5.png");
    }else if(m==6){
        document.querySelector("img").setAttribute("src","f6.png");
    }

    if(n==1){
        document.querySelector("p").firstChild.setAttribute("src","f1.png");
    }else if(n==2){
        document.querySelector("p").firstChild.setAttribute("src","f2.png");
    }else if(n==3){
        document.querySelector("p").firstChild.setAttribute("src","f3.png");
    }else if(n==4){
        document.querySelector("p").firstChild.setAttribute("src","f4.png");
    }else if(n==5){
        document.querySelector("p").firstChild.setAttribute("src","f5.png");
    }else if(n==6){
        document.querySelector("p").firstChild.setAttribute("src","f6.png");
    }

    if(m==n){
        document.querySelector("div").lastElementChild.firstChild.innerText="Woops! This is a draw match";
    }else if(m>n){
        document.querySelector("div").lastElementChild.firstChild.innerText="Wow! Player 1 wins the game";
    }else if(m<n){
        document.querySelector("div").lastElementChild.firstChild.innerText="Wow! Player 2 wins the game";
    }

}
