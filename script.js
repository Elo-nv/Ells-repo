const screen = document.getElementById("screen-container");
const equalKey = document.getElementById("equal-container");
let firstStr = "";
let secondStr = "";
let func = "";
let isFirstStr = true;

const updateStr = (e) => {
    if (e.innerText === "x" || e.innerText === "+" || e.innerText === "-" || e.innerText === "/") {
        isFirstStr = false;
        func = e.innerText;
        screen.innerText += e.innerText;
        return;
    }
    if (isFirstStr) {
        firstStr += e.innerText;
        screen.innerText += e.innerText;
        return;
    }
    secondStr += e.innerText;
    screen.innerText += e.innerText;
}

const solveStr = () => {
    const firstNum = Number(firstStr);
    const secondNum = Number(secondStr);
    const solution = func === "x" ? firstNum * secondNum : func === "+" ? firstNum + secondNum : func === "-" ? firstNum - secondNum : firstNum / secondNum;
    screen.innerText = solution;
    firstStr = String(solution);
    secondStr = "";
}

const clearStr = () => {
    screen.innerText = "";
    func = "";
    firstStr = "";
    secondStr = "";
    isFirstStr = true;
}

equalKey.addEventListener("click", solveStr);