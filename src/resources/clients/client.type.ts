export interface TClient {
    name: string;
    surname: string;
    CT: string;
    login: string;
    password: string;
  }
  
  export interface TClientModel extends TClient {
    id: string;
  }
  
  export interface TClientResponse extends Omit<TClient, 'password'> {
    id: string;
  }