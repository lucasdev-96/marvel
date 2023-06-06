import axios from "axios";
import { getHour } from "../utils/hour";
import { hash } from "../utils/md5";


const publickKey = import.meta.env.VITE_API_KEY_PUBLIC_MARVEL
const privateKey = import.meta.env.VITE_API_KEY_PRIVATE_MARVEL


const baseUrl = (patch: string): string => {
  return `https://gateway.marvel.com/${patch}ts=${getHour()}&apikey=${publickKey}&hash=${hash(privateKey, getHour(), publickKey)}`;
}



export async function getHero() {
    try {
      return await axios.get(baseUrl('/v1/public/characters?limit=100&'));
    } catch (error) {
      console.error(error);
    }
  }