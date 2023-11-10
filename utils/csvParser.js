import fs from "fs";
import { parse } from "csv-parse";

const parseCSV = async (csv) => {
  const data = [];
  return new Promise((resolve, reject) => {
    fs.createReadStream(csv)
      .pipe(parse({ delimiter: ",", from_line: 2 }))
      .on("data", (row) => data.push(row))
      .on("end", () => resolve(data))
      .on("error", (error) => reject(error));
  });
};

export default parseCSV;
