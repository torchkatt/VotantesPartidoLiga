export class ModeloVotante {

  public constructor(init?: Partial<ModeloVotante>){
    Object.assign(this, init);
  }

  id!: number;

  cedula!: number;
  nombreCompleto!: string;
  direccion!: string;
  nombreBarrio!: number;
  celular!: number;
  visitado!: string;
  nombre1!: string;
  nombre2!: string;
  apellido1!: string;
  apellido2!: string;
  sexo!: string;
  edad!: number;
  cantidadAfichesCarro!: number;
  cantidadAfichesCasa!: number;
  cantidadAfichesMoto!: number;

  idUsuarioCreacion!: number;

  contenido:any;

}
