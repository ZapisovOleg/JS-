function func(){
    let userQuestion = document.getElementById('userQuestion').value;
    let answer = document.getElementById('answer').value;
    if(userQuestion == answer){
        alert('Добро пожаловать на сайт')
    }
    else if(userQuestion !== answer){
        alert('error');
    }
}