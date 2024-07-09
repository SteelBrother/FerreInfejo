import { ICategory, Category } from '../models/category.model';

export const CATEGORIES: ICategory[] = [
  new Category(
    1,
    'herramientas',
    'assets/imagenes/catdes_1s_b.jpg',
    'ar-card-1',
     'Herramientas'
  ), 
   new Category(
    2,
    'sellos',
    'assets/imagenes/catdes_1i_b.jpg',
    'ar-card-2',
     'Sellos Mecánicos'
  ),
  new Category(
    3,
    'rodamientos',
    'assets/imagenes/catdes_2s_b.jpg',
    'ar-card-3',
     'Rodamientos'
  ),
  new Category(
    4,
    'proteccion',
    'assets/imagenes/catdes_2i_b.jpg',
    'ar-card-4',
     'Seguridad Industrial'
  )
]