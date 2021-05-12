import axios from "axios";
import {Config} from '../utils/config';

export const GetService = async (url) => {
    let response = await axios.get( `${Config.Endpoint.baseUrl}/${url}`);
    return response.data;
}