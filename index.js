// Write your code here!
const main = document.querySelector("#main"); 
main.remove();
console.log(main);
const newHeader = document.createElement("h1"); 
//adding an Id to an exisiting element. 

// const newHeaderid = document.getElementsByTagName("h1"); 
// use inner.HTML 
newHeader.id= "victory" ; 

// Add text to h1 element (element.innerHTML or element.textContent = "Sherlyne is the champion")
newHeader.textContent = "Sherlyne is the champion"; 

console.log(newHeader);
