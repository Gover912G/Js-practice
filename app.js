const text = document.querySelector(".title");
const changeColor = document.querySelector('.changeColor');
// const userList = document.querySelectorAll('.name-list li');
const userList = document.querySelector('.name-list');
const listInput = document.querySelector('.list-input');
const addListtBtn = document.querySelector('.addListBtn');


// for(user of userList){
//     user.addEventListener("click",function(){
//         this.style.color = "red";
//     });
// }

changeColor.addEventListener('click',()=>{
text.classList.toggle("change");
});

addListtBtn.addEventListener('click',()=>{
       //create an li out ofg thin air
       const newLi = document.createElement('Li');
       const liContent = document.createTextNode(listInput.value);
       //add the value inside th li

       newLi.appendChild(liContent);
       //attaching the li to the user list
       userList.appendChild(newLi)
});

