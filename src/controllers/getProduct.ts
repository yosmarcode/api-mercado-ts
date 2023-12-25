import { Request, Response } from "express";
import { URL_API } from "../config";
import { StatusCodes } from "http-status-codes";
import { Results, IResponse } from "./products";


export let _object: IResponse

export const getProduct = async (req: Request, res: Response) => {
  try {
    const url = URL_API + `search?q=${req.params.q}`;

    const {results} = await fetch(url).then(
      (r) =>
        r.json() as Promise<{
          results: Results;
        }>
    );


    // mostrar resultados hacia afuera

      res.status(StatusCodes.OK || StatusCodes.CREATED).json({
          success: true,
          message: 'listado OK',
          data : results,
      });
      
    
  } catch (error: unknown) {
    const err = error as Error;
    console.log(`Error get Product Error: `, err.message);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: err.message,
    });
  }
};
