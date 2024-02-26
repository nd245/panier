//declaration//
var plusBtns= Array.from(document.querySelectorAll(".fa-plus-circle"));
var minusBtns=Array.from(document.querySelectorAll(".fa-minus-circle"));
var deleteBtns=Array.from(document.querySelectorAll(".fa-trash-alt"));
var cards=Array.from(document.querySelectorAll(".card"));
var favs = Array.from(document.querySelectorAll(".fa-heart"));

//add bottons//
for (let plus of plusBtns) {
    plus.addEventListener("click",function(){
        plus.nextElementSibling.innerHTML++;
        Total()
       
    })}

for (let minus of minusBtns) {
    minus.addEventListener("click",function(){
        minus.previousElementSibling.innerHTML>0 
        ? minus.previousElementSibling.innerHTML-- 
        :null;
        Total();
      
    
    })
}
//Add delete//

for (let i in deleteBtns) {
    deleteBtns[i].addEventListener("click",function(){
     cards[i].remove();
     Total();
   ;
    });
}

// //Total price//

 function Total(){
 let qte=Array.from(document.querySelectorAll(".qute"));
 let price=Array.from(document.querySelectorAll(".unitt-price"));
 let s=0
for (let i=0 ; i<price.length;i++) {
    s= s+ price[i].innerHTML* qte[i].innerHTML;
}
document.getElementById("total-price").innerHTML=s;
 }

 //add heart//
//  function changeIconColor() {
//     heartIcon[i].style.color = "red";
//   }
  
//   heartIcon[i].addEventListener("click", function() {
//     heartIcon[i].style.color = "black";()
//     changeIconColor();
//   });
  
//   if (heartIcon[i].style.color === "black") {
//     changeIconColor();
//   }
// Favourites
for (let fav of favs)
    fav.addEventListener("click", function () {
        if (fav.style.color == "black") {
            fav.style.color = "red";
        } else {
            fav.style.color = "black";
        }
    });



