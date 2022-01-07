const form = document.querySelector("form");
const ul = document.querySelector("#container");
const input = document.querySelector("input");
const button = document.querySelector("button");

const items = JSON.parse(localStorage.getItem("tasks")) ? JSON.parse(localStorage.getItem("tasks")): [];
const data = JSON.parse(localStorage.getItem("tasks")) ? JSON.parse(localStorage.getItem("tasks")): [];











const creatli = (text) => {


  const li =  ` <div class="task" id="task">
  <span class="icon-star icon"></span>
  <p lang="ar" class="text">  ${text} </p>

  <div>
    <span class="icon-trash icon"></span>
    <span class="icon-angry2 icon"></span>
    
  </div>

  </div>`;
  ul.innerHTML += li;
  // const li = document.createElement("li");
  // li.textContent = text;
  // ul.appendChild(li);
};





data.map( (item) => {
  creatli(item)
})





form.addEventListener("submit", (e) => {
  e.preventDefault();

  items.push(input.value)
  localStorage.setItem('tasks' , JSON.stringify(items))
 
  //add to ul
  creatli(input.value);

  input.value = "";
});




        
const del = document.querySelector(".del")

del.addEventListener("click", function () {
  localStorage.clear();
  ul.innerHTML = ``;
});






container.addEventListener("click", (eo) => {
  if (eo.target.className == "icon-trash icon") {
    eo.target.parentElement.parentElement.remove();
 
  } 
  
  
  
  
  
  else if (eo.target.className == "icon-angry2 icon") {
    eo.target.classList.add("dn");
    const heart = `<span class="icon-heart"></span>`;


      eo.target.parentElement.parentElement
      .getElementsByClassName("text")[0]
      .classList.add("fin");

          eo.target.parentElement.innerHTML += heart;

 } else if (eo.target.className == "icon-heart" ) {
  eo.target.parentElement.parentElement
  .getElementsByClassName("text")[0]
  .classList.remove("fin");
 
  eo.target.classList.add("dn")

  const adda = ` <span class="icon-angry2 icon"></span>`


  eo.target.parentElement.innerHTML += adda
 
} else if (eo.target.className == "icon-star icon"){
 eo.target.classList.add("orange")


 container.prepend(eo.target.parentElement)

} else if (eo.target.className == "icon-star icon orange") {
  eo.target.classList.remove("orange")
}

});


////// ايموجي ////////












