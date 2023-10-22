import * as express from 'express';
import axios from 'axios';
import { axiosRequestConfig, baseURL } from '../Common/Constants';

const getAllUsers = async (req: express.Request, res: express.Response): Promise<any> => {
  const result = await axios.get(baseURL, axiosRequestConfig);
  return res.status(200).send(result.data);

}

const getUserById = async (req: express.Request, res: express.Response): Promise<any> => {
  axiosRequestConfig.params.id = req.params.id;
  
  const result = await axios.get(baseURL, axiosRequestConfig )
  return res.status(200).send(result.data);
  
}

export { getAllUsers, getUserById }