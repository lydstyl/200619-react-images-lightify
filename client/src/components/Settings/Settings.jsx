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

    const width = form.width2.value || form.width.value;

    const settings = {
      width: parseInt(width, 10),
      inputImagesFolder: form.inputImagesFolder.value,
      greyscale: form.greyscale.value === "false" ? false : true,
      outputExt: form.outputExt.value,
    };

    console.log("handleClick -> settings", JSON.stringify(settings, null, 4));

    const data = resizeImages(settings); // send the settings to the server here
  };

  return (
    <form>
      <h1>Images Lightify</h1>

      <div className="field">
        <label htmlFor="inputImagesFolder">Dossier</label>
        <input
          style={{ width: "600px" }}
          type="text"
          name="inputImagesFolder"
          id="inputImagesFolder"
          defaultValue="/home/gab/imagesFolder"
        />

        {/* <input
          type="file"
          name="inputImagesFolder"
          id="inputImagesFolder"
          webkitdirectory="true"
          directory="true"
          // multiple
        /> */}
      </div>

      <div className="field">
        <label htmlFor="width">Largeur en px</label>

        <select name="width" id="width" style={{ marginRight: "20px" }}>
          <option value="720">720</option>
          <option value="768">768</option>
          <option value="1080">1080</option>
          <option value="1200">1200</option>
          <option value="1280">1280</option>
          <option value="1366">1366</option>
          <option value="1440">1440</option>
          <option value="1920">1920</option>
          <option value="2160">2160</option>
          <option value="2560">2560</option>
          <option value="3840">3840</option>
        </select>

        <label htmlFor="width2">Ou préciser</label>
        <input
          type="number"
          name="width2"
          id="width2"
          style={{ width: "100px" }}
        />
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
        <label htmlFor="outputExt">Format</label>
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
