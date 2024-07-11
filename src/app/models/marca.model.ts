export interface IMarca {
    id: number;
    nombre: string;
  }
  
  // Implementación de la interfaz en una clase concreta
  export class Marca implements IMarca {
    id: number;
    nombre: string;
  
    constructor(id: number, nombre: string) {
      this.id = id;
      this.nombre = nombre;
   
  }
}
  