export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  pricedesc: number;
  porcentajedescuento: number; // Asegúrate de incluir este campo si es necesario
  category: string;
  mainimage: string; 
  image1: string; 
  descuento: boolean;
  destacado: boolean;
  
  calcularPorcentajeDescuento(): number; // Método para calcular el porcentaje de descuento
}
// Implementación de la interfaz en una clase concreta
export class Producto implements Product {
  id: number;

  name: string;
  description: string;
  price: number;
  pricedesc: number;
  porcentajedescuento: number; // Puedes calcular esto si es necesario en la clase
  category: string;
  mainimage: string; 
  image1: string; 
  descuento: boolean;
  destacado: boolean;
    
  constructor(id: number, name: string, description: string, price: number, pricedesc: number, porcentajedescuento: number, category: string, mainimage: string, image1: string,descuento: boolean, destacado: boolean) {
    this.id = id;
   
    this.name = name;
    this.description = description;
    this.price = price;
    this.pricedesc = pricedesc;
    this.porcentajedescuento = this.calcularPorcentajeDescuento();
    this.category = category;
    this.mainimage = mainimage;
    this.image1 = image1;
    this.descuento = descuento;
    this.destacado = destacado;
  }
  
  calcularPorcentajeDescuento(): number {
    if (this.price !== 0 && this.pricedesc < this.price) {
      const descuento = this.price - this.pricedesc;
      const porcentajeDescuento = (descuento / this.price) * 100;
      return Math.round(porcentajeDescuento);
    } else {
      return 0;
    }
  }
}