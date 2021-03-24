const URL = "https://dog.ceo/api/breeds/image/random";

const setup = () => {
  const button = document.querySelector(".get-photo");
  button.addEventListener("click", getPicture);
  getPicture();
};

const getPicture = () => {
  fetch(URL)
    .then((response) => response.json())
    .then((obj) => {
      render(obj);
    });
};

const render = (obj) => {
  const body = document.querySelector("body");
  const list = document.querySelector(".photo-list");
  body.append(list);
  const liEl = document.createElement("li");
  const image = document.createElement("img");
  image.src = obj.message;
  image.setAttribute("width", 300);
  liEl.append(image);
  list.append(liEl);
};

setup();
