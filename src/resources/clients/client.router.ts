import { Router, Response, Request } from 'express';
import { StatusCodes } from "http-status-codes";

import Client from './client.model.js';
import * as clientsService from './client.service.js';

const router: Router = Router();

router.route('/').get(async (_req: Request, res: Response) => {
  const users = await clientsService.getAll();
  res.json(users.map(Client.toResponse));
});

router.route("/").post(async (req: Request, res: Response) =>{
  const {name, surname, CT, login, password} = req.body;

  const client = await clientsService.createClient({name, surname, CT, login, password});

  if(client){
    res.status(StatusCodes.CREATED).json(Client.toResponse(client));
  }
  else{
    res.status(StatusCodes.BAD_REQUEST).json({ code: `${StatusCodes.BAD_REQUEST}`, msg: 'Client not created' });
  }
})

router.route("/:id").get(async (req: Request, res: Response) =>{
  const { id } = req.params;

  const client = await clientsService.getById(id || "");

  if(client){
    res.status(StatusCodes.OK).json(Client.toResponse(client));
  }
  else{
    res.status(StatusCodes.NOT_FOUND).json({ code:`${StatusCodes.NOT_FOUND}`, msg: "Client not found"});
  }
})

router.route("/:id").put(async (req: Request, res: Response) =>{
  const { id } = req.params;
  const { name, surname, CT, login, password } = req.body;

  const client = await clientsService.update({ id: id || "", name, surname, CT, login, password});

  if(client){
    res.status(StatusCodes.OK).json(Client.toResponse(client));
  }
  else{
    res.status(StatusCodes.NOT_FOUND).json({ code:`${StatusCodes.NOT_FOUND}`, msg: "Client not found"});
  }
})

router.route("/:id").delete(async (req: Request, res: Response) =>{
  const { id } = req.params;

  const client = await clientsService.deleteById(id || "");

  if(client){
    res.status(StatusCodes.NO_CONTENT).json({ code: `${StatusCodes.NO_CONTENT}`, msg: 'User has been deleted' });
  }
  else{
    res.status(StatusCodes.NOT_FOUND).json({ code:`${StatusCodes.NOT_FOUND}`, msg: "Client not found"});
  }
})

export default router;
