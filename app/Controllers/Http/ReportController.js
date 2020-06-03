"use strict";

const Pdf = require("./../../Utils/Pdf");

class ReportController {
  async index({ request, response }) {
    const report = {
      pageSize: "A4",
      pageOrientation: "portrait",
      pageMargins: [15, 15, 15, 30], // [left, top, right, bottom]
      content: [
        {
          table: {
            // headers are automatically repeated if the table spans over multiple pages
            // you can declare how many rows should be treated as headers
            headerRows: 1,
            widths: ["*", "auto", 100, "*"],
            body: [
              ["First", "Second", "Third", "The last one"],
              ["Value 1", "Value 2", "Value 3", "Value 4"],
              [{ text: "Bold value", bold: true }, "Val 2", "Val 3", "Val 4"],
            ],
          },
        },
      ],
      footer: function (currentPage, pageCount) {
        return {
          columns: [
            { text: "Left part", alignment: "left", margin: [15, 0, 0, 0] },
            {
              text: currentPage.toString() + " of " + pageCount,
              alignment: "right",
              margin: [0, 0, 15, 0],
            },
          ],
        };
      },
    };

    const pdf = new Pdf(response);
    pdf.create(report);
    pdf.print();

    return response;
  }
}

module.exports = ReportController;
