let information = [
    {//page-1
        "card-1":{
            "id":"1",
            "img": "imgs/download.jpg",
            "title": "title 0111",
            "price": "250"
        },
        "card-2":{
            "id":"2",
            "img": "imgs/download.jpg",
            "title": "title 02",
            "price": "25/10"
        },
        "card-3":{
            "id":"3",
            "img": "imgs/download.jpg",
            "title": "title 03",
            "price": "25/10"
        },
        "card-4":{
            "id":"4",
            "img": "imgs/download.jpg",
            "title": "title 04",
            "price": "25/10"
        },
        "card-5":{
            "id":"5",
            "img": "imgs/download.jpg",
            "title": "title 05",
            "price": "25/10"
        },
        "card-6":{
            "id":"6",
            "img": "imgs/download.jpg",
            "title": "title 06",
            "price": "25/10"
        },
        "card-7":{
            "id":"7",
            "img": "imgs/download.jpg",
            "title": "title 07",
            "price": "25/10"
        }
    },
    {//page-2
        "card-1":{
            "id":"8",
            "img": "imgs/download.jpg",
            "title": "title 01",
            "price": "200"
        },
        "card-2":{
            "id":"9",
            "img": "imgs/download.jpg",
            "title": "title 0222",
            "price": "25/10"
        },
        "card-3":{
            "id":"10",
            "img": "imgs/download.jpg",
            "title": "title 03",
            "price": "25/10"
        },
        "card-4":{
            "id":"11",
            "img": "imgs/download.jpg",
            "title": "title 04",
            "price": "25/10"
        },
        "card-5":{
            "id":"12",
            "img": "imgs/download.jpg",
            "title": "title 05",
            "price": "25/10"
        },
        "card-6":{
            "id":"13",
            "img": "imgs/download.jpg",
            "title": "title 06",
            "price": "25/10"
        },
        "card-7":{
            "id":"14",
            "img": "imgs/download.jpg",
            "title": "title 07",
            "price": "25/10"
        }
    },
    {//page-3
        "card-1":{
            "id":"15",
            "img": "imgs/download.jpg",
            "title": "title 01",
            "price": "275"
        },
        "card-2":{
            "id":"16",
            "img": "imgs/download.jpg",
            "title": "title 02",
            "price": "25/10"
        },
        "card-3":{
            "id":"17",
            "img": "imgs/download.jpg",
            "title": "title 0333",
            "price": "25/10"
        },
        "card-4":{
            "id":"18",
            "img": "imgs/download.jpg",
            "title": "title 04",
            "price": "25/10"
        },
        "card-5":{
            "id":"19",
            "img": "imgs/download.jpg",
            "title": "title 05",
            "price": "25/10"
        },
        "card-6":{
            "id":"20",
            "img": "imgs/download.jpg",
            "title": "title 06",
            "price": "25/10"
        },
        "card-7":{
            "id":"21",
            "img": "imgs/download.jpg",
            "title": "title 07",
            "price": "25/10"
        }
    },
    {//page-4
        "card-1":{
            "id":"22",
            "img": "imgs/download.jpg",
            "title": "title 01",
            "price": "325"
        },
        "card-2":{
            "id":"23",
            "img": "imgs/download.jpg",
            "title": "title 02",
            "price": "25/10"
        },
        "card-3":{
            "id":"24",
            "img": "imgs/download.jpg",
            "title": "title 03",
            "price": "25/10"
        },
        "card-4":{
            "id":"25",
            "img": "imgs/download.jpg",
            "title": "title 0444",
            "price": "25/10"
        },
        "card-5":{
            "id":"26",
            "img": "imgs/download.jpg",
            "title": "title 05",
            "price": "25/10"
        },
        "card-6":{
            "id":"27",
            "img": "imgs/download.jpg",
            "title": "title 06",
            "price": "25/10"
        },
        "card-7":{
            "id":"28",
            "img": "imgs/download.jpg",
            "title": "title 07",
            "price": "25/10"
        }
    }
]
let pageNum = 0;
let main = document.querySelector(".main");
let pags = document.querySelector(".pags");
let clickedDiv = [];

// function addToBasket(clicked){
//     clicked.addEventListener("click",(e)=>{
//         console.log(e.target.parentElement)
//         // e.target.parentElement.style.backgroundColor = "red"
//         e.target.parentElement.classList.add("checked")
//         clickedDiv.push(e.target.parentElement.id)
//         console.log(clickedDiv)
//     })
// }

function createCards(card){
    let div = document.createElement("div");
    div.classList.add("card");
    div.id = information[pageNum][card].id;
    let img = document.createElement("img");
    let title = document.createElement("h1");
    title.classList.add("title")
    let price = document.createElement("p");
    price.classList.add("price")
    div.appendChild(img)
    div.appendChild(title);
    div.appendChild(price);
    let titleText = document.createTextNode(information[pageNum][card].title);
    let imgSrc = information[pageNum][card].img;
    img.src = imgSrc;
    let priceText = document.createTextNode(information[pageNum][card].price)
    price.appendChild(priceText);
    title.appendChild(titleText);
    main.appendChild(div)
    // addToBasket(div)
    // clickedDiv.forEach((e)=>{
    //     if (e == div.id) {
    //         e.style.backgroundColor = "red";
    //     }
    // })
}
let keys = Object.keys(information[pageNum]);
keys.forEach((e)=>{
    createCards(e)
})
let arr = [];
for(let i =0 ;i< information.length;i++){
    arr.push(i+1)
}
arr.forEach((e)=>{
    let span = document.createElement("span");
    let spanText = document.createTextNode(e);
    span.appendChild(spanText);
    pags.appendChild(span);
    changepage(span);
})
function changepage(span){
    span.onclick =()=>{
        console.log(span.innerHTML);
        pageNum = Number(span.innerHTML) - 1;
        main.innerHTML = "";
        console.log(pageNum)
        keys.forEach((e)=>{
        createCards(e)
    })
    }
}

