import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/item.model";

const createtCar = async (item: Car) => {
  const responseInsert = await ItemModel.create(item);
  return responseInsert;
};

const getCars = async () => {
  const responseGetAll = await ItemModel.find();
  return responseGetAll;
};

const deleteCar = async (id: String) => {
  const item = await ItemModel.findById({ _id: id });
  let responseDelete = {};

  if (item) {
    return (responseDelete = await ItemModel.deleteOne({ _id: id }));
  } else {
    return responseDelete;
  }
};

const updateCar = async (id: String, data: Car) => {
  const responseUpdate = await ItemModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseUpdate;
};

export { createtCar, getCars, deleteCar, updateCar };
