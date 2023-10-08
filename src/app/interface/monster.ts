export interface Monster{
    name:string;
    id:number;
    category:string;
    description:string;
    image:string;
    common_locations:string[];
    drops:string[];
    dlc:boolean;
}

export interface common_locations{
  name:string;
}

export interface drops{
  name:string;
}
