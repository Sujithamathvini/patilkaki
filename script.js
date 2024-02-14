// hero section
var hs = gsap.timeline({scrollTrigger:{
    trigger:".main",
    // markers:true,
    start:"50% 50%",
    end:"110% 50%",
    scrub:2,
    pin:true
}});
hs
.to(".grow",{
    marginLeft: "60%",
})

// cursor
var crsr = document.querySelector("#cursor")

// move cursor
document.addEventListener("mousemove",(dets)=>{
    gsap.to("#cursor",{
        left:dets.x,
        top:dets.y
    });
})


// nav
function navreveal (){
    var menuelement = document.querySelector(".nav");

    menuelement.classList.toggle("show")
}


// loader
function startLoader(){
    let element = document.querySelector(".loader-grow");
    let currentVal = 0;
    const arr = ["passion","passion", "vision", "guide", "grow"];

    function updateText(){
        if(currentVal == 4){
            return;
        }

        currentVal+=1;

        if(currentVal>4){
            currentVal=4
        }
        element.textContent = arr[currentVal]

        let delay = 50*20;
        setTimeout(updateText,delay)
    }
    updateText();
}
startLoader();

gsap.to(".loader, .loader-content", 0.25, {
    delay: 3.5,
    display: "none"
})


function countdown( elementName, minutes, seconds )
{
    var element, endTime, hours, mins, msLeft, time;
    element = document.getElementById( elementName );
    endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
    updateTimer();

    function twoDigits( n )
    {
        return (n <= 9 ? "0" + n : n);
    }

    function updateTimer()
    {
        msLeft = endTime - (+new Date);
        if ( msLeft < 1000 ) {
            element.innerHTML = "Time is up!";
        } else {
            time = new Date( msLeft );
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
            setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
        }
    }
}

countdown( "timer", 10, 0 );




const loginPopup = document.querySelector(".popupForm");
const close = document.querySelector(".closeButton");


window.addEventListener("load",function(){

 showPopup();
})

function showPopup(){
      const timeLimit = 15;
      let i=0;
      const timer = setInterval(function(){
       i++;
       if(i == timeLimit){
        clearInterval(timer);
        loginPopup.style.opacity = 1;
        loginPopup.style.visibility = "visible";
       }
    //    console.log(i)
      },1000);
}


close.addEventListener("click",function(){
    loginPopup.style.opacity = 0;
    loginPopup.style.visibility = "hidden";
})


