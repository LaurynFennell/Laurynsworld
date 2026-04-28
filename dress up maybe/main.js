
      
function change() {
           console.log('it works!');
            document.querySelector(".menu").classList.toggle("active");
            document.querySelector(".gear").classList.toggle("spin");
            document.querySelector(".playarea").classList.toggle("active")}



const items = {
    background: [
      
        "images/bk2.png",
        "images/bk3.png",
        "images/bk4.png",
        "images/bk5.png",
        "images/bk6.png",
        "back1.png"
       
    ],

    hair: [
        "images/h1.png",
        "images/h2.png",
        "images/h3.png",
        "images/h4.png",
        "images/h5.png",
        ""
    ],

    glasses: [
        "",
        "images/g1.png",
        "images/g2.png",
        "images/g3.png",
        "images/g4.png",
        "images/g5.png",
         ""
    ],

    nose: [
     
        "images/n1.png",
        "images/n2.png",
        "images/n3.png",
        "images/n4.png",
       ""
    ],

    tattoos: [
        "images/t1.png",
        "images/t2.png",
        "images/t3.png",
        "images/t4.png",
        ""
    ]
};

const currentIndex = {
    background: 0,
    hair: 0,
    glasses: 0,
    nose: 0,
    tattoos: 0
};

function nextItem(type) {
    currentIndex[type]++;

    if (currentIndex[type] >= items[type].length) {
        currentIndex[type] = 0;
    }

    document.getElementById(type).src =
        items[type][currentIndex[type]];
}

function prevItem(type) {
    currentIndex[type]--;

    if (currentIndex[type] < 0) {
        currentIndex[type] = items[type].length - 1;
    }

    document.getElementById(type).src =
        items[type][currentIndex[type]];
}
      
  