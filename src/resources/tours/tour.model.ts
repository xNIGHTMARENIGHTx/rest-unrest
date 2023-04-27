import { v4 as uuidv4 } from 'uuid';
import { TTourModel, TTourResponse } from './tour.type.js';

class Tour {

  id: string;
  name: string;
  country: string;
  price: string;
  duration: string;
  agentId: string;

  constructor({name = 'tour', country = "Bel", price = "-Infinty", duration = 'forever', agentId = "null" } = {}) {
    this.id = uuidv4();
    this.name = name;
    this.country = country;
    this.price = price;
    this.duration = duration;
    this.agentId = agentId;
  }

  static toResponse(tour: TTourModel): TTourResponse {
    const { id, name, country, price, duration, agentId } = tour;
    return { id, name, country, price, duration, agentId };
  }
}

export default Tour;
