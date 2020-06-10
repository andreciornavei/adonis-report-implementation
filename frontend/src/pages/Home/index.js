import React from "react";
import axios from "axios";
import download from "downloadjs";

const Home = () => {
  const handlePreview = () => {
    axios
      .get("http://localhost:3333/report", {
        responseType: "blob",
      })
      .then(function (response) {
        var blob = new Blob([response.data], {
          type: response.headers["content-type"],
        });
        var url = window.URL.createObjectURL(blob);
        window.open(url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleDownload = () => {
    axios
      .get("http://localhost:3333/report", {
        responseType: "blob",
      })
      .then(function (response) {
        download(response.data, "download.pdf", response.headers["content-type"]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <button onClick={handlePreview}>Previsualizar</button>
      <button onClick={handleDownload}>Download</button>
    </>
  );
};

export default Home;