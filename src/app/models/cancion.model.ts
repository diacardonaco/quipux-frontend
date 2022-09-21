export class Cancion{
    constructor(
        public id : number | undefined,
        public titulo : string | undefined,
        public artista : string | undefined,
        public album : string | undefined,
        public anno : string | undefined,
        public genero : string | undefined){}
  }