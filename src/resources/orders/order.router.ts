import { Router, Response, Request } from 'express';
import { StatusCodes } from "http-status-codes"

import Order from './order.model.js';
import * as ordersService from './order.service.js';

const router: Router = Router({mergeParams: true});

router.route('/').get(async (_req: Request, res: Response) => {
  const users = await ordersService.getAll();

  res.json(users.map(Order.toResponse));
});

router.route("/").post(async (req: Request, res: Response) => {
  const { ClientId, TourId, PM } = req.body;

  const order = await ordersService.create({ClientId, TourId, PM});

  if(order){
    res.status(StatusCodes.CREATED).json(Order.toResponse(order));
  }
  else {
    res.status(StatusCodes.BAD_REQUEST).json({code: `${StatusCodes.BAD_REQUEST}`, msg:"Bad Request"});
  }
})

router.route("/:id").get(async (req: Request, res: Response) =>{
  const { id } = req.params;

  const task = await ordersService.getById(id || "");

  if(task){
    res.status(StatusCodes.OK).json(Order.toResponse(task));
  }
  else {
    res.status(StatusCodes.NOT_FOUND).json({ code:`${StatusCodes.NOT_FOUND}`, msg:"Order Not Found :("});
  }
})

router.route("/:id").put(async (req: Request, res: Response) =>{
  const { id } = req.params;
  const {ClientId, TourId, PM} = req.body;

  const order = await ordersService.update({id: id || "", ClientId, TourId, PM});

  if(order){
    res.status(StatusCodes.OK).json(Order.toResponse(order));
  }
  else{
    res.status(StatusCodes.NOT_FOUND).json({ code:`${StatusCodes.NOT_FOUND}`, msg:"Order Not Found :("});
  }
})

router.route("/:id").delete(async (req: Request, res: Response) =>{
  const { id } = req.params;

  const order = await ordersService.deleteById(id || "");
  if(order){
    res.status(StatusCodes.NO_CONTENT).json({ code:`${StatusCodes.NO_CONTENT}`, msg:"Order has been Deleted"});
  }
  else{
    res.status(StatusCodes.NOT_FOUND).json({ code:`${StatusCodes.NOT_FOUND}`, msg:"Order Not Found :("});
  }
})

export default router;