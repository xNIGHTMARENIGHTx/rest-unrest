import { v4 as uuidv4 } from 'uuid';
import { TOrderModel, TOrderResponse } from './order.type.js';

class Order {

  id: string;
  ClientId: string;
  TourId: string;
  PM: string;

  constructor({ClientId = "null", TourId = "null", PM = "aasdaads" } = {}) {
    this.id = uuidv4();
    this.ClientId = ClientId;
    this.TourId = TourId;
    this.PM = PM;
  }

  static toResponse(order: TOrderModel): TOrderResponse {
    const { id, ClientId, TourId, PM } = order;
    return { id, ClientId, TourId, PM };
  }
}

export default Order;
