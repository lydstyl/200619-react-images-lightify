import React from "react";

const resizeImages = async (settings) => {
  // POST request to server using fetch with async/await
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ settings }),
  };

  const response = await fetch(
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
      inputImagesFolder: form.inputImagesFolder.value,
      greyscale: form.greyscale.value === "false" ? false : true,
      outputExt: form.outputExt.value,
    };

    console.log("handleClick -> settings", JSON.stringify(settings, null, 4));

    const data = resizeImages(settings); // send the settings to the server here
  };

  return (
    <form>
      <div className="field">
        <label htmlFor="inputImagesFolder">inputImagesFolder</label>
        <input
          type="text"
          name="inputImagesFolder"
          id="inputImagesFolder"
          defaultValue="/home/gab/imagesFolder"
        />
      </div>

      <div className="field">
        <label htmlFor="width">Largeur en px</label>
        <input type="number" name="width" id="width" />
      </div>

      <div className="field">
        <label htmlFor="greyscale">Noir et blanc</label>
        {/* <input type="checkbox" name="greyscale" id="greyscale" /> */}
        <select name="greyscale" id="greyscale">
          <option value="false">Non</option>
          <option value="true">Oui</option>
        </select>
      </div>

      <div className="field">
        <select name="outputExt" id="outputExt">
          <option value="jpg">JPG</option>
          <option value="png">PNG</option>
          <option value="webp">WEBP</option>
        </select>
      </div>

      <input
        onClick={handleClick}
        type="submit"
        value="Redimensionner les images"
      />
    </form>
  );
};
