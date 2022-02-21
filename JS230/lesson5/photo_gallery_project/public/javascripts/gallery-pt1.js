document.addEventListener("DOMContentLoaded", event => {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "photos");
  xhr.responseType = 'json';
  xhr.send();
  xhr.addEventListener("load", event => {
    let photosJson = xhr.response;

    // Render Photo Info for photo 1
    let firstPhotoInfo = photosJson[0];
    let sectionHeader = document.querySelector("section > header");
    let photo_information = document.getElementById("photo_information");
    let photoInfoTemplate = Handlebars.compile(photo_information.innerHTML);
    sectionHeader.innerHTML = photoInfoTemplate(firstPhotoInfo);  

    // Render Photos
    let slidesSection = document.getElementById("slides");
    let photos = document.getElementById("photos");
    let photoTemplate = Handlebars.compile(photos.innerHTML);
    photos.innerHTML = photoTemplate({photos: photosJson})
    
    // Render Photos Comments
    let xhr2 = new XMLHttpRequest();
    xhr2.open("GET", `/comments?photo_id=${firstPhotoInfo.id}`);
    xhr2.responseType = 'json';
    xhr2.send();
    xhr2.addEventListener("load", event => {
      let photoData = xhr2.response;

      let photoComment = document.getElementById("photo_comment");
      let commentsUl = document.querySelector("#comments ul");
      let photo_comment = Handlebars.compile(photoComment.innerHTML);
      Handlebars.registerPartial("photo_comment", document.getElementById("photo_comment").innerHTML);

      commentsUl.insertAdjacentHTML('beforeend', photo_comment({comments: photoData}));
    });
  });
})