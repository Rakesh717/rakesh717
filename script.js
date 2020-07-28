// ----------------------------------------Declarations------------------------------------------------

const theme = localStorage.getItem("theme") || "blue";
const themeDots = document.querySelectorAll(".theme-dot");
const modeThemeMap = {
  light: "default.css",
  blue: "blue.css",
  green: "green.css",
  purple: "purple.css",
};

// ----------------------------------------Functions------------------------------------------------

function setTheme(mode) {
  document.getElementById("theme-style").href = modeThemeMap[mode];

  localStorage.setItem("theme", mode);
}

// ----------------------------------------Actions------------------------------------------------

themeDots.forEach((themeDot) => {
  themeDot.addEventListener("click", function () {
    setTheme(this.dataset.mode);
  });
});

setTheme(theme);
