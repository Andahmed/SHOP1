let nav = document.getElementById("navber");
let bar = document.getElementById("bar");
let close = document.getElementById("close");

console.log(bar);
console.log(nav);

if (bar) {
  bar.addEventListener("click", () => {
    
    nav.classList.add("active1");
    console.log('hello world')
    
  })
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active1");
    console.log("hello world");
  });
}
