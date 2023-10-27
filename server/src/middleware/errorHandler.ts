import { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.log(`error ${err.message}`);
  const status = err.status || 500;
  res.status(status).send(err.message);
};
