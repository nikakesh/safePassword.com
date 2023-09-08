const input = document.querySelector('input');

const bt = document.querySelector('button');

const scoreP = document.getElementById('scoreP');

const resultDiv = document.querySelector('.resultDiv');


resultDiv.style.display = 'none';
bt.style.display = '';

let score = 0;
let password, sameCharacters = 0;

let symbols= [
    '!', '@', '#', '$', ';', ':', '-', '_', '?', '|', '(', ')', '~', '{', '}', '[', ']', '='
]

//[] These are called მუნჯი ბრეკეტები

bt.addEventListener('click', () => {

    password = input.value;
    input.value = '';

    if(password.length < 8){
        scoreP.innerText = `WTF Bro! ვაი ბიძიააა :))`;
    }else{
        main();
        check();
        score = 0;
    }
})

function main(){

    for(let i = 0; i < password.length; i++){
        
        for(let k = 0; k < symbols.length; k++){
            if(password[i] == symbols[k]){
                score += 2;
            }
        }
        
        
        for(let j = 0; j <= 9; j++){
            if(password[i] == j.toString()){
                score += 1;
            }
        }

        if(password[i].toUpperCase() == password[i]){
            score += 1;
        }

    }

    for(let i = 1; i < password.length; i++){
        if(password[i] == password[i-1]){
            sameCharacters ++;
        }
    }
    
    if(sameCharacters == password.length-1){
        score = 0;
    }

    if(password.length > 8 &&sameCharacters != password.length-1){
        score += 1;
    }
    if(password.length > 14&&sameCharacters != password.length-1){
        score += 2;
    }
    if(password.length > 19  && sameCharacters != password.length-1){
        score += 3;
    }

    sameCharacters = 0;
}

function check(){
    if(score < 5 ){
        scoreP.innerText = `ვაი ბიძიააა`;
    } else if(score >= 5 && score < 11){
        scoreP.innerText = `Your password is mid`;
    } else if(score >= 11 && score < 20){
        scoreP.innerText = `Your password is nice`
    } else if(score >= 20 && score < 30){
        scoreP.innerText = `Your password is pretty strong`
    } else if(score >= 30){
        scoreP.innerText = `Your password is very strong`
    }

    resultDiv.style.display = '';
    resultDiv.style.animationName = 'slide';
    bt.style.display = 'none';
}