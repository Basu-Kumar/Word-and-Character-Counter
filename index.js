let textbox = document.getElementById("textbox");

textbox.addEventListener("input", function () {
  let text = this.value;
  document.getElementById("char").innerHTML = text.length;

  text = text.trim(); // removes extra space from starting and end
  let words = text.split(" "); //splits text after each " " and puts in an array

  let cleanList = words.filter((elm) => elm != "");
  document.getElementById("word").innerHTML = cleanList.length;
});
