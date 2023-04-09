import * as ordersRepo from './order.memory.repository.js';

const getAll = () => ordersRepo.getAll();
const getById = (id) => ordersRepo.getById(id);
const create = ({ClientId, TourId, PM}) => ordersRepo.create({ClientId, TourId, PM});
const update = ({id, ClientId, TourId, PM}) => ordersRepo.update({id, ClientId, TourId, PM});
const deleteById = (id) => ordersRepo.deleteById(id);
const deleteByClientId = (ClientId) => ordersRepo.deleteByClientId(ClientId);
const deleteByTourId = (TourId) => ordersRepo.deleteByTourId(TourId);

export { 
    getAll,
    getById,
    create,
    update,
    deleteById,
    deleteByClientId,
    deleteByTourId
};
