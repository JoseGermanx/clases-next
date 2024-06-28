
import { constValues } from "@/config/const";

export default class GetApiInfo {

 static async getPostList() {
    const response = await fetch(constValues.API_URL);
    const data = await response.json();
    return data;
  }
}