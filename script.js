// the cards 1 to 16 are rare cards... and in 11 cards, 1 will be the rare card, the last one...
// on loading the window - window.onload function
window.onload=function(){
    var pack=document.getElementById("pockemon-pack");
    pack.addEventListener("click", openPack);
}
function randomNumber(min,max){
    return Math.ceil(Math.random()*(max-min)+min);
}
function openPack(){
    // there are 11 cards for each player
    let cardsopened=document.getElementById("pokemon-cards-opened");
    while(cardsopened.firstChild){
        cardsopened.firstChild.remove();
    }
    for(let i=0;i<11;i++){
        // <div class="pockemon-card"></div> tag is created
        // <img id="0" src="pokemon-cards/base set (10).jpg"
        // in simple terms
        // created a div element
        let cardDiv=document.createElement("div");
        cardDiv.classList.add("pockemon-card");
        // created an image element
        let cardImg=document.createElement("img");
        cardImg.id=i;

        let num=1;
        if(i==10){
            // last card
            num=randomNumber(1,16);
        }
        else{
            num=randomNumber(17,102);
        }
        // gave src to each card
        cardImg.src="base set (" +num.toString()+ ").jpg";
        // appended the img into the div
        cardDiv.appendChild(cardImg);
        // appended the div inside the main div
        document.getElementById("pokemon-cards-opened").appendChild(cardDiv);
    }
}
