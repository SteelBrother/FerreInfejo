import { ICategory, Category } from '../models/category.model';

export const CATEGORIES: ICategory[] = [
  new Category(
    1,
    'herramientas',
    'assets/imagenes/catdes_1s_b.jpg',
    'ar-card-1',
     'Pinturas y Acabados'
  ), 
   new Category(
    2,
    'abrasivos',
    'assets/imagenes/catdes_1i_b.jpg',
    'ar-card-2',
     'Pinturas y Acabados'
  ),
  new Category(
    3,
    'pinturas',
    'assets/imagenes/catdes_2i_b.jpg',
    'ar-card-3',
     'Pinturas y Acabados'
  ),
  new Category(
    4,
    'proteccion',
    'assets/imagenes/catdes_2s_b.jpg',
    'ar-card-4',
     'Pinturas y Acabados'
  )
]