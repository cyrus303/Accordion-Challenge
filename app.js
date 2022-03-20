let acc = document.getElementsByClassName("accordion");

let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    let text = getElementsByClassName("text");
    console.log(text);
    if (text.style.display === "block") {
      text.style.display = "none";
    } else {
      text.style.display = "block";
    }
  });
}
