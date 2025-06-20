import axios from "axios";
import { API_BASE } from "../constants/constants";

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
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
