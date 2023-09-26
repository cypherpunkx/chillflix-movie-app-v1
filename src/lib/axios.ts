import axios, { CreateAxiosDefaults, AxiosError } from "axios";
import {
  BackdropSize,
  LogoSize,
  PosterSize,
  ProfileSize,
  StillSize,
} from "@/interfaces/movie";

export const TMDB_IMAGE_PATH: string = "https://image.tmdb.org/t/p";

const config: CreateAxiosDefaults = {
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY_V4}`,
  },
};

const instance = axios.create(config);

instance.interceptors.request.use(
  (config) => config,
  (error: AxiosError) => {
    if (error.request)
      console.log("Error response from client: ", error.request);
  }
);
instance.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response.data;
    }

    return response;
  },
  (error: AxiosError) => {
    if (error.response)
      console.log("Error response from server: ", error.response.data);
    if (error.request)
      console.log("Error response from server: ", error.request);
    console.log(error.message);
    return Promise.reject(error);
  }
);

export default instance;
