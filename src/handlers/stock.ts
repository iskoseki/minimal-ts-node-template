 import { Request, Response } from "express";
import { createStockDto } from "../dtos/CreateStock.dto";
import { CreateStockQueryParams } from "../types/query-params";
import { Item } from "../types/res";

 export  function getStock(req: Request, res: Response){
    res.send([])
 }
 export  function getStockById(req: Request, res: Response){
   req.sessionID = req.params.id
    res.send({})
 }
 export  function createStock(req: Request<{
   id: string
 }, {}, createStockDto, CreateStockQueryParams>, res: Response<Item>){
    
    res.status(201).send({
        id: 1,
        name: "keyboard",
        price: 1230,
        quantity: 100,
    })
 }

   