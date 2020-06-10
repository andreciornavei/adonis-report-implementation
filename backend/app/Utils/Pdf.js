"use strict";

const { join } = require("path");
const PdfPrinter = require("pdfmake/src/printer");

class Pdf {
  constructor(response) {
    this.response = response;
    this._setup();
  }

  _setup() {
    this.printer = new PdfPrinter({
      Roboto: {
        normal: join(
          __dirname,
          "..",
          "..",
          "public",
          "fonts",
          "Roboto-Regular.ttf"
        ),
        bold: join(
          __dirname,
          "..",
          "..",
          "public",
          "fonts",
          "Roboto-Regular.ttf"
        ),
        italics: join(
          __dirname,
          "..",
          "..",
          "public",
          "fonts",
          "Roboto-Regular.ttf"
        ),
        bolditalics: join(
          __dirname,
          "..",
          "..",
          "public",
          "fonts",
          "Roboto-Regular.ttf"
        ),
      },
      RobotoBold: {
        normal: join(
          __dirname,
          "..",
          "..",
          "public",
          "fonts",
          "Roboto-Regular.ttf"
        ),
        italics: join(
          __dirname,
          "..",
          "..",
          "public",
          "fonts",
          "Roboto-Regular.ttf"
        ),
      },
      RobotoBlack: {
        normal: join(
          __dirname,
          "..",
          "..",
          "public",
          "fonts",
          "Roboto-Regular.ttf"
        ),
        italics: join(
          __dirname,
          "..",
          "..",
          "public",
          "fonts",
          "Roboto-Regular.ttf"
        ),
      },
      RobotoLight: {
        normal: join(
          __dirname,
          "..",
          "..",
          "public",
          "fonts",
          "Roboto-Regular.ttf"
        ),
        italics: join(
          __dirname,
          "..",
          "..",
          "public",
          "fonts",
          "Roboto-Regular.ttf"
        ),
      },
      RobotoThin: {
        normal: join(
          __dirname,
          "..",
          "..",
          "public",
          "fonts",
          "Roboto-Regular.ttf"
        ),
        italics: join(
          __dirname,
          "..",
          "..",
          "public",
          "fonts",
          "Roboto-Regular.ttf"
        ),
      },
    });
  }

  create(content) {
    const document = this.printer.createPdfKitDocument(content);
    document.pipe(this.response.response);
    document.end();
  }

  print() {
    this.response.header("Content-type", "application/pdf");
    this.response.header(
      "Content-Disposition:attachment;filename='report.pdf'"
    );
  }
}

module.exports = Pdf;
