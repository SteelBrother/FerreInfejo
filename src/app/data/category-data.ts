import { ICategory, Category } from '../models/category.model';

export const CATEGORIES: ICategory[] = [
  new Category(
    1,
    'Herramientas',
    'assets/imagenes/catdes_1s_b.jpg',
    'ar-card-1',
     'Herramientas'
  ), 
   new Category(
    2,
    'Sellos',
    'assets/imagenes/catdes_1i_b.jpg',
    'ar-card-2',
     'Sellos Mecánicos'
  ),
  new Category(
    3,
    'Rodamientos',
    'assets/imagenes/catdes_2s_b.jpg',
    'ar-card-3',
     'Rodamientos'
  ),
  new Category(
    4,
    'Seguridad',
    'assets/imagenes/catdes_2i_b.jpg',
    'ar-card-4',
     'Seguridad Industrial'
  ),
  new Category(
    5,
    'Abrasivos',
    'assets/imagenes/catdes_2i_b.jpg',
    'ar-card-4',
     'Abrasivos'
  ),
  new Category(
    6,
    'Pintura',
    'assets/imagenes/catdes_2i_b.jpg',
    'ar-card-4',
     'Pintura'
  ),
  new Category(
    7,
    'Adhesivos',
    'assets/imagenes/catdes_2i_b.jpg',
    'ar-card-4',
     'Adhesivos y vinipel'
  ),
  new Category(
    8,
    'Lubricantes',
    'assets/imagenes/catdes_2i_b.jpg',
    'ar-card-4',
     'Lubricantes'
  )
]