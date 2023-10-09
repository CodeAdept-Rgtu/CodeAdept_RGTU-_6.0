
//Typing effect
function typeString(string){
    let text = document.getElementById("text")
    let i =0;
    WriteString();
    
        
        
       function WriteString(){

        let typing = setInterval(()=>{
            if(i<string.length){
                text.innerText+=string[i];
                i++;
            }
            else{
                clearInterval(typing);
                backSpace();
            }
        },150);

       }

            function backSpace(){
                setTimeout(()=>{
                    let deleting = setInterval(()=>{
                        if(i>0){
                            text.innerText = text.innerText.substring(0, text.innerText.length - 1);
                            i--;
                        }
                        else{
                            clearInterval(deleting);
                            WriteString();
                        }
                    },150)
                },1000)
                
                
            }
           
        

        
    
        
    
}
typeString("COMPETE-CODE-CONQUER")


// 

// let registerMouseTrailer = document.querySelector(".registerMouseTrailer");

// let landingPg = document.querySelector(".landingPg");

// landingPg.addEventListener("mouseenter", function(){
//     registerMouseTrailer.style.display = "1";
// })

// landingPg.addEventListener("mouseleave", function(){
//     registerMouseTrailer.style.display = "0";
// })

// window.onmousemove = evnet=>{
//     registerMouseTrailer.style.opacity = "1";
    
//     let x = event.clientX;
//     let y = event.clientY;
//     // console.log(y);
//     let height = window.outerHeight;

//     const keyFrames = {
//         transform: `translate(${x}px, ${y}px)`
//     }

//     registerMouseTrailer.animate(keyFrames, {
//         duration: 800,
//         fill: "forwards",
//     })
// }



// registerMouseTrailer.addEventListener("click", function(){
//     document.location.href = "register.html";
// })