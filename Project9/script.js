let checkBox = document.qureySelector('#toggle');
let Monthly = document.qureySelectorAll('price-monthly');
let Yearly = document.qureySelectorAll('price-annually');

checkBox.assEventListener('change', function(){
   
   
    if(checkBox.checked){
        Yearly.forEach(price => price. style.display="none");
        Monthly.forEach(price => price. style.display="flex");
    }
    else {
        Yearly.forEach(price => price. style.display="flex");
        Monthly.forEach(price => price. style.display="none");
    }

});
