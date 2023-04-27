import * as ordersRepo from './order.memory.repository.js';
import { TOrder, TOrderModel } from './order.type.js';

const getAll = (): Promise<TOrderModel[]> => ordersRepo.getAll();
const getById = (id: string): Promise<TOrderModel | null> => ordersRepo.getById(id);
const create = (order: TOrder): Promise<TOrderModel> => ordersRepo.create(order);
const update = (order: TOrderModel): Promise<TOrderModel | null> => ordersRepo.update(order);
const deleteById = (id: string): Promise<TOrderModel | null> => ordersRepo.deleteById(id);
const deleteByClientId = (ClientId: string): Promise<void> => ordersRepo.deleteByClientId(ClientId);
const deleteByTourId = (TourId: string): Promise<void> => ordersRepo.deleteByTourId(TourId);

export { 
    getAll,
    getById,
    create,
    update,
    deleteById,
    deleteByClientId,
    deleteByTourId
};
