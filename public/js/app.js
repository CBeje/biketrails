let easy = document.querySelectorAll(".easy");
let medium = document.querySelectorAll(".medium");
let hard = document.querySelectorAll(".hard");

// Trail difficulty selection

let difficulty = document.querySelectorAll(".difficulty-level-button");
difficulty.forEach(function (i) {
  i.addEventListener("click", function (e) {
    diff = e.target.textContent;
    if (diff === "Hard") {
      showTrails(hard);
      hideTrails(easy);
      hideTrails(medium);
    } else if (diff === "Medium") {
      showTrails(medium);
      hideTrails(hard);
      hideTrails(easy);
    } else if (diff === "Easy") {
      showTrails(easy);
      hideTrails(hard);
      hideTrails(medium);
    } else {
      showTrails(hard);
      showTrails(medium);
      showTrails(easy);
    }
  });
});

// Hide trails  - elem = trails excluded

function hideTrails(elem) {
  elem.forEach(function (i) {
    i.classList.remove("visible");
    i.classList.add("hidden");
  });
}

// Hide trails  - elem = trails shown

function showTrails(elem) {
  elem.forEach(function (i) {
    i.classList.remove("hidden");
    i.classList.add("visible");
  });
}
