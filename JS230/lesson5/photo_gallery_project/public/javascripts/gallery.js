document.addEventListener("DOMContentLoaded", event => {
  let templates = {};
  let photos;

  document.querySelectorAll("script[type='text/x-handlebars']").forEach(tmpl => {
    templates[tmpl["id"]] = Handlebars.compile(tmpl["innerHTML"]);
  });

  document.querySelectorAll("[data-type=partial]").forEach(tmpl => {
    Handlebars.registerPartial(tmpl["id"], tmpl["innerHTML"]);
  });

 const slideshow = {
   prevSlide(e) {
     e.preventDefault();
     let prev = this.currentSlide.previousElementSibling;
     if (!prev) {
       prev = this.lastSlide;
     }
     this.fadeOut(this.currentSlide);
     this.fadeIn(prev);
     this.renderPhotoContent(prev.getAttribute("data-id"))
     this.currentSlide = prev;
   },

   nextSlide(e) {
     e.preventDefault();
     let next = this.currentSlide.nextElementSibling;
     if (!next) {
       next = this.firstSlide;
     }
     this.fadeOut(this.currentSlide);
     this.fadeIn(next);
     this.renderPhotoContent(next.getAttribute("data-id"))
     this.currentSlide = next;
   },

   fadeOut(slide) {
     slide.classList.add('hide');
     slide.classList.remove('show')
   },

   fadeIn(slide) {
     slide.classList.add("show");
     slide.classList.remove("hide");
   },

   renderPhotoContent(idx) {
    renderPhotoInformation(Number(idx));
    renderCommentsFor(idx);
   },

   bind() {
     let prevButton = this.slideshow.querySelector("a.prev");
     let nextButton = this.slideshow.querySelector("a.next");
     prevButton.addEventListener("click", (e) => { this.prevSlide(e) });
     nextButton.addEventListener("click", (e) => { this.nextSlide(e) });
   },

   init() {
     this.slideshow = document.querySelector("#slideshow");
     let slides = this.slideshow.querySelectorAll("figure");
     this.firstSlide = slides[0];
     this.lastSlide = slides[slides.length - 1];
     this.currentSlide = this.firstSlide;
     this.bind();
   }
 }

  fetch("/photos")
    .then(response => response.json())
    .then(json => {
      photos = json;
      renderPhotos({photos: photos});
      renderPhotoInformation(photos[0].id);
      renderCommentsFor(photos[0].id);
      slideshow.init();
    });

    function renderPhotos() {
      let slides = document.getElementById("slides");
      slides.innerHTML = templates.photos({ photos: photos });
    };

    function renderPhotoInformation(id) {
       let sectionHeader = document.querySelector("section > header");
       let photo = photos.filter(photo => photo.id === id)[0];
       sectionHeader.innerHTML = templates.photo_information(photo);
    };

    function renderCommentsFor(id) {
      fetch(`/comments?photo_id=${id}`)
        .then(response => response.json())
        .then(comment_json => {
          let commentsUl = document.querySelector("#comments ul");
          commentsUl.innerHTML = templates.photo_comments({ comments: comment_json });
        });
    }

     // Like and Favorite button functionality
 document.querySelector("section > header").addEventListener("click", function(e) {
  e.preventDefault();
  let button = e.target;
  let buttonType = button.getAttribute('data-property');
  if (buttonType) {
    let href = button.getAttribute('href');
    let dataId = button.getAttribute('data-id');
    let text = button.textContent;

    fetch(href, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: 'photo_id=' + dataId
    })
    .then(response => response.json())
    .then(json => {
      button.textContent = text.replace(/\d+/, json.total);
    });
  }
 });

// add a new comment for a photo
document.querySelector('form').addEventListener("submit", function(e) {
  e.preventDefault();
  let form = e.target;
  let href = form.getAttribute("action");
  let method = form.getAttribute("method");
  let data = new FormData(form);
  let currentSlideId = slideshow.currentSlide.getAttribute("data-id");
  data.set("photo_id", currentSlideId);

  fetch(href, {
    method: method,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    body: new URLSearchParams([...data])
  })
  .then(response => response.json())
  .then(json => {
    let commentsList = document.querySelector("#comments ul");
    commentsList.insertAdjacentHTML("beforeend", templates.photo_comment(json));
    form.reset();
  });
});
});
