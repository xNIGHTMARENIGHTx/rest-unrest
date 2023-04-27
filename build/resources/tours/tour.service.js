import * as toursRepo from './tour.memory.repository.js';
import * as ordersRepo from "../orders/order.memory.repository.js";
const getAll = () => toursRepo.getAll();
const getById = (id) => toursRepo.getById(id);
const createTour = (tour) => toursRepo.create(tour);
const deleteById = async (id) => {
    const tour = await toursRepo.getById(id);
    toursRepo.deleteById(id);
    ordersRepo.deleteByTourId(id);
    return tour;
};
const update = (tour) => toursRepo.update(tour);
export { getAll, getById, createTour, deleteById, update };
//# sourceMappingURL=tour.service.js.map