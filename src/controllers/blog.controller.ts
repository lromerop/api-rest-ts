import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

const getBlog = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, `${error}`);
  }
};

const getBlogs = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, `${error}`);
  }
};

const updateBlog = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, `${error}`);
  }
};

const createBlog = (req: Request, res: Response) => {
  try {
    res.send(req.body);
  } catch (error) {
    handleHttp(res, `${error}`);
  }
};

const deleteBlog = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, `${error}`);
  }
};

export { getBlog, getBlogs, updateBlog, createBlog, deleteBlog };
