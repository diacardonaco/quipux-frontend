import { Cancion } from "./cancion.model";

export class List{
    constructor(
        public id : number | undefined,
        public nombre : string | undefined,
        public descripcion : string | undefined,
        public canciones : Array<Cancion> | undefined){}
  }



