export interface ICategory {
    id: number;
    nombre: string;
    img: string;
    clasecss:string;
    titulo:string;
  }
  
  // Implementación de la interfaz en una clase concreta
  export class Category implements ICategory {
    id: number;
    nombre: string;
    img:string;
    clasecss:string;
    titulo:string;
  
    constructor(id: number, nombre: string, img: string, clasecss:string,titulo:string) {
      this.id = id;
      this.nombre = nombre;
      this.img = img;
      this.clasecss = clasecss;
      this.titulo = titulo;
    }
  }
  