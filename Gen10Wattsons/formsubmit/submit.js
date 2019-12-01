alert("This site uses javascript");

const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    alert("Form has been submitted");
});