
document.querySelector("#darkModebtn").addEventListener("click", event => {

  //On click, change background from black to white
  const backgroundVar = document.documentElement.style.getPropertyValue("background-color");
  document.documentElement.style.setProperty(
    "background-color",
    backgroundVar === "white" ? null : "white"
  );

  //On click, invert images and text
  const imagewebkitVar = document.documentElement.style.getPropertyValue("-webkit-filter");
  document.documentElement.style.setProperty(
    "-webkit-filter",
    imagewebkitVar === "invert(1)" ? null : "invert(1)"
  );

  //On click, invert images and text
  const buttonVar = document.documentElement.style.getPropertyValue("position");
  document.documentElement.style.setProperty(
    "position",
    buttonVar === "absolute" ? null : "absolute"
  );
});