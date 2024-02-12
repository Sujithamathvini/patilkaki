// hero section
var tl = gsap.timeline({scrollTrigger:{
    trigger:".main",
    // markers:true,
    start:"50% 50%",
    end:"110% 50%",
    scrub:2,
    pin:true
}});
tl
.to(".top",{
    top: "-100%",
},'a')
.to(".bottom",{
    bottom: "-100%",
},'a')
.to(".top-h",{
    top: "80%"
},'a')
.to(".content",{
    delay: -0.2,
    paddingTop: "0%"
})
.to(".bottom",{
    delay: 0.5,
    height: "0",
},'b')

// nav
gsap.to("nav",{
    backgroundColor:"#E5E7E8",
    duration:0.5,
    height:"70px",
    scrollTrigger:{
        trigger:"nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
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
      const timeLimit = 5;
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


