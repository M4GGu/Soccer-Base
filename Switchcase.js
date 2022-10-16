var btn = document.getElementById("btn-send").addEventListener('click',fun);

function fun(){

    var idade = document.getElementById("age").value;
    var nick = document.getElementById("name");

    if (idade >= 5 && idade <=10){
        idade = "Kids";
    }else if (idade >=11 && idade <= 18){
        idade = "Junior";
    }else if(idade >= 19 && idade <= 25){
        idade ="Veteran";
    }else if(idade >=25 && idade <=45){
        idade = "Professional";
    }else{
        idade = "Legend";
    }
    console.log(idade);
document.getElementById("result").innerHTML = "Congratulations " + nick.value + " You have been set to the rank " + idade;

}

    


