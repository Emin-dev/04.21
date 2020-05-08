let ul = document.querySelector("ul");
let cnBtn = document.querySelector("#cn");
function news(title, link) {
    this.title = title;
    this.link = link;
}
cnBtn.addEventListener("click", creatnews)

function creatnews(){
    let title = document.querySelector("#title").value
    let link = document.querySelector("#link").value
    let News = new news(title,link)
    addnews(News)
}


function addnews(News){
    let li = document.createElement('li');
    let box = document.createElement('div');
    let imgbox = document.createElement('div');
    let img = document.createElement('img');
    let title = document.createElement('div');
    let btnbox = document.createElement('div');

    box.classList.add('box');
    imgbox.classList.add('imgbox');
    img.src = News.link;
    title.classList.add('title');
    title.innerText=News.title;
    btnbox.classList.add('btnbox');
    btnbox.innerHTML="  <button>Like</button> <button>disLike</button>";

    imgbox.appendChild(img);
    box.appendChild(imgbox);
    box.appendChild(title);
    box.appendChild(btnbox);
    li.appendChild(box)
    ul.appendChild(li)
}
