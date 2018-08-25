console.log("connected");
var p1score=document.getElementById("p1score");
var p2score=document.getElementById("p2score");
var result=document.querySelector("#result");
var p1=0,p2=0;
var winningScore=5;
var gameOver=false;
var but1=document.getElementById("p1");
var but2=document.getElementById("p2");
var reset=document.getElementById("reset");
but1.addEventListener("click",function(){
	p1++;
	if(!gameOver){
		if(p1===winningScore)
		{	
			p1score.classList.add("winner");
			p1score.textContent=p1;
			gameOver=true;
			result.textContent="Player 1 Wins";
		}
		p1score.textContent=p1;
	}
	
})
but2.addEventListener("click",function(){
	p2++;
	if(!gameOver){
		if(p2===winningScore)
		{
			p2score.classList.add("winner");
			p2score.textContent=p2;
			gameOver=true;
			result.textContent="Player 2 wins";
		}
		p2score.textContent=p2;
	}
})

reset.addEventListener("click",function(){
	p1=p2=0;
	gameOver=false;
	p1score.textContent=p1;
	p2score.textContent=p2;
	p2score.classList.remove("winner");
	p1score.classList.remove("winner");
	result.textContent="Winning at 5 points";
})


// var buttons=document.querySelector("h1");
// buttons.addEventListener("mouseover",funtion(){
// 	this.classList.add("selected");
// })
but1.addEventListener("mouseover",function(){
	this.classList.add("selected");
})
but1.addEventListener("mouseout",function(){
	this.classList.remove("selected");
})
but2.addEventListener("mouseover",function(){
	this.classList.add("selected");
})
but2.addEventListener("mouseout",function(){
	this.classList.remove("selected");
})
reset.addEventListener("mouseover",function(){
	this.classList.add("selected_reset");
})
reset.addEventListener("mouseout",function(){
	this.classList.remove("selected_reset");
})

