import Tour from "./tour.model.js";
const tours = [
    new Tour({ name: "as",
        country: "sa",
        price: "coadsa",
        duration: "test1",
        agentId: "null",
    })
];
const getAll = async () => tours;
const getById = async (id) => tours.find((tour) => tour.id === id);
const create = async ({ name, country, price, duration, agentId }) => {
    const tour = new Tour({ name, country, price, duration, agentId });
    tours.push(tour);
    return tour;
};
const deleteById = async (id) => {
    const pos = tours.findIndex((tour) => tour.id === id);
    if (pos === -1)
        return null;
    const tour = tours[pos];
    tours.splice(pos, 1);
    return tour;
};
const update = async ({ id, name, country, price, duration, agentId }) => {
    const pos = tours.findIndex((tour) => tour.id === id);
    if (pos === -1)
        return null;
    const newt = { ...tours[pos], name, country, price, duration, agentId, id };
    tours.splice(pos, 1, newt);
    return newt;
};
const deleteAgentId = async (agentId) => {
    const toDeleteFrom = tours.filter(tour => tour.agentId === agentId);
    await Promise.allSettled(toDeleteFrom.map(async (tour) => update({ id: tour.id, name: tour.name, country: tour.country, price: tour.price, duration: tour.duration, agentId: "null" })));
};
export { tours, getAll, getById, create, deleteById, update, deleteAgentId };
//# sourceMappingURL=tour.memory.repository.js.map