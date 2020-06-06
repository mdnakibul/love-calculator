
function clac(){
    var you = String(document.getElementById('you').value);
    var partner = String(document.getElementById('partner').value);
    var btn = document.getElementById('press');
    var resultSpace = document.querySelector('.result')
    var result = Math.random()*100;

    finalResult = Math.floor(result);

    if(you.length == 0 || partner.length == 0){
      resultSpace.textContent = "Please Enter The Values"
    // } else if(partner.length == 0){
    //   resultSpace.textContent = "Please Enter The Values"
    }
    else {
      resultSpace.textContent = finalResult + '%';
    }
    
    console.log('I am running');
    console.log(you.length);
    console.log(partner.length);
}