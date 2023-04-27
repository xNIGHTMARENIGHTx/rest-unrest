import * as ordersRepo from './order.memory.repository.js';
const getAll = () => ordersRepo.getAll();
const getById = (id) => ordersRepo.getById(id);
const create = (order) => ordersRepo.create(order);
const update = (order) => ordersRepo.update(order);
const deleteById = (id) => ordersRepo.deleteById(id);
const deleteByClientId = (ClientId) => ordersRepo.deleteByClientId(ClientId);
const deleteByTourId = (TourId) => ordersRepo.deleteByTourId(TourId);
export { getAll, getById, create, update, deleteById, deleteByClientId, deleteByTourId };
//# sourceMappingURL=order.service.js.map