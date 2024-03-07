

function chalatahuaimagewithmouse(){

    var elems = document.querySelectorAll("#main .elem");
    elems.forEach(function(elem){

        elem.addEventListener("mousemove",function(dets){
          elem.querySelector("img").style.left = dets.clientX - 75 + "px";
        })

        elem.addEventListener("mouseenter",function(){
            elem.querySelector("img").style.opacity = 1;
        })

        elem.addEventListener("mouseleave",function(){
            elem.querySelector("img").style.opacity = 0;
        })

        
    })
}


chalatahuaimagewithmouse();

