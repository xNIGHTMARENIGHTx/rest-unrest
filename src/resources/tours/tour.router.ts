import { Router, Response, Request } from 'express';
import { StatusCodes } from "http-status-codes";

import Tour from './tour.model.js';
import * as toursService from './tour.service.js';

const router: Router = Router();

router.route('/').get(async (_req: Request, res: Response) => {
  const tours = await toursService.getAll();
  res.json(tours.map(Tour.toResponse));
});

router.route("/").post(async (req: Request, res: Response) =>{
  const {name, country, price, duration, agentId} = req.body;

  const tour = await toursService.createTour({name, country, price, duration, agentId});

  if(tour){
    res.status(StatusCodes.CREATED).json(Tour.toResponse(tour));
  }
  else{
    res.status(StatusCodes.BAD_REQUEST).json({ code: `${StatusCodes.BAD_REQUEST}`, msg: 'Client not created' });
  }
})

router.route("/:id").get(async (req: Request, res: Response) =>{
  const { id } = req.params;

  const tour = await toursService.getById(id || "");

  if(tour){
    res.status(StatusCodes.OK).json(Tour.toResponse(tour));
  }
  else{
    res.status(StatusCodes.NOT_FOUND).json({ code:`${StatusCodes.NOT_FOUND}`, msg: "Client not found"});
  }
})

router.route("/:id").put(async (req: Request, res: Response) =>{
  const { id } = req.params;
  const {name, country, price, duration, agentId} = req.body;

  const tour = await toursService.update({ id: id || "", name, country, price, duration, agentId});

  if(tour){
    res.status(StatusCodes.OK).json(Tour.toResponse(tour));
  }
  else{
    res.status(StatusCodes.NOT_FOUND).json({ code:`${StatusCodes.NOT_FOUND}`, msg: "Client not found"});
  }
})

router.route("/:id").delete(async (req: Request, res: Response) =>{
  const { id } = req.params;

  const tour = await toursService.deleteById(id || "");

  if(tour){
    res.status(StatusCodes.NO_CONTENT).json({ code: `${StatusCodes.NO_CONTENT}`, msg: 'User has been deleted' });
  }
  else{
    res.status(StatusCodes.NOT_FOUND).json({ code:`${StatusCodes.NOT_FOUND}`, msg: "Client not found"});
  }
})

export default router;
