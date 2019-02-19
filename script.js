const imageAddress = "totoro.jpg";
let natWidth;
let natHeight;

console.log(natWidth);
document.addEventListener("DOMContentLoaded", loadTheImage);

function loadTheImage() {
  document.querySelector("img").src = imageAddress;
  document.querySelector("img").onload = prepareContainer;
  console.log(document.querySelector("img").naturalWidth);
  console.log(document.querySelector("img").naturalHeight);
}

function prepareContainer() {
  natWidth = document.querySelector("img").naturalWidth;
  natHeight = document.querySelector("img").naturalHeight;

  const numOfXPieces = 4;
  const numOfYPieces = 4;
  const container_width = natWidth;
  const container_height = natHeight;

  document.querySelector(
    "#container"
  ).style.gridTemplateColumns = `repeat(${numOfXPieces}, 1fr)`;
  document.querySelector("#container").style.width = `${container_width}px`;
  for (let y = 0; y < numOfYPieces; y++) {
    for (let x = 0; x < numOfXPieces; x++) {
      let piece = document.createElement("div");

      piece.style.height = container_height / numOfYPieces + "px";
      piece.style.width = container_width / numOfYPieces + "px";

      // piece.textContent = `${x}${y}`;
      // piece.classList.add("piece");
      piece.classList.add("dropzone");
      document.querySelector("#container").appendChild(piece);
    }
  }
  for (let y = 0; y < numOfYPieces; y++) {
    for (let x = 0; x < numOfXPieces; x++) {
      let piece = document.createElement("div");

      piece.style.height = container_height / numOfYPieces + "px";

      piece.textContent = `${x}${y}`;
      // piece.classList.add("piece");
      piece.classList.add("piece");

      piece.style.height = container_height / numOfYPieces + "px";
      piece.style.width = container_width / numOfYPieces + "px";
      // piece.style.marginLeft = randNumb + "px";

      document.querySelector(".table").appendChild(piece);
    }
  }
  console.log(arr.length);
  puzzlePosition(arr);
}

let arr = document.querySelector(".table").childNodes;
let randNumb = Math.random() * 400;
function puzzlePosition(puzzles) {
  console.log(puzzles.length);
  for (let i = 0; i < puzzles.length; i++) {
    puzzles[i].style.left = randNumb + "px";
    // puzzles[i].style.marginTop = randNumb + "px";
    randNumb = Math.random() * 400;
    console.log(puzzles[1]);
  }
  for (let i = 0; i < puzzles.length; i++) {
    puzzles[i].style.left = randNumb + "px";
    // puzzles[i].style.marginTop = randNumb + "px";
    randNumb = Math.random() * 400;
    console.log(puzzles[i].textContent[0]);
    if (puzzles[i].textContent[0] == 1) {
      puzzles[i].style.backgroundPositionX = -(natWidth / 4) + "px";
    }
    if (puzzles[i].textContent[0] == 2) {
      puzzles[i].style.backgroundPositionX = -((natWidth / 4) * 2) + "px";
    }
    if (puzzles[i].textContent[0] == 3) {
      puzzles[i].style.backgroundPositionX = -((natWidth / 4) * 3) + "px";
    }
    if (puzzles[i].textContent[0] == 4) {
      puzzles[i].style.backgroundPositionX = -((natWidth / 4) * 4) + "px";
    }
    if (puzzles[i].textContent[1] == 1) {
      puzzles[i].style.backgroundPositionY = -(natHeight / 4) + "px";
    }
    if (puzzles[i].textContent[1] == 2) {
      puzzles[i].style.backgroundPositionY = -((natHeight / 4) * 2) + "px";
    }
    if (puzzles[i].textContent[1] == 3) {
      puzzles[i].style.backgroundPositionY = -((natHeight / 4) * 3) + "px";
    }
    if (puzzles[i].textContent[1] == 4) {
      puzzles[i].style.backgroundPositionY = -((natHeight / 4) * 4) + "px";
    }

    // console.log(puzzles[1]);
  }
  // for (let i = 0; i < puzzles.length; i += 2) {
  //   // puzzles[i].style.backgroundPositionX = -(natWidth / 4) + "px";
  //   puzzles[i].style.backgroundPositionY = -(natHeight / 4) + "px";
  //   console.log(puzzles[i].style.backgroundPositionY);
  // }
  // for (let i = 0; i < puzzles.length; i += 3) {
  //   // puzzles[i].style.backgroundPositionX = -((natWidth / 4) * 2) + "px";
  //   puzzles[i].style.backgroundPositionY = -((natHeight / 4) * 2) + "px";
  // }
  // for (let i = 0; i < puzzles.length; i += 4) {
  //   // puzzles[i].style.backgroundPositionX = -((natWidth / 4) * 3) + "px";
  //   puzzles[i].style.backgroundPositionY = -((natHeight / 4) * 3) + "px";
  // }
  // for (let i = 0; i < puzzles.length; i += 5) {
  //   // puzzles[i].style.backgroundPositionX = -((natWidth / 4) * 4) + "px";
  //   puzzles[i].style.backgroundPositionY = -((natHeight / 4) * 4) + "px";
  // }
  for (let i = 0; i < puzzles.length; i++) {}
}

let dragged;

/* events fired on the draggable target */
document.addEventListener("drag", function(event) {});

document.addEventListener("dragstart", function(event) {
  // store a ref. on the dragged elem
  dragged = event.target;
  // make it half transparent
  event.target.style.opacity = 0.5;
});

document.addEventListener("dragend", function(event) {
  // reset the transparency
  event.target.style.opacity = "";
});

/* events fired on the drop targets */
document.addEventListener("dragover", function(event) {
  // prevent default to allow drop
  event.preventDefault();
});

document.addEventListener("drop", function(event) {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  console.log("DROP", event.target.className);
  // move dragged elem to the selected drop target
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
    dragged.parentNode.removeChild(dragged);
    event.target.appendChild(dragged);
    dragged.style.left = event.target.style.left;
    dragged.style.top = event.target.style.top;
  } else if (event.target.className == "theBody") {
    // park the dragged elem somewhere on the body
    dragged.style.left = event.pageX + "px";
    dragged.style.top = event.pageY + "px";
  }
});
