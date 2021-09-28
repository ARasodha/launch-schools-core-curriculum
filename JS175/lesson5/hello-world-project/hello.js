const express = require("express");
const app = express();
const morgan = require("morgan");
const COUNTRY_DATA = [
  {
    path: "/english",
    flag: "flag-of-United-States-of-America.png",
    alt: "US Flag",
    title: "Go to US English Site",
  },
  {
    path: "/french",
    flag: "flag-of-France.png",
    alt: "Drapeau de la france",
    title: "Aller sur le site français",
  },
  {
    path: "/serbian",
    flag: "flag-of-Serbia.png",
    alt: "Застава Србије",
    title: "Идите на српски сајт",
  },
  {
    path: "/punjabi",
    flag: "flag-of-India.png",
    alt: "Bhārata dā jhaḍā",
    title: "Pajābī sā'īṭa tē jā'ō",
  }
]

const LANGUAGE_CODES = {
  english: "en-US",
  french: "fr-FR",
  serbian: "sr-Cryl-rs",
  punjabi: "pa-IN"
}


app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));
app.use(morgan("common"));

app.locals.currentPathClass = (path, currentPath) => {
  return path === currentPath ? "current" : "";
}

app.get("/", (req, res) => {
  res.redirect("/english");
});

app.get("/:language", (req, res, next) => {
  const language = req.params.language;
  const languageCode = LANGUAGE_CODES[language];
  if (!languageCode) {
    next(new Error(`Language not supported: ${language}`));
  } else {
    res.render(`hello-world-${language}`, {
      countries: COUNTRY_DATA, 
      currentPath: req.path,
      language: LANGUAGE_CODES[language]
    }); 
  }
});

// error handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(404).send(err.message);
});

app.listen(3000, 'localhost', () => {
  console.log("Listening to port 3000.");
});