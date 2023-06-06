import axios from "axios";
import {baseUrl} from "./baseUrl";


export const randomInstances = axios.create({
    baseURL: baseUrl
})