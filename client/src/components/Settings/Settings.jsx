import React from "react";

const resizeImages = async (settings) => {
  // POST request using fetch with async/await
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ settings }),
  };

  const response = await fetch(
    // "https://jsonplaceholder.typicode.com/posts",
    // "http://localhost:4000/resize", // todo https
    "/resize", // todo https
    requestOptions
  );

  const data = await response.json();

  return data;
};

export const Settings = () => {
  const handleClick = (evt) => {
    evt.preventDefault();

    const form = document.querySelector("form");

    const settings = {
      width: parseInt(form.width.value, 10),
      inputImagesFolder: "/home/gab/imagesFolder",
      greyscale: false,
      outputExt: "jpg",
    };

    console.log("handleClick -> settings", settings);

    // send the settings to the server here
    const data = resizeImages(settings);

    console.log("handleClick -> data", data);
  };

  return (
    <form>
      <label htmlFor="width">Largeur en px</label>
      <input type="number" name="width" id="width" />

      <br />
      <br />

      <input
        onClick={handleClick}
        type="submit"
        value="Redimensionner les images"
      />

      <br />
      <br />
    </form>
  );
};
