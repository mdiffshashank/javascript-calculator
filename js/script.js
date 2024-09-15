(function () {
  let result = null;
  let operation = null;
  let isSwitchOn = true;

  document.querySelectorAll(".key").forEach((key) => {
    key.addEventListener("click", (event) => {
      const el_Type = (function () {
        switch (true) {
          case event.target.classList.contains("number"):
            return "number";
          case event.target.classList.contains("ops"):
            return "ops";
          case event.target.classList.contains("equal"):
            return "equal";
          case event.target.classList.contains("clear"):
            return "clear";
          case event.target.classList.contains("switch"):
            return "switch";
          case event.target.classList.contains("mod"):
            return "mod";
          case event.target.classList.contains("del"):
            return "del";
          default:
            throw "Please press a valid key";
        }
      })(event);

      const value = event.target.textContent;
      getSwitch(el_Type, value);
      //event.target.textContent -> value
      //console.dir(event);
    });
  });

  //start from this listener
  document.addEventListener("keydown", (e) => {
    const key = e.key;
    getSwitch(getElementType(key), key);
  });

  function getElementType(key) {
    switch (true) {
      case key > 0 && key < 9:
        return "number";
      case key == "+" || key == "-" || key == "*" || key == "/":
        return "ops";
      case key.toLowerCase() == "enter":
        return "equal";
      default:
        throw "Please enter correct key";
    }
  }

  function getSwitch(el_Type, value) {
    if (isSwitchOn) {
      switch (el_Type) {
        case "number":
          document.querySelector(".userInput").textContent += value; //string concatination

          result == null
            ? (result = value)
            : operation == null
            ? (result += value)
            : (result = document.querySelector(".userInput").textContent);
          break;

        case "ops":
          document.querySelector(".userInput").textContent += value;
          operation = value;
          break;

        case "equal":
          //clear content
          document.querySelector(".result").textContent =
            eval(result).toFixed(2) || "";
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

        case "clear":
          clearScreen();
          break;

        case "mod":
          break;

        case "del":
          break;

        default:
          null;
      }
    } else if (!isSwitchOn && el_Type === "switch") {
      isSwitchOn = !isSwitchOn;
      if (isSwitchOn) {
        document.querySelector(".switch").style.backgroundColor = "orange";
      } else {
        clearScreen();
        document.querySelector(".switch").style.backgroundColor = "teal";
      }
    }
  }

  //clearScreen
  function clearScreen() {
    //console.log(document.querySelector(".userInput").textContent);
    document.querySelector(".userInput").textContent = "";
    document.querySelector(".result").textContent = "";
    result = null;
    operation = null;
  }
})();
