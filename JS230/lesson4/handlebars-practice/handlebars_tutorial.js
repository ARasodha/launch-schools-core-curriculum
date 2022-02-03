function fillTemplate() {
  let data = {
    title: "Why handlebars is cool",
    list: [
      {name: "you can generate html"},
      {name: "it works on front and backend"},
      {name: "it ways around 24 kilobytes"},
      {name: "templates go brrrrrr"}
    ],
    footer: "this is the footer"
  };

  let template = Handlebars.compile(document.querySelector("#template").innerHTML);
  let filled = template(data);
  document.querySelector("#output").innerHTML = filled;
}