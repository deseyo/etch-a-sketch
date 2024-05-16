// start grid
const oldContainer = document.querySelector("#old-container");

for (let i = 0; i < 256; i++) {
  if (i < 16) {
    if (i == 0) {
      createZeroSquare(oldContainer);
    } else {
      createTopSideSquare(oldContainer);
    }
  } else if (i % 16 == 0) {
    createLeftSideSquare(oldContainer);
  } else {
    createBasicSquare(oldContainer);
  }
}

// new grid
const btnSize = document.querySelector("#btn-size");
let newContainer;
let boxSize;

btnSize.addEventListener("click", () => {
  let canceled;
  while (true) {
    while (true) {
      boxSize = prompt("Enter box size: ");
      if (boxSize == null) {
        alert("Canceled");
        canceled = true;
        break;
      } else if (boxSize > 100) {
        alert("Limit is 100 squares per side");
        continue;
      } else if (isNaN(+boxSize)) {
        alert("Wrong input");
        continue;
      } else {
        canceled = false;
        break;
      }
    }

    if (canceled == true) break;

    try {
      if (canceled === false) newContainer.remove()
    }
    catch {
      if (canceled === false) oldContainer.remove();
    }

    let squaresNum = boxSize * boxSize;

    newContainer = document.createElement("div");
    newContainer.style.width = `${boxSize * 16}px`;
    newContainer.setAttribute("id", "new-container")
    document.body.appendChild(newContainer);

    for (let i = 0; i < squaresNum; i++) {
      if (i < boxSize) {
        if (i == 0) {
          createZeroSquare(newContainer);
        } else {
          createTopSideSquare(newContainer);
        }
      } else if (i % boxSize == 0) {
        createLeftSideSquare(newContainer);
      } else {
        createBasicSquare(newContainer);
      }
      }
    break;
    }
  }
)

// functions
function createBasicSquare(parent) {
  let square = document.createElement("div");
  square.style.width = "16px";
  square.style.height = "16px";
  square.style.borderRight = "1px solid black";
  square.style.borderBottom = "1px solid black";
  parent.appendChild(square);
  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = "red";
  });
}

function createLeftSideSquare(parent) {
  let square = document.createElement("div");
  square.style.width = "16px";
  square.style.height = "16px";
  square.style.borderLeft = "1px solid black"
  square.style.borderRight = "1px solid black";
  square.style.borderBottom = "1px solid black";
  parent.appendChild(square);
  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = "red";
  });
}

function createTopSideSquare(parent) {
  let square = document.createElement("div");
  square.style.width = "16px";
  square.style.height = "16px";
  square.style.borderTop = "1px solid black";
  square.style.borderRight = "1px solid black";
  square.style.borderBottom = "1px solid black";
  parent.appendChild(square);
  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = "red";
  });
}

function createZeroSquare(parent) {
  let square = document.createElement("div");
  square.style.width = "16px";
  square.style.height = "16px";
  square.style.borderTop = "1px solid black"
  square.style.borderLeft = "1px solid black"
  square.style.borderRight = "1px solid black";
  square.style.borderBottom = "1px solid black";
  parent.appendChild(square);
  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = "red";
  });
}