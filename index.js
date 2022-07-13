let all3 = document.createElement('div')
let box1 = document.createElement('div')
let box2 = document.createElement('div')
let box3 = document.createElement('div')
let box4 = document.createElement('div')
let box5 = document.createElement('div')
let img = document.createElement('img')
let img2 = document.createElement('img')
let img3 = document.createElement('img')
let img4 = document.createElement('img')
let img5 = document.createElement('img')
let text = document.createElement('span')
let text2 = document.createElement('span')
let buy1 = document.createElement('span')
let buy2 = document.createElement('span')
let buy3 = document.createElement('span')
let buy4 = document.createElement('span')
let buy5 = document.createElement('span')
let button = document.createElement('button')
let button2 = document.createElement('button')
let button3 = document.createElement('button')
let button4 = document.createElement('button')
let button5 = document.createElement('button')
let span = document.createElement('span')
let span2 = document.createElement('span')
let span3 = document.createElement('span')
let span4 = document.createElement('span')
let span5 = document.createElement('span')
let div = document.createElement('div')
let button22 = document.createElement('button')
let item = document.createElement('span')


all3.classList.add('all3')
box1.classList.add('box1')
box2.classList.add('box2')
box3.classList.add('box3')
box4.classList.add('box4')
box5.classList.add('box5')
img.src = "./images/tel1.jpeg"
img2.src = "./images/tel2.jpeg"
img3.src = "./images/tel3.jpeg"
img4.src = "./images/tel4.jpeg"
img5.src = "./images/tel5.jpeg"
text.innerHTML = 'Смартфоны'
text2.innerHTML = 'Smart Watches'
buy1.innerHTML = '2 464 000 сум'
buy2.innerHTML = '3 178 000 сум'
buy3.innerHTML = '2 509 000 сум'
buy4.innerHTML = '346 000 сум'
buy5.innerHTML = '4 170 000'
button.classList.add('button')
button2.classList.add('button2')
button3.classList.add('button3')
button4.classList.add('button4')
button5.classList.add('button5')
button.innerHTML = 'от 255 000 сум/месяц'
button2.innerHTML = 'от 329 000 сум/месяц'
button3.innerHTML = 'от 260 000 сум/месяц'
button4.innerHTML = 'от 45 000 сум/месяц'
button5.innerHTML = 'от 432 000 сум/месяц'
span.innerHTML = 'Xiaomi Redmi Note 11 6 GB 128 GB'
span2.innerHTML = 'Xiaomi Redmi Note 11 Pro 128 GB'
span3.innerHTML = 'Xiaomi Redmi 10 2022 6/128 gb Blue'
span4.innerHTML = 'Умные часы DTF NFC Чёрный'
span5.innerHTML = 'Samsung Galaxy A53 5G'
div.classList.add('div')
button22.classList.add('button22')
button22.innerHTML = 'Купить'
item.innerHTML = '|||'
console.log(all3);


document.body.append(all3)
all3.append(box1, box2, box3, box4, box5)

box1.append(img, text, buy1, button, span, div)
box2.append(img2, text, buy2, button2, span2, div)
box3.append(img3, text, buy3, button3, span3, div)
box4.append(img4, text2, buy4, button4, span4, div)
box5.append(img5, text, buy5, button5, span5, div)

div.append(button22, item)