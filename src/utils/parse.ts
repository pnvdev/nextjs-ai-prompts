import Papa from "papaparse";

// Define the type for the parsed data
type ParsedData = Record<string, string | number | boolean | null>;

const parse = (data: string): Promise<ParsedData[]> =>
  new Promise((resolve, reject) => {
    Papa.parse<ParsedData>(data, {
      header: true,
      complete: (results) => resolve(results.data),
      error: (error: { message: string }) => reject(error.message),
    });
  });

export default parse;
