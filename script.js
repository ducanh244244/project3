function upDate(previewPic) {
  console.log("Mouse over triggered!");
  console.log("Source:", previewPic.src);
  console.log("Alt text:", previewPic.alt);

  let imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
  imageDiv.innerHTML = previewPic.alt;
}

function undo() {
  console.log("Mouse out triggered!");
  
  let imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('')";
  imageDiv.innerHTML = "Hover over an image below to display here.";
}
