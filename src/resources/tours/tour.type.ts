export interface TTour {
    name: string;
    country: string;
    price: string;
    duration: string;
    agentId: string;
}

export interface TTourModel extends TTour {
    id: string;
}

export interface TTourResponse extends TTour {
    id: string;
}