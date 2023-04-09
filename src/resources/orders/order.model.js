import { v4 as uuidv4 } from 'uuid';

class Order {
  constructor({ClientId = null, TourId = null, PM = "aasdaads" } = {}) {
    this.id = uuidv4;
    this.ClientId = ClientId;
    this.TourId = TourId;
    this.PM = PM;
  }

  static toResponse(order) {
    const { id, ClientId, TourId, PM } = order;
    return { id, ClientId, TourId, PM };
  }
}

export default Order;
