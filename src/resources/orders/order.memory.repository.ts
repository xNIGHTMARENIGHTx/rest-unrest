import Order from "./order.model.js";
import { TOrder, TOrderModel } from "./order.type.js";

const orders: TOrderModel[] = [
  new Order()
]

const getAll = async (): Promise<TOrderModel[]> => orders;

const getById = async (id: string): Promise<TOrderModel | null> => orders.find(order => order.id === id) || null;

const create = async ({
  ClientId,
  TourId,
  PM
}: TOrder): Promise<TOrderModel> => {
  const order = new Order({
    ClientId,
    TourId,
    PM
  })
  orders.push(order);
  return order;
}

const deleteById = async (id: string): Promise<TOrderModel | null> =>{
  const pos = orders.findIndex(order => order.id === id);

  if(pos === -1) return null;

  const old = orders[pos];
  orders.splice(pos,1);
  return old!;
}

const update = async ({id, ClientId, TourId, PM}: TOrderModel): Promise<TOrderModel | null> =>{
  const pos = orders.findIndex(order => order.id === id);

  if(pos === -1) return null;

  const old = orders[pos];
  const newor = {...old, ClientId, TourId, PM, id};

  orders.splice(pos, 1, newor);
  return newor!;
}

const deleteByClientId = async (ClientId: string): Promise<void> =>{
  const toDelete = orders.filter(order => order.ClientId === ClientId);

  await Promise.allSettled(toDelete.map(async (order) => deleteById(order.id)));
}

const deleteByTourId = async (TourId: string): Promise<void> =>{
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
