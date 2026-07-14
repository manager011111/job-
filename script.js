// ==========================================
// ELEMENTS
// ==========================================

const pages = document.querySelectorAll(".page");

const nextButtons = document.querySelectorAll(".nextPage");

const startButton = document.getElementById("startJourney");

const acceptButton = document.getElementById("acceptOffer");

const navItems = document.querySelectorAll("nav li");

const music = document.getElementById("bgMusic");

const click = document.getElementById("clickSound");

const yay = document.getElementById("yaySound");

let currentPage = 0;

let musicStarted = false;



// ==========================================
// SOUNDS
// ==========================================

function playClick(){

    click.currentTime = 0;

    click.play().catch(()=>{});

}

function startMusic(){

    if(musicStarted) return;

    music.volume = 0.08;

    music.play().catch(()=>{});

    musicStarted = true;

}



// ==========================================
// NAVIGATION HIGHLIGHT
// ==========================================

function updateNavigation(){

    navItems.forEach(item=>{

        item.classList.remove("active");

    });

    if(currentPage <= 1){

        navItems[0].classList.add("active");

    }

    else if(currentPage == 2){

        navItems[1].classList.add("active");

    }

    else if(currentPage == 3 || currentPage == 4){

        navItems[2].classList.add("active");

    }

    else{

        navItems[3].classList.add("active");

    }

}



// ==========================================
// PAGE SWITCH
// ==========================================

function showPage(index){

    if(index < 0) return;

    if(index >= pages.length) return;

    pages.forEach(page=>{

        page.classList.remove("active-page");

    });

    pages[index].classList.add("active-page");

    currentPage = index;

    updateNavigation();

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}
// ==========================================
// START BUTTON
// ==========================================

startButton.addEventListener("click",()=>{

    playClick();

    startMusic();

    showPage(1);

});



// ==========================================
// CONTINUE BUTTONS
// ==========================================

nextButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        playClick();

        showPage(currentPage + 1);

    });

});



// ==========================================
// NAVIGATION
// ==========================================

navItems.forEach(item=>{

    item.addEventListener("click",()=>{

        playClick();

        startMusic();

        const targetPage = Number(item.dataset.page);

        showPage(targetPage);

    });

});



// ==========================================
// ACCEPT OFFER
// ==========================================

acceptButton.addEventListener("click",()=>{

    playClick();

    yay.currentTime = 0;

    yay.volume = 1;

    yay.play().catch(()=>{});

    confetti({

        particleCount:250,

        spread:170,

        origin:{ y:.6 }

    });

    showPage(6);

});



// ==========================================
// KEYBOARD SUPPORT
// ==========================================

document.addEventListener("keydown",(e)=>{

    if(e.key==="ArrowRight"){

        if(currentPage < pages.length-1){

            showPage(currentPage+1);

        }

    }

    if(e.key==="ArrowLeft"){

        if(currentPage>0){

            showPage(currentPage-1);

        }

    }

});
// ==========================================
// FLOATING HEARTS
// ==========================================

const heartsContainer = document.getElementById("hearts-container");

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize = (12 + Math.random()*18) + "px";

    heart.style.animationDuration = (7 + Math.random()*6) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },13000);

}

setInterval(createHeart,700);



// ==========================================
// FALLING FLOWERS
// ==========================================

const flowersContainer = document.getElementById("flowers-container");

const flowers = [

    "🌸",

    "🌷",

    "🌺",

    "💮"

];

function createFlower(){

    const flower = document.createElement("div");

    flower.className = "flower";

    flower.innerHTML = flowers[Math.floor(Math.random()*flowers.length)];

    flower.style.left = Math.random()*100 + "vw";

    flower.style.fontSize = (18 + Math.random()*18) + "px";

    flower.style.animationDuration = (8 + Math.random()*6) + "s";

    flowersContainer.appendChild(flower);

    setTimeout(()=>{

        flower.remove();

    },15000);

}

setInterval(createFlower,500);



// ==========================================
// BUTTON HOVER
// ==========================================

document.querySelectorAll("button").forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform = "translateY(-5px) scale(1.04)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform = "translateY(0px) scale(1)";

    });

});



// ==========================================
// GSAP INTRO
// ==========================================

window.addEventListener("load",()=>{

    if(typeof gsap !== "undefined"){

        gsap.from(".hero",{

            y:60,

            opacity:0,

            duration:1

        });

        gsap.from(".letter",{

            y:-60,

            opacity:0,

            duration:1.2

        });

    }

    updateNavigation();

});



// ==========================================
// EXTRA CELEBRATION
// ==========================================

acceptButton.addEventListener("click",()=>{

    setTimeout(()=>{

        confetti({

            particleCount:120,

            spread:100,

            origin:{x:0}

        });

    },350);

    setTimeout(()=>{

        confetti({

            particleCount:120,

            spread:100,

            origin:{x:1}

        });

    },650);

});



// ==========================================
// SPARKLE EFFECT
// ==========================================

setInterval(()=>{

    document.querySelectorAll(".benefit-card").forEach(card=>{

        card.style.transition=".35s";

    });

},1000);