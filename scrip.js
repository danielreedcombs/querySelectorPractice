 header = document.querySelector(".article__header");
header.textContent= "Welcome to the Daniel Blog" ;

pageHeader= document.querySelectorAll(".article__header");
for (var i=0; i< pageHeader.length; i++){
pageHeader[i].classList.add("important")
}

var dashDelete= document.querySelector(".dashed");

dashDelete.classList.remove('dashed')

var footer= document.querySelector(".article__footer")
footer.classList.add("goldenrod")