let modeBtn = document.querySelector("#btn1");
let body = document.querySelector("body");
let currMode = "dark";

modeBtn.addEventListener("click", () => {
    if (currMode === "dark") {
        currMode = "light";
        body.classList.remove("dark");
        body.classList.add("light");
    } else {
        currMode = "dark";
        body.classList.remove("light");
        body.classList.add("dark");
    }
    console.log(currMode);
});
