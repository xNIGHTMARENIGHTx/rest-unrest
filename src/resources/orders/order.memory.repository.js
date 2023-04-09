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
  return order;
}

const deleteById = async (id) =>{
  const pos = orders.findIndex(order => order.id === id);

  if(pos === -1) return null;

  const old = orders[pos];
  orders.splice(pos,1);
  return old;
}

const update = async ({id, ClientId, TourId, PM}) =>{
  const pos = orders.findIndex(order => order.id === id);

  if(pos === -1) return null;

  const old = orders[pos];
  const newor = {...old, ClientId, TourId, PM};

  orders.splice(pos, 1, newor);
  return newor;
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
