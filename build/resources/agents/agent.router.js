import { Router } from 'express';
import { StatusCodes } from "http-status-codes";
import Agent from './agent.model.js';
import * as clientsService from './agent.service.js';
const router = Router();
router.route('/').get(async (_req, res) => {
    const agents = await clientsService.getAll();
    res.json(agents.map(Agent.toResponse));
});
router.route("/").post(async (req, res) => {
    const { name, surname, salary, phonenum, email, login, password } = req.body;
    const agent = await clientsService.createAgent({ name, surname, salary, phonenum, email, login, password });
    if (agent) {
        res.status(StatusCodes.CREATED).json(Agent.toResponse(agent));
    }
    else {
        res.status(StatusCodes.BAD_REQUEST).json({ code: `${StatusCodes.BAD_REQUEST}`, msg: 'Client not created' });
    }
});
router.route("/:id").get(async (req, res) => {
    const { id } = req.params;
    const agent = await clientsService.getById(id || "");
    if (agent) {
        res.status(StatusCodes.OK).json(Agent.toResponse(agent));
    }
    else {
        res.status(StatusCodes.NOT_FOUND).json({ code: `${StatusCodes.NOT_FOUND}`, msg: "Client not found" });
    }
});
router.route("/:id").put(async (req, res) => {
    const { id } = req.params;
    const { name, surname, salary, phonenum, email, login, password } = req.body;
    const agent = await clientsService.update({ id: id || "", name, surname, salary, phonenum, email, login, password });
    if (agent) {
        res.status(StatusCodes.OK).json(Agent.toResponse(agent));
    }
    else {
        res.status(StatusCodes.NOT_FOUND).json({ code: `${StatusCodes.NOT_FOUND}`, msg: "Client not found" });
    }
});
router.route("/:id").delete(async (req, res) => {
    const { id } = req.params;
    const agent = await clientsService.deleteById(id || "");
    if (agent) {
        res.status(StatusCodes.NO_CONTENT).json({ code: `${StatusCodes.NO_CONTENT}`, msg: 'User has been deleted' });
    }
    else {
        res.status(StatusCodes.NOT_FOUND).json({ code: `${StatusCodes.NOT_FOUND}`, msg: "Client not found" });
    }
});
export default router;
//# sourceMappingURL=agent.router.js.map