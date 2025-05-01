/* Event capturing is also called as event trickling is the opposite phase of 
   event bubbling instead of moving event from thr target up to the root 
   event capturing moves from root down to the target element */

document.getElementById("parent").addEventListener(
  "click",
  (event) => {
    console.log("parent");
  },
  true
);

document.getElementById("child").addEventListener("click", (event) => {
  console.log("child 1");
  //event.stopPropagation()
  event.stopImmediatePropagation();
});

document.getElementById("child").addEventListener("click", () => {
  console.log("child 2");
});
