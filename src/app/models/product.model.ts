export interface Product {
  id: number;
  ref:string;
  name: string;
  description: string;
  fichatec:string;
  price: number;
  pricepublic:string;
  pricedesc: number;
  porcentajedescuento: number; // Asegúrate de incluir este campo si es necesario
  category: string;
  marca:string;
  mainimage: string; 
  image1: string; 
  descuento: boolean;
  destacado: boolean;
  
  calcularPrecioPublico(): string; // Cambiado a string
  calcularPorcentajeDescuento(): number;// Método para calcular el porcentaje de descuento
}
// Implementación de la interfaz en una clase concreta
export class Producto implements Product {
  id: number;
  ref:string;
  name: string;
  description: string;
  fichatec:string;
  price: number;
  pricepublic:string;
  pricedesc: number;
  porcentajedescuento: number; // Puedes calcular esto si es necesario en la clase
  category: string;
  marca:string;
  mainimage: string; 
  image1: string; 
  descuento: boolean;
  destacado: boolean;
    
  constructor(id: number, ref:string,name: string, fichatec:string, description: string, price: number,pricepublic:string, pricedesc: number, porcentajedescuento: number, category: string,marca:string, mainimage: string, image1: string,descuento: boolean, destacado: boolean) {
    this.id = id;
    this.ref = ref;
    this.name = name;
    this.description = description;
    this.fichatec = fichatec;
    this.price = price;
    this.pricepublic = this.calcularPrecioPublico();
    this.pricedesc = pricedesc;
    this.porcentajedescuento = this.calcularPorcentajeDescuento();
    this.category = category;
    this.marca = marca;
    this.mainimage = mainimage;
    this.image1 = image1;
    this.descuento = descuento;
    this.destacado = destacado;
  }
  
  calcularPorcentajeDescuento(): number {
    const pricedescConIncremento = this.pricedesc * 1.4;
    const priceConIncremento = this.price * 1.4;
  
    if (priceConIncremento !== 0 && pricedescConIncremento < priceConIncremento) {
      const descuento = priceConIncremento - pricedescConIncremento;
      const porcentajeDescuento = (descuento / priceConIncremento) * 100;
      return Math.round(porcentajeDescuento);
    } else {
      return 0;
    }
  }
  

  calcularPrecioPublico(): string {
    if (this.price !== 0) {
      const psp = this.price * 1.4; // Sumar 40% al precio original
      return psp.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
    } else {
      return "0";
    }
  }
}