import axios from 'axios';

interface brandResponse {
  brand: string;
}

export async function doLogin(
  email: string,
  password: string,
): Promise<brandResponse> {
  return axios.post('https://e4g9k.mocklab.io/login');
}
