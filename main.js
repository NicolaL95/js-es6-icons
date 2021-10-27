icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

let option = document.querySelector(".filter")
option = document.addEventListener("click",function(){
	let selOp = document.querySelector(".expand_filter");
	let rem = document.querySelector(".filter")
	selOp.classList.remove("inactive")
});
const cont = document.querySelector(".container")
function createRow(icons){
	/* Aggiunta elemento row nel container */
	cont.innerHTML = ""
	let row;
	let cards;
	let selRow;
	icons.forEach((element,index) => {
	 if(index % 5 == 0){
		row = `<div class="row row_${index / 5}"></div>`   
		cont.innerHTML += row;
		 selRow = document.querySelector(`.row_${index / 5}`)
	}
	/* aggiunta cards all'elemento row */
	if(icons[index].type == "animal"){ 
		cards = `<div class="cards">
		<i class="${icons[index].family} ${icons[index].prefix}${icons[index].name} blue_icon"></i>
		<p class="icon_text">${icons[index].name}</p>
		</div>`
	}
	
	else if(icons[index].type == "vegetable"){ 
		cards = `<div class="cards">
		<i class="${icons[index].family} ${icons[index].prefix}${icons[index].name} gold_icon"></i>
		<p class="icon_text">${icons[index].name}</p>
		</div>`
	}
	else{
		cards = `<div class="cards">
	<i class="${icons[index].family} ${icons[index].prefix}${icons[index].name} purple_icon"></i>
	<p class="icon_text">${icons[index].name}</p>
	</div>`
	}
	
	selRow.innerHTML += cards;
	});
}

createRow(icons)


for (let index = 0; index < 4; index++) {
	let btt = document.getElementById(`b_${index + 1}`)
	btt.addEventListener("click",function(){
	if(this.innerHTML == "All"){
		createRow(icons)
	}
	else if(this.innerHTML == "animal"){
		let filtIcons = [];
		icons.forEach((element,index) => {
		if(icons[index].type == "animal"){
			filtIcons.push(icons[index])
		}
		});
		createRow(filtIcons)
	}
	else if(this.innerHTML == "vegetable"){
		let filtIcons = [];
		icons.forEach((element,index) => {
		if(icons[index].type == "vegetable"){
			filtIcons.push(icons[index])
		}
		});
		createRow(filtIcons)
	}
	else if(this.innerHTML == "user"){
		let filtIcons = [];
		icons.forEach((element,index) => {
		if(icons[index].type == "user"){
			filtIcons.push(icons[index])
		}
		});
		createRow(filtIcons)
	}
});	
}
