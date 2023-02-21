
// transform: translate3d(-26.802vw, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
var i =-80;
var interval = setInterval(function(){
    var div = document.getElementById('brandNames');
    div.style.transform="translate3d("+ i +"vw, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"; 
    i+=0.1;
    if(i>=0){
        i=-80;
        
    }
  
},20);



//transform: translate3d(-31.499vw, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);

var j =0;
var interval1 = setInterval(function(){
    var div1 = document.getElementById('brandNames1');
    div1.style.transform="translateX("+ -j +"vw) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"; 
    j+=0.1;
    // console.log(j);
    if(j>100){
        j=0;
        
    }
    
},20);


var tp = -1;

var topInterval = setInterval(function(){
    var topdiv = document.getElementById("topLayer");
    topdiv.style.transform="translateY("+ tp +"vw) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"; 
    // console.log(tp);
    tp-=0.1;

    if(tp<Math.floor(-50)){
        tp=-1;
    }

},30);

var md = -1;

var mdInterval = setInterval(function(){
    var mddiv = document.getElementById("middleLayer");
    mddiv.style.transform = "translateY("+ md +"vw) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";  
    md-=0.1;
    // console.log(md);

    if(md<Math.floor(-30)){
        md = -1;
    }
},50);

var bt = -1;

var btInterval = setInterval(function(){
    var btdiv = document.getElementById("bottomLayer");
    btdiv.style.transform = "translateY("+ bt +"vw) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";  
    bt-=0.1;
    //console.log(md);

    if(bt<Math.floor(-15)){
        bt = -1;
    }
},70);

var tr = -1;

var trInterval = setInterval(function(){
    var trdiv = document.getElementById("topRow");
    tr-=0.1;
    //  console.log(tr);
    trdiv.style.transform = "translateX(" + tr + "vw)  scale3d(1,1,1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg,0deg)";

    if(tr<Math.floor(-150)){
        tr = -1;
    }
},20);

var tr1 = -1;

var tr1Interval = setInterval(function(){
    var tr1div = document.getElementById("topRow1");
    tr1-=0.1;
    tr1div.style.transform = "translateX(" + tr1 + "vw)  scale3d(1,1,1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg,0deg)";

    if(tr1<Math.floor(-100)){
        tr1 = -1;
    }
},20);


var x = window.matchMedia("(max-width: 600px)");
var tab1 =0;
var tab2 =0;
var tab3=0;

var meida = setInterval(function(){

    if(x.matches){
        var tabdiv = document.getElementById('topLayer');
    tabdiv.style.transform="translateX("+ tab1 +"vw) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"; 
    tab1+=0.1;
    // console.log(tabdiv);
    if(tab1>=0){
        tab1=-80;
        
    };
    }

},20);

var media2 = setInterval(function(){

    if(x.matches){
    var tab2div = document.getElementById("middleLayer");
    tab2div.style.transform = "translateX("+ tab2 +"vw) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";  
    tab2+=0.1;
    // console.log(md);

    if(tab2>Math.floor(0)){
        tab2 = -80;
    }
}
},10);

var media3 = setInterval(function(){

    if(x.matches){
    var tab3div = document.getElementById("bottomLayer");
    tab3div.style.transform = "translateX("+ tab3 +"vw) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";  
    tab3+=0.1;
    // console.log(md);

    if(tab3>Math.floor(0)){
        tab3 = -80;
    }
}
},10);



var next = document.getElementById("next");
var nextIndex = 0;

next.addEventListener('click', function(){

   

    var slices = document.getElementById("mainSlide");

    if(nextIndex == -59){
        nextIndex = 0;
        console.log(nextIndex);
    }else{
        nextIndex -= 59;
    }
    
    slices.style.transform = "translateX(" + nextIndex +"vw)";
    console.log(nextIndex);
    
});

var prev = document.getElementById("previous");
var prevIndex = 0;

prev.addEventListener('click', function(){

   

    var prevslices = document.getElementById("mainSlide");

    if(nextIndex == -59){
        prevIndex = 0;
        
    }
    
    prevslices.style.transform = "translateX(" + prevIndex +"vw)";
    
    
    
});


var navBar = document.getElementById('nav');
navBar.addEventListener('click' , myfun);

function myfun(){
    document.getElementById("navClick").style.display = "block";
}

var wrg = document.getElementById('wrong');

wrg.addEventListener('click' , myfun2);

function myfun2(){
    document.getElementById("navClick").style.display = "none";
}




