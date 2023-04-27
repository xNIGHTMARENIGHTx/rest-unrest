export interface TAgent {
    name: string;
    surname: string;
    salary: string;
    phonenum: string;
    email: string;
    login: string;
    password: string;
  }
  
  export interface TAgentModel extends TAgent {
    id: string;
  }
  
  export interface TAgentResponse extends Omit<TAgent, 'password'> {
    id: string;
  }