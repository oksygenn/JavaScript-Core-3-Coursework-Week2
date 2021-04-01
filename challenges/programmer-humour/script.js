const URL = "https://xkcd.now.sh/?comic=latest";

const getPicture = () => {
  const body = document.querySelector("body");
  fetch(URL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw response.statusText;
      }
    })
    .then((obj) => {
      const image = document.createElement("img");
      image.src = obj.img;
      body.append(image);
    })
    .catch((error) => {
      const h1 = document.createElement("h1");
      h1.innerText = `Oops! Something went wrong :( ${error}`;
      h1.style.color = "red";
      body.append(h1);
    });
};

window.onload = getPicture;
