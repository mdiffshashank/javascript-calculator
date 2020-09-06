var result = null;
var operation = null;
var isSwitchOn = true;

// //addition
// const addition = (a, b) => {
//   document.querySelector(".screen").textContent = a + b;
// };

// //substract
// const substract = (a, b) => {
//   document.querySelector(".screen").textContent = a - b;
// };

// //multiply
// const multiply = (a, b) => {
//   document.querySelector(".screen").textContent = a * b;
// };

// //devide
// const devide = (a, b) => {
//   document.querySelector(".screen").textContent = a / b;
// };

//clearScreen
const clearScreen = () => {
  //console.log(document.querySelector(".userInput").textContent);
  document.querySelector(".userInput").textContent = "";
  document.querySelector(".result").textContent = "";
  result = null;
  operation = null;
};

//keypress
const keyPress = (value) => {
  document.querySelector(".screen").textContent = value;
};

getSwitch = (el_Type,value) => {
  switch (el_Type) {
    case "number":
      if (isSwitchOn) {
        document.querySelector(".userInput").textContent += value;

        result == null
          ? (result = value)
          : operation == null
          ? (result += value)
          : (result = document.querySelector(".userInput").textContent);
        console.log(result);
      }

      break;
    case "ops":
      if (isSwitchOn) {
        document.querySelector(".userInput").textContent += value;
        operation = value;
      }
      break;
    case "equal":
      //clear content
      if (isSwitchOn) {
        document.querySelector(".result").textContent =
          eval(result).toFixed(2) || "";
         
      }
      break;
    case "clear":
      if (isSwitchOn) {
        clearScreen();
      }
      break;
    case "switch":
      isSwitchOn = !isSwitchOn;
      if (isSwitchOn) {
        document.querySelector(".switch").style.backgroundColor = "orange";
      } else {
        clearScreen();
        document.querySelector(".switch").style.backgroundColor = "teal";
      }
      break;
    case "mod":
      break;
    case "del":
      break;
    default:
      null;
  }
};

document.querySelectorAll(".key").forEach((key, i, a) => {
  key.addEventListener("click", (event) => {
    const el_Type = event.target.classList.contains("number")
      ? "number"
      : event.target.classList.contains("ops")
      ? "ops"
      : event.target.classList.contains("equal")
      ? "equal"
      : event.target.classList.contains("clear")
      ? "clear"
      : event.target.classList.contains("switch")
      ? "switch"
      : event.target.classList.contains("mod")
      ? "mod"
      : event.target.classList.contains("del")
      ? "del"
      : null;

    const value = event.target.textContent;
    getSwitch(el_Type,value);
    //event.target.textContent -> value
    //console.dir(event);
  });
});

document.addEventListener("keydown", (e) => {
  console.log(e);
  const key = e.key;
  const el_Type =  key >0 && key < 9 ? "number" : (key == '+' || key == '-' || key == '*' || key == '/') ? 'ops' : key.toLowerCase() == 'enter' ? 'equal':'';
  getSwitch(el_Type,key);
});
