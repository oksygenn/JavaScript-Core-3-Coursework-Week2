const URL = "https://dog.ceo/api/breeds/image/random";

const getPicture = () => {
  const body = document.querySelector("body");
  const list = document.querySelector(".photo-list");
  body.append(list);
  const button = document.querySelector(".get-photo");

  button.addEventListener("click", () => {
    fetch(URL)
      .then((response) => response.json())
      .then((obj) => {
        const liEl = document.createElement("li");
        const image = document.createElement("img");
        image.src = obj.message;
        liEl.append(image);
        list.append(liEl);
      });
  });
};

getPicture();
