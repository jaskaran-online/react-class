document.title = "DOM class";
console.dir(document)

const heading2 = document.getElementById("testH2");
console.log(heading2)

heading2.style.color = "red"

const heading1 = document.getElementsByClassName("testH1");

console.log(heading1)

heading1[0].style.color = "blue"

heading1[2].style.color = "orange"

heading1[1].style.color = "green"