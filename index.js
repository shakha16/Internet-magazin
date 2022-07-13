let all3 = document.createElement('div')
let box1 = document.createElement('div')
let box2 = document.createElement('div')
let box3 = document.createElement('div')
let box4 = document.createElement('div')
let box5 = document.createElement('div')
let img = document.createElement('div')
let img2 = document.createElement('div')
let img3 = document.createElement('div')
let img4 = document.createElement('div')
let img5 = document.createElement('div')
let text = document.createElement('span')
let text2 = document.createElement('span')
let text3 = document.createElement('span')
let text4 = document.createElement('span')
let text10 = document.createElement('span')
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
let div2 = document.createElement('div')
let div3 = document.createElement('div')
let div4 = document.createElement('div')
let div5 = document.createElement('div')
let button22 = document.createElement('button')
let item = document.createElement('span')
let button23 = document.createElement('button')
let item2 = document.createElement('span')
let button24 = document.createElement('button')
let item3 = document.createElement('span')
let button25 = document.createElement('button')
let item4 = document.createElement('span')
let button26 = document.createElement('button')
let item5 = document.createElement('span')



all3.classList.add('all3')
box1.classList.add('box1')
box2.classList.add('box2')
box3.classList.add('box3')
box4.classList.add('box4')
box5.classList.add('box5')
img.classList.add('imggg')
img2.classList.add('imggg')
img3.classList.add('imggg')
img4.classList.add('imggg')
img5.classList.add('imggg')
text.innerHTML = 'Смартфоны'
text2.innerHTML = 'Смартфоны'
text3.innerHTML = 'Смартфоны'
text4.innerHTML = 'Смартфоны'
text10.innerHTML = 'Smart Watches'
buy1.innerHTML = '2 464 000 сум'
buy2.innerHTML = '3 178 000 сум'
buy3.innerHTML = '2 509 000 сум'
buy4.innerHTML = '346 000 сум'
buy5.innerHTML = '4 170 000'
text.style.color = "black"
text2.style.color = "black"
text3.style.color = "black"
text4.style.color = "black"
text10.style.color = "black"
buy1.style.color = "black"
buy2.style.color = "black"
buy3.style.color = "black"
buy4.style.color = "black"
buy5.style.color = "black"
button.classList.add('button')
button2.classList.add('button')
button3.classList.add('button')
button4.classList.add('button')
button5.classList.add('button')
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
button.style.color = "black"
button2.style.color = "black"
button3.style.color = "black"
button4.style.color = "black"
button5.style.color = "black"
span.style.color = "black"
span2.style.color = "black"
span3.style.color = "black"
span4.style.color = "black"
span5.style.color = "black"
div.classList.add('div')
button22.classList.add('button22')
button22.innerHTML = 'Купить'
button23.classList.add('button22')
button23.innerHTML = 'Купить'
button24.classList.add('button22')
button24.innerHTML = 'Купить'
button25.classList.add('button22')
button25.innerHTML = 'Купить'
button26.classList.add('button22')
button26.innerHTML = 'Купить'

item.innerHTML = '|||'
item2.innerHTML = '|||'
item3.innerHTML = '|||'
item4.innerHTML = '|||'
item5.innerHTML = '|||'
console.log(all3);


document.body.append(all3)
all3.append(box1, box2, box3, box4, box5)

box1.append(img, text, buy1, button, span, div)
box2.append(img2, text2, buy2, button2, span2, div2)
box3.append(img3, text3, buy3, button3, span3, div3)
box4.append(img4, text10, buy4, button4, span4, div4)
box5.append(img5, text4, buy5, button5, span5, div5)

div.append(button22, item)
div2.append(button23, item2)
div3.append(button24, item3)
div4.append(button25, item4)
div5.append(button26, item5)