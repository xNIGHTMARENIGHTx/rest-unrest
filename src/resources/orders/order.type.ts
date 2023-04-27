export interface TOrder {
    ClientId: string;
    TourId: string;
    PM: string;
  }
  
  export interface TOrderModel extends TOrder {
    id: string;
  }
  
  export interface TOrderResponse extends TOrder {
    id: string;
  }