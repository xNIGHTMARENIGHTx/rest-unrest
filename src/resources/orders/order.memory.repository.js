import Order from "./order.model";

const orders = [
  new Order()
]

const getAll = async () => orders;

const getById = async (id) => orders.find(order => order.id === id);

const create = async ({
  ClientId,
  TourId,
  PM
}) => {
  const order = new Order({
    ClientId,
    TourId,
    PM
  })
  orders.push(order);
}

const deleteById = async (id) =>{
  const pos = orders.findIndex(order => order.id === id);
  orders.splice(pos,1);
}

const update = async ({id, ClientId, TourId, PM}) =>{
  const pos = orders.findIndex(order => order.id === id);

  const old = orders[pos];

  orders.splice(pos, 1, {...old, ClientId, TourId, PM});
}

const deleteByClientId = async (ClientId) =>{
  const toDelete = orders.filter(order => order.ClientId === ClientId);

  await Promise.allSettled(toDelete.map(async (order) => deleteById(order.id)));
}

const deleteByTourId = async (TourId) =>{
  const toDelete = orders.filter(order => order.TourId === TourId);

  await Promise.allSettled(toDelete.map(async (order) => deleteById(order.id)));
} 

export { 
  orders,
  getAll,
  getById,
  create,
  update,
  deleteById,
  deleteByTourId,
  deleteByClientId
 };
