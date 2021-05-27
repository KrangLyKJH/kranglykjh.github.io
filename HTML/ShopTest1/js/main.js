//headermenu

// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0";
        document.getElementById("navbar").style.background = "#000";
        document.getElementById("navbar").style.transition = "0.3s";
    }
    else {
        closeHeader();
    }
}
//closeheader
function closeHeader() {
    document.getElementById('closeheader').style.visibility = "hidden";
    document.getElementById('closeheader').style.position = "absolute";
    document.getElementById('navbar').style.top = "0px";
    document.getElementById("navbar").style.background = "none";
    document.getElementById("navbar").style.transition = "0.3s";
}


//sidenav
function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// cartnav
function openCart() {
    document.getElementById("myCartnav").style.width = "300px";
}

function closeCart() {
    document.getElementById("myCartnav").style.width = "0";
}

//search hidden
function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}

// Gsap Animation
// gsap.from(".p-image", {
//     scrollTrigger: ".p-image", opacity: 0, duration: 2, stagger: .2, delay: .5, y: 60
// });

gsap.from(".table-text", { opacity: 0, duration: 2, delay: .5, x: -60 })

// scroll
// gsap.from('.p-image', { opacity: 0, duration: 3, delay: 1.5, y: 35, ease: 'expo.out' })
// scrollReveal
const sr = ScrollReveal({
    duration: 3000,
    reset: true
})

sr.reveal('.shopping-item', { origin: 'bottom', distance: '70px' })

// mix filter
const mixer = mixitup('.shopping', {
    selectors: {
        target: '.shopping-item'
    },
    animation: {
        duration: 400
    }
});

// Button Grid
/*var MyBtn = document.getElementsByClassName("mybtn");
var index = 0;

function Button(n) {
    CurrentShowButton(index = n);
}
function CurrentShowButton(n) {
    for (var i = 0; i < MyBtn.length; i++) {
        MyBtn[i].className = MyBtn[i].className.replace("Active", "");
    }
    MyBtn[n].className += " Active";
}
function Grid() {
    var Item = document.getElementsById("shopping");
    var MyItem = document.getElementsByClassName("shopping-item");

    for (var i = 0; i < MyItem.length; i++) {
        MyItem[i].style.margin = "0";
    }
    Item.style.display = "block";
}
function GridAlt() {
    var Item = document.getElementsById("shopping");
    var MyItem = document.getElementsByClassName("shopping-item");

    for (var i = 0; i < MyItem.length; i++) {
        MyItem[i].style.margin = "10px 0";
    }
    Item.style.display = "grid";
}*/