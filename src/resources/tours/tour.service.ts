import * as toursRepo from './tour.memory.repository.js';
import * as ordersRepo from "../orders/order.memory.repository.js"
import { TTour, TTourModel } from './tour.type.js';

const getAll = (): Promise<TTourModel[]> => toursRepo.getAll();
const getById = (id: string): Promise<TTourModel | null> => toursRepo.getById(id);
const createTour = (tour: TTour): Promise<TTourModel> =>
    toursRepo.create(tour);
const deleteById = async (id: string): Promise<TTourModel | null> => {
    const tour = await toursRepo.getById(id);
    toursRepo.deleteById(id);
    ordersRepo.deleteByTourId(id);

    return tour;
}
const update = (tour: TTourModel): Promise<TTourModel | null> =>
    toursRepo.update(tour);

export {
    getAll,
    getById,
    createTour,
    deleteById,
    update
};
