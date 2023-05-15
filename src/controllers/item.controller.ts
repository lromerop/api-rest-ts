import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { createtCar, getCars, deleteCar, updateCar } from "../services/item.service";

const getItem = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, `${error}`);
  }
};

const getItems = async (req: Request, res: Response) => {
  try {
    const responseGetItems = await getCars();
    return res.send(responseGetItems);
  } catch (error) {
    handleHttp(res, `${error}`);
  }
};

const updateItem = async ({params, body}: Request, res: Response) => {
  try {
    const { id } = params
    const responseGetItems = await updateCar(id, body);
    return res.send(responseGetItems);
  } catch (error) {
    handleHttp(res, `${error}`);
  }
};

const createItem = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await createtCar(body);
    res.send(responseItem);
  } catch (error) {
    handleHttp(res, `${error}`);
  }
};

const deleteItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const responseDelete = await deleteCar(id);
    res.send(responseDelete);
  } catch (error) {
    handleHttp(res, `${error}`);
  }
};

export { getItem, getItems, updateItem, createItem, deleteItem };
