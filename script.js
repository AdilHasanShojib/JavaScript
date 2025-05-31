// let tag=document.querySelector("h1");
// //console.dir(tag);
// tag.innerText= tag.innerText+" Innovation Limited!";
// console.log(tag.innerText);


// let div=document.querySelectorAll(".box");
// div[0].innerText="Hi";
// div[1].innerText="NextGen";
// div[2].innerText="Innovation Limited!";
// console.log(div);

          //Append Child

// 
// const newElement = document.createElement("div");
// newElement.textContent = "Hello!";
// parent.appendChild(newElement);


       //Remove Child

// const parent = document.querySelector(".container");
// const child = document.querySelector("#par");
// parent.removeChild(child);


let newbtn=document.createElement("button");
newbtn.innerText="Click Me!"
newbtn.style.color="white";
newbtn.style.backgroundColor="red";
document.querySelector("body").prepend(newbtn);

