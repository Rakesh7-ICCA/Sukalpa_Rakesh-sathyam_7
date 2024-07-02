function convertSpan()
{
    const ele = document.getElementById("greeting")
    let greet = ele.innerText;
    ele.innerText=''
    let i = 0;
    for(let i = 0; i<greet.length; i++)
    {
        const newEle = document.createElement('span')
        newEle.innerText = greet[i]
        ele.append(newEle)
    }

}

convertSpan()
const t = gsap.timeline()

t.from(".logo h1",{
    y:-40,
    opacity: 0,
})

t.from(".navItem h2",{
    x:40,
    opacity: 0,
    duration: .8,
    direction: -1, 
    stagger: .5
})

t.from(".page1 #greeting span",{
    x: -200,
    duration: .4,
    opacity: 0,
    stagger: .1,
    delay:-1
})


t.from('.left ol li, .right ol li', {
    opacity: 0,
    stagger: .3
})

gsap.to(".page2 #greeting",{
    transform: "translateX(-29%)",
    duration: 2,
    scrollTrigger: {
        trigger: ".page2 ",
        scroller: "body",
        start: "top 0%",
        end: "top -100%",
        scrub: 1,
        pin: true
    }
})

gsap.from('.pointer', {
    transform: "rotateY(360deg)",
    duration: 1,
    repeat: -1
})

// mouse event

window.addEventListener('mousemove', e=>{
    const pointer = document.querySelector('.pointer')
    setTimeout(()=>{
        pointer.style.top = e.y+'px'
        pointer.style.left = e.x+'px'
    }, 100)
})