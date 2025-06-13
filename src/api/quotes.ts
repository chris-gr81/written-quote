import axios from "axios";
const API_BASE = "https://api.zitat-service.de";

type QuoteResponse = {
  quote: string;
  authorName: string;
  link: string;
  authorLink: string;
};

export async function getQuote(): Promise<QuoteResponse | null> {
  try {
    const response = await axios.get<QuoteResponse>(
      API_BASE + "/v1/quote?language=de"
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
