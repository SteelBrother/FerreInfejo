import { Product, Producto } from '../models/product.model';

export const PRODUCTS: Product[] = [
  new Producto(
    1,              // id
    '100815',         // ref
    'Juego de 4 brocasierras',    // name
    'Juego de 4 brocasierras bimetálicas y 1 mandril, Expert',
	'Brocasierras bimetálicas 10X mayor durabilidad que las de acero al carbono -Dientes de acero alta velocidad -Ranura amplia para fácil extracción de residuos -4 Brocasierras 1 1/4", 1 1/2", 2" y 2 1/8"1 Mandril 7/16"', // ficha tecnica
    85000,            // precio
    '0',             // precio al publico (siempre va en 0)
    85000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Truper',      // marca
    'assets/imagenes/KIT-5P.jpg', //img
   'assets/imagenes/KIT-5P.jpg', //img1
    true,           // descuento
    true           // destacado
  ),
    new Producto(
    2,              // id
    '23550',         // ref
    'Juego de 4 brocasierras acero',    // name
    'Juego de 4 brocasierras acero al carbono y 1 mandril, Pretul',  // description
	'Brocasierras de acero al carbono', // ficha tecnica
    12000,            // precio
    '0',             // precio al publico (siempre va en 0)
    12000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Pretul',      // marca
    'assets/imagenes/KITB-5X.jpg', //img
   'assets/imagenes/KITB-5X.jpg', //img1
   true,           // descuento
   true           // destacado
  ),
    new Producto(
    3,              // id
    '18100',         // ref
    'Segueta bimetálica de 12"',    // name
    'Segueta bimetálica de 12", 18 DPP, Truper Expert',  // description
	'Segueta bimetalica de alta calidad, su excelente rendimiento las hace destacar en el mercado, garantizando durabilidad, precisión y eficacia en cada corte -3X mayor durabilidad y flexibilidad que las de acero de alta velocidad (HSS) -Compatible con los arcos para segueta de las marcas más comunes del mercado -Para cortar madera, acero, tubos de aluminio, cobre PVC y otros materiales duros -Cortes más rápidos', // ficha tecnica
    2800,            // precio
    '0',             // precio al publico (siempre va en 0)
    2800,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Truper',      // marca
    'assets/imagenes/SBI-18.jpg', //img
   'assets/imagenes/SBI-18.jpg', //img1
   true,           // descuento
   true           // destacado
  ),
    new Producto(
    4,              // id
    '22851',         // ref
    'Remachadora 10"',    // name
    'Remachadora 10", Pretul',  // description
	'Cuerpo de acero y mango de PVC -4 boquillas de cambio rápido sin necesidad de herramienta para remaches de 3/32", 1/8", 5/32" y 3/16" -Ideal para trabajos en metal, reparación de canaletas y trabajos automotrices -Seguro para fácil mantenimiento', // ficha tecnica
    19000,            // precio
    '0',             // precio al publico (siempre va en 0)
    19000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Pretul',      // marca
    'assets/imagenes/RE-10P.jpg', //img
   'assets/imagenes/RE-10P.jpg', //img1
   true,           // descuento
   true           // destacado
  ),
  new Producto(
    5,              // id
    '17960',         // ref
    'Remachadora profesional 10"',    // name
    'Remachadora profesional 10", Truper',  // description
	 'Cuerpo de aluminio y mango de PVC -4 boquillas de cambio rápido sin necesidad de herramienta para remaches de 3/32", 1/8", 5/32" y 3/16" -Ideal para trabajos en metal, reparación de canaletas y trabajos automotrices -Seguro para fácil mantenimiento', // ficha tecnica 
    25000,            // precio
    '0',             // precio al publico (siempre va en 0)
    25000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Truper',      // marca
    'assets/imagenes/RE-9.jpg', //img
   'assets/imagenes/RE-9.jpg', //img1
    false,           // descuento
    false           // destacado
  ),
    new Producto(
    6,              // id
    '27201',         // ref
    'Prensa 3" de hierro',    // name
    'Prensa 3" de hierro dúctil para carpintería, Pretul',  // description
	'Fabricada de hierro dúctil -Mordaza grande que proporciona mayor estabilidad y evita el daño de la superficie -Para carpintería -Apertura máxima 3"', // ficha tecnica
    14000,            // precio
    '0',             // precio al publico (siempre va en 0)
    14000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Pretul',      // marca
    'assets/imagenes/PNT-3P.jpg', //img
   'assets/imagenes/PNT-3P.jpg', //img1
    false,           // descuento
    false           // destacado
  ),
    new Producto(
    7,              // id
    '27202',         // ref
    'Prensa 4" de hierro',    // name
    'Prensa 4" de hierro dúctil para carpintería, Pretul',  // description
	'Fabricada de hierro dúctil -Mordaza grande que proporciona mayor estabilidad y evita el daño de la superficie -Para carpintería -Apertura máxima 4"', // ficha tecnica
    18000,            // precio
    '0',             // precio al publico (siempre va en 0)
    18000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Pretul',      // marca
    'assets/imagenes/PNT-4P.jpg', //img
   'assets/imagenes/PNT-4P.jpg', //img1
    false,           // descuento
    false           // destacado
  ),
    new Producto(
    8,              // id
    '27203',         // ref
    'Prensa 5" de hierro',    // name
    'Prensa 5" de hierro dúctil para carpintería, Pretul',  // description
	'Fabricada de hierro dúctil -Mordaza grande que proporciona mayor estabilidad y evita el daño de la superficie -Para carpintería -Apertura máxima 5"', // ficha tecnica
    25000,            // precio
    '0',             // precio al publico (siempre va en 0)
    25000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Pretul',      // marca
    'assets/imagenes/PNT-5P.jpg', //img
   'assets/imagenes/PNT-5P.jpg', //img1
    false,           // descuento
    false           // destacado
  ),
    new Producto(
    9,              // id
    '27204',         // ref
    'Prensa 6" de hierro',    // name
    'Prensa 6" de hierro dúctil para carpintería, Pretul',  // description
	'Fabricada de hierro dúctil -Mordaza grande que proporciona mayor estabilidad y evita el daño de la superficie -Para carpintería -Apertura máxima 6"', // ficha tecnica
    32000,            // precio
    '0',             // precio al publico (siempre va en 0)
    32000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Pretul',      // marca
    'assets/imagenes/PNT-6P.jpg', //img
   'assets/imagenes/PNT-6P.jpg', //img1
    false,           // descuento
    false           // destacado
  ),  
    new Producto(
    10,              // id
    '17660',         // ref
    'Prensas de hierro dúctil',    // name
    'Prensas de hierro dúctil para carpintería 3"',  // description
	'Fabricadas de hierro dúctil -Mordazas grandes que proporcionan mayor estabilidad y evita el daño de la superficie', // ficha tecnica 
    20000,            // precio
    '0',             // precio al publico (siempre va en 0)
    20000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Truper',      // marca
    'assets/imagenes/PNT-3.jpg', //img
   'assets/imagenes/PNT-3.jpg', //img1
    false,           // descuento
    false           // destacado
  ), 
    new Producto(
    11,              // id
    '17661',         // ref
    'Prensas de hierro dúctil',    // name
    'Prensas de hierro dúctil para carpintería 4"',  // description
	'Fabricadas de hierro dúctil -Mordazas grandes que proporcionan mayor estabilidad y evita el daño de la superficie', // ficha tecnica 
    24000,            // precio
    '0',             // precio al publico (siempre va en 0)
    24000,            // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Truper',      // marca
    'assets/imagenes/PNT-4.jpg', //img
   'assets/imagenes/PNT-4.jpg', //img1
    false,           // descuento
    false           // destacado
  ),
    new Producto(
    12,              // id
    '17662',         // ref
    'Prensas de hierro dúctil',    // name
    'Prensas de hierro dúctil para carpintería 5"',  // description
	'Fabricadas de hierro dúctil -Mordazas grandes que proporcionan mayor estabilidad y evita el daño de la superficie', // ficha tecnica 
    35000,            // precio
    '0',             // precio al publico (siempre va en 0)
    35000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Truper',      // marca
    'assets/imagenes/PNT-5.jpg', //img
   'assets/imagenes/PNT-5.jpg', //img1
    false,           // descuento
    false           // destacado
  ),  
    new Producto(
    13,              // id
    '17663',         // ref
    'Prensas de hierro dúctil',    // name
    'Prensas de hierro dúctil para carpintería 6"',  // description
	'Fabricadas de hierro dúctil -Mordazas grandes que proporcionan mayor estabilidad y evita el daño de la superficie', // ficha tecnica 
    41000,            // precio
    '0',             // precio al publico (siempre va en 0)
    41000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Truper',      // marca
    'assets/imagenes/PNT-6.jpg', //img
   'assets/imagenes/PNT-6.jpg', //img1
    false,           // descuento
    false           // destacado
  ),
    new Producto(
    14,              // id
    '17663',         // ref
    'Prensas de hierro dúctil',    // name
    'Prensas de hierro dúctil para carpintería 8"',  // description
	'Fabricadas de hierro dúctil -Mordazas grandes que proporcionan mayor estabilidad y evita el daño de la superficie', // ficha tecnica 
    59000,            // precio
    '0',             // precio al publico (siempre va en 0)
    59000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Truper',      // marca
    'assets/imagenes/PNT-8.jpg', //img
   'assets/imagenes/PNT-8.jpg', //img1
    false,           // descuento
    false           // destacado
  ),
    new Producto(
    15,              // id
    '18592',         // ref
    'Tornillos de banco',    // name
    'Tornillos de banco uso industrial, hierro nodular 4"',  // description
	'Fundido en hierro nodular de alta resistencia para trabajo pesado -Mordazas de acero moleteadas para un mejor agarre -Mordazas inferiores redondas, para sujetar tubos sin dañarlos -Base giratoria 360° para ajuste multi-posición del tornillo -Para sujeción de múltiples materiales', // ficha tecnica 
    285000,            // precio
    '0',             // precio al publico (siempre va en 0)
    285000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Truper',      // marca
    'assets/imagenes/TA-4.jpg', //img
   'assets/imagenes/TA-4.jpg', //img1
    false,           // descuento
    false           // destacado
  ),
    new Producto(
    16,              // id
    '18593',         // ref
    'Tornillos de banco',    // name
    'Tornillos de banco uso industrial, hierro nodular 5"',  // description
	'Fundido en hierro nodular de alta resistencia para trabajo pesado -Mordazas de acero moleteadas para un mejor agarre -Mordazas inferiores redondas, para sujetar tubos sin dañarlos -Base giratoria 360° para ajuste multi-posición del tornillo -Para sujeción de múltiples materiales', // ficha tecnica 
    445000,            // precio
    '0',             // precio al publico (siempre va en 0)
    445000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Truper',      // marca
    'assets/imagenes/TA-5.jpg', //img
   'assets/imagenes/TA-5.jpg', //img1
    false,           // descuento
    false           // destacado
  ),
    new Producto(
    17,              // id
    '18594',         // ref
    'Tornillos de banco',    // name
    'Tornillos de banco uso industrial, hierro nodular 6"',  // description
	'Fundido en hierro nodular de alta resistencia para trabajo pesado -Mordazas de acero moleteadas para un mejor agarre -Mordazas inferiores redondas, para sujetar tubos sin dañarlos -Base giratoria 360° para ajuste multi-posición del tornillo -Para sujeción de múltiples materiales', // ficha tecnica 
    575000,            // precio
    '0',             // precio al publico (siempre va en 0)
    575000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Truper',      // marca
    'assets/imagenes/TA-6.jpg', //img
   'assets/imagenes/TA-6.jpg', //img1
    false,           // descuento
    false           // destacado
  ),
    new Producto(
    18,              // id
    '18595',         // ref
    'Tornillos de banco',    // name
    'Tornillos de banco uso industrial, hierro nodular 8"',  // description
	'Fundido en hierro nodular de alta resistencia para trabajo pesado -Mordazas de acero moleteadas para un mejor agarre -Mordazas inferiores redondas, para sujetar tubos sin dañarlos -Base giratoria 360° para ajuste multi-posición del tornillo -Para sujeción de múltiples materiales', // ficha tecnica 
    735000,            // precio
    '0',             // precio al publico (siempre va en 0)
    735000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Truper',      // marca
    'assets/imagenes/TA-8.jpg', //img
   'assets/imagenes/TA-8.jpg', //img1
    false,           // descuento
    false           // destacado
  ),
    new Producto(
    19,              // id
    '26039',         // ref
    'Tornillos de banco',    // name
    'Tornillos de banco, hierro gris, Pretul 4"',  // description
	'Fundido en hierro gris -Mordazas de acero moleteadas para un mejor agarre -Base giratoria 360° para ajuste multi-posición del tornillo -Para sujeción de múltiples materiales', // ficha tecnica 
    125000,            // precio
    '0',             // precio al publico (siempre va en 0)
    125000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Pretul',      // marca
    'assets/imagenes/TB-4P.jpg', //img
   'assets/imagenes/TB-4P.jpg', //img1
    false,           // descuento
    false           // destacado
  ),
    new Producto(
    20,              // id
    '26042',         // ref
    'Tornillos de banco',    // name
    'Tornillos de banco, hierro gris, Pretul 5"',  // description
	'Fundido en hierro gris -Mordazas de acero moleteadas para un mejor agarre -Base giratoria 360° para ajuste multi-posición del tornillo -Para sujeción de múltiples materiales', // ficha tecnica 
    175000,            // precio
    '0',             // precio al publico (siempre va en 0)
    175000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Pretul',      // marca
    'assets/imagenes/TB-5P.jpg', //img
   'assets/imagenes/TB-5P.jpg', //img1
    false,           // descuento
    false           // destacado
  ),
    new Producto(
    21,              // id
    '26043',         // ref
    'Tornillos de banco',    // name
    'Tornillos de banco, hierro gris, Pretul 6"',  // description
	'Fundido en hierro gris -Mordazas de acero moleteadas para un mejor agarre -Base giratoria 360° para ajuste multi-posición del tornillo -Para sujeción de múltiples materiales', // ficha tecnica 
    255000,            // precio
    '0',             // precio al publico (siempre va en 0)
    255000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Pretul',      // marca
    'assets/imagenes/TB-6P.jpg', //img
   'assets/imagenes/TB-6P.jpg', //img1
    false,           // descuento
    false           // destacado
  ),
    new Producto(
    22,              // id
    '26044',         // ref
    'Tornillos de banco',    // name
    'Tornillos de banco, hierro gris, Pretul 8"',  // description
	'Fundido en hierro gris -Mordazas de acero moleteadas para un mejor agarre -Base giratoria 360° para ajuste multi-posición del tornillo -Para sujeción de múltiples materiales', // ficha tecnica 
    465000,            // precio
    '0',             // precio al publico (siempre va en 0)
    465000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Pretul',      // marca
    'assets/imagenes/TB-8P.jpg', //img
   'assets/imagenes/TB-8P.jpg', //img1
    false,           // descuento
    false           // destacado
  ),  
    new Producto(
    23,              // id
    '24473',         // ref
    'Brochas mango de madera',    // name
    'Brochas uso general, mango de madera, Pretul 2"',  // description
	'100% Cerda natural -Mango de madera con orificio para colgar -Ideales para resinas, pegamentos, acetona, pintura y otros solventes', // ficha tecnica 
    1900,            // precio
    '0',             // precio al publico (siempre va en 0)
    1900,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Pintura',   // category
    'Pretul',      // marca
    'assets/imagenes/BRE-2.jpg', //img
   'assets/imagenes/BRE-2.jpg', //img1
    false,           // descuento
    false           // destacado
  ),
    new Producto(
    24,              // id
    '24475',         // ref
    'Brochas mango de madera',    // name
    'Brochas uso general, mango de madera, Pretul 3"',  // description
	'100% Cerda natural -Mango de madera con orificio para colgar -Ideales para resinas, pegamentos, acetona, pintura y otros solventes', // ficha tecnica 
    2500,            // precio
    '0',             // precio al publico (siempre va en 0)
    2500,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Pintura',   // category
    'Pretul',      // marca
    'assets/imagenes/BRE-3.jpg', //img
   'assets/imagenes/BRE-3.jpg', //img1
    false,           // descuento
    false           // destacado
  ),
    new Producto(
    25,              // id
    '24476',         // ref
    'Brochas mango de madera',    // name
    'Brochas uso general, mango de madera, Pretul 4"',  // description
	'100% Cerda natural -Mango de madera con orificio para colgar -Ideales para resinas, pegamentos, acetona, pintura y otros solventes', // ficha tecnica 
    3300,            // precio
    '0',             // precio al publico (siempre va en 0)
    3300,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Pintura',   // category
    'Pretul',      // marca
    'assets/imagenes/BRE-4.jpg', //img
   'assets/imagenes/BRE-4.jpg', //img1
    false,           // descuento
    false           // destacado
  ),
    new Producto(
    26,              // id
    '14087',         // ref
    'Pistola p/pintar succión HVHP',    // name
    'Pistola p/pintar succión HVHP vaso alum, 1.8mm, 2 vál Truper',  // description
	'Serie 300 tecnología HVHP (Alto volumen / Alta presión) ideal para trabajos que requieren máxima velocidad de aplicación en grandes superficies -Cuerpo y vaso de aluminio pulido de 1 L -Tobera y aguja de acero inoxidable -Boquilla de latón galvanizado con pulverizado fino -2 Válvulas de control (Flujo de material y tamaño de abanico)', // ficha tecnica 
    95000,            // precio
    '0',             // precio al publico (siempre va en 0)
    95000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Pintura',   // category
    'Truper',      // marca
    'assets/imagenes/PIPI-310.jpg', //img
   'assets/imagenes/PIPI-310.jpg', //img1
    false,           // descuento
    false           // destacado
  ),
    new Producto(
    27,              // id
    '11989',         // ref
    'Pistola de aire SERIE 400',    // name
    'Pistola de aire SERIE 400, de gravedad,vaso multiposición',  // description
	'Serie 400 tecnología LVMP (Bajo volumen / Media presión) ideal para usos generales a una velocidad óptima de aplicación -Cuerpo pulido y vaso de aluminio multiposición -Tobera y aguja de acero inoxidable -Boquillas de latón galvanizado con pulverizado fino 1mm -3 perillas de control: flujo de aire, flujo de material y tamaño de abanic', // ficha tecnica 
    59000,            // precio
    '0',             // precio al publico (siempre va en 0)
    59000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Pintura',   // category
    'Truper',      // marca
    'assets/imagenes/PIPI-411.jpg', //img
   'assets/imagenes/PIPI-411.jpg', //img1
    false,           // descuento
    false           // destacado
  ),
    new Producto(
    28,              // id
    '11095',         // ref
    'Pistola de aire SERIE 400',    // name
    'Pistola de aire SERIE 400, de gravedad,vaso multiposición',  // description
	'Serie 400 tecnología LVMP (Bajo volumen / Media presión) ideal para usos generales a una velocidad óptima de aplicación -Cuerpo pulido y vaso de aluminio multiposición -Tobera y aguja de acero inoxidable -Boquillas de latón galvanizado con pulverizado fino 1,4mm -3 perillas de control: flujo de aire, flujo de material y tamaño de abanic', // ficha tecnica 
    59000,            // precio
    '0',             // precio al publico (siempre va en 0)
    59000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Pintura',   // category
    'Truper',      // marca
    'assets/imagenes/PIPI-420.jpg', //img
   'assets/imagenes/PIPI-420.jpg', //img1
    false,           // descuento
    false           // destacado
  ),
    new Producto(
    29,              // id
    '13061',         // ref
    'Pistola de aire SERIE 400',    // name
    'Pistola de aire SERIE 400, de gravedad,vaso multiposición',  // description
	'Serie 400 tecnología LVMP (Bajo volumen / Media presión) ideal para usos generales a una velocidad óptima de aplicación -Cuerpo pulido y vaso de aluminio multiposición -Tobera y aguja de acero inoxidable -Boquillas de latón galvanizado con pulverizado fino 1,7mm -3 perillas de control: flujo de aire, flujo de material y tamaño de abanic', // ficha tecnica 
    59000,            // precio
    '0',             // precio al publico (siempre va en 0)
    59000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Pintura',   // category
    'Truper',      // marca
    'assets/imagenes/PIPI-421.jpg', //img
   'assets/imagenes/PIPI-421.jpg', //img1
    false,           // descuento
    false           // destacado
  ), 
    new Producto(
    30,              // id
    '13060',         // ref
    'Pistola de aire SERIE 400',    // name
    'Pistola de aire SERIE 400, de gravedad,vaso multiposición',  // description
	'Serie 400 tecnología LVMP (Bajo volumen / Media presión) ideal para usos generales a una velocidad óptima de aplicación -Cuerpo pulido y vaso de aluminio multiposición -Tobera y aguja de acero inoxidable -Boquillas de latón galvanizado con pulverizado fino 2mm -3 perillas de control: flujo de aire, flujo de material y tamaño de abanic', // ficha tecnica 
    59000,            // precio
    '0',             // precio al publico (siempre va en 0)
    59000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Pintura',   // category
    'Truper',      // marca
    'assets/imagenes/PIPI-422.jpg', //img
   'assets/imagenes/PIPI-422.jpg', //img1
    false,           // descuento
    false           // destacado
  ),
    new Producto(
    31,              // id
    '12129',         // ref
    'Pistola p/pintar gravedad HVLP',    // name
    'Pistola p/pintar gravedad HVLP vaso plástico, 1.7 mm, Truper',  // description
	'Serie 400 tecnología HVLP (Alto volumen / Baja presión) ideal para acabados finos, con máximo rendimiento de pintura y mayor control de aplicación -Cuerpo de aluminio y vaso plástico -Tobera y aguja de acero inoxidable -Boquilla de latón galvanizado con pulverizado fino -3 perillas de control: flujo de aire, flujo de material y tamaño de abanico', // ficha tecnica 
    95000,            // precio
    '0',             // precio al publico (siempre va en 0)
    95000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Pintura',   // category
    'Truper',      // marca
    'assets/imagenes/PIPI-441.jpg', //img
   'assets/imagenes/PIPI-441.jpg', //img1
    false,           // descuento
    false           // destacado
  ),  
    new Producto(
    32,              // id
    '14031',         // ref
    'Pistola p/pintar gravedad HVLP',    // name
    'Pistola p/pintar gravedad HVLP vaso plástico, 1.4 mm, Truper',  // description
	'Serie 400 tecnología HVLP (Alto Volumen / Baja presión) ideal para acabados finos, con máximo rendimiento de pintura y mayor control de aplicación -Vaso de nylon resistente a solventes -Tobera y aguja de acero inoxidable -Boquilla de latón galvanizado con pulverizado fino -3 perillas de control: flujo de aire, flujo de material y tamaño de abanico', // ficha tecnica 
    275000,            // precio
    '0',             // precio al publico (siempre va en 0)
    275000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Pintura',   // category
    'Truper',      // marca
    'assets/imagenes/PIPI-440X.jpg', //img
   'assets/imagenes/PIPI-440X.jpg', //img1
    false,           // descuento
    false           // destacado
  ),  
    new Producto(
    33,              // id
    '11223',         // ref
    'Nivel torpedo magnético de 9"',    // name
    'Nivel torpedo magnético de 9" con cuerpo de ABS, Truperr',  // description
	'Cuerpo magnético para facilitar el trabajo en superficies metálicas -Gotas resistentes a la abrasión y al impacto -Fácil lectura desde ángulos 0°, 45° y 90° -Puntas recubiertas de TPE contra impacto -Ventana de lectura superior', // ficha tecnica 
    12000,            // precio
    '0',             // precio al publico (siempre va en 0)
    12000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Truper',      // marca
    'assets/imagenes/NT-9.jpg', //img
   'assets/imagenes/NT-9.jpg', //img1
    false,           // descuento
    false           // destacado
  ),  
    new Producto(
    34,              // id
    '17054',         // ref
    'Nivel torpedo magnético de 10"',    // name
    'Nivel torpedo magnético de 10" con cuerpo de aluminio,Expert',  // description
	'Cuerpo de aluminio de uso rudo con protecciones de TPE/ABS contra impactos -Gotas resistentes a la abrasión y al impacto -Fácil lectura desde ángulos 0°, 45° y 90° -Ventana de lectura superior -Ranura en "V" que facilita su uso con tubos y mangueras', // ficha tecnica  
    30000,            // precio
    '0',             // precio al publico (siempre va en 0)
    30000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Truper',      // marca
    'assets/imagenes/NTX-9.jpg', //img
   'assets/imagenes/NTX-9.jpg', //img1
    false,           // descuento
    false           // destacado
  ),  
    new Producto(
    35,              // id
    '22454',         // ref
    'Nivel 12"',    // name
    'Nivel Pretul 30cm',  // description
	'Cuerpo de aluminio resistente a la corrosión -Gotas resistentes a la abrasión y al impacto que permiten una fácil lectura desde ángulos 0° y 90° -Borde contínuo para trazar', // ficha tecnica   
    11000,            // precio
    '0',             // precio al publico (siempre va en 0)
    11000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Pretul',      // marca
    'assets/imagenes/NP-12P.jpg', //img
   'assets/imagenes/NP-12P.jpg', //img1
    false,           // descuento
    false           // destacado
  ),  
   new Producto(
    36,              // id
    '22456',         // ref
    'Nivel 14"',    // name
    'Nivel Pretul 36cm',  // description
	'Cuerpo de aluminio resistente a la corrosión -Gotas resistentes a la abrasión y al impacto que permiten una fácil lectura desde ángulos 0° y 90° -Borde contínuo para trazar', // ficha tecnica   
    13000,            // precio
    '0',             // precio al publico (siempre va en 0)
    13000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Pretul',      // marca
    'assets/imagenes/NP-14P.jpg', //img
   'assets/imagenes/NP-14P.jpg', //img1
    false,           // descuento
    false           // destacado
  ), 
    new Producto(
    37,              // id
    '22458',         // ref
    'Nivel 18"',    // name
    'Nivel Pretul 46cm',  // description
	'Cuerpo de aluminio resistente a la corrosión -Gotas resistentes a la abrasión y al impacto que permiten una fácil lectura desde ángulos 0° y 90° -Borde contínuo para trazar', // ficha tecnica   
    17000,            // precio 
    '0',             // precio al publico (siempre va en 0)
    17000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Pretul',      // marca
    'assets/imagenes/NP-18P.jpg', //img
   'assets/imagenes/NP-18P.jpg', //img1
    false,           // descuento
    false           // destacado
  ),  
   new Producto(
    38,              // id
    '22460',         // ref
    'Nivel 24"',    // name
    'Nivel Pretul 61cm',  // description
	'Cuerpo de aluminio resistente a la corrosión -Gotas resistentes a la abrasión y al impacto que permiten una fácil lectura desde ángulos 0° y 90° -Borde contínuo para trazar', // ficha tecnica   
    20000,            // precio 
    '0',             // precio al publico (siempre va en 0)
    20000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Pretul',      // marca
    'assets/imagenes/NP-24P.jpg', //img
   'assets/imagenes/NP-24P.jpg', //img1
    false,           // descuento
    false           // destacado
  ),
    new Producto(
    39,              // id
    '17030',         // ref
    'Nivel profesional de 12"',    // name
    'Nivel profesional 30cm con protección de ABS, Truper',  // description
	'Cuerpo de aluminio tipo vigueta con protección de ABS contra impacto -Gotas reemplazables de alta visibilidad que permiten una fácil lectura desde ángulos 0° y 90° -Borde contínuo para trazar', // ficha tecnica
    17000,            // precio
    '0',             // precio al publico (siempre va en 0)
    17000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Truper',      // marca
    'assets/imagenes/NP-12.jpg', //img
   'assets/imagenes/NP-12.jpg', //img1
    false,           // descuento
    false           // destacado
  ),
    new Producto(
    40,              // id
    '17032',         // ref
    'Nivel profesional de 14"',    // name
    'Nivel profesional 36m con protección de ABS, Truper',  // description
	'Cuerpo de aluminio tipo vigueta con protección de ABS contra impacto -Gotas reemplazables de alta visibilidad que permiten una fácil lectura desde ángulos 0° y 90° -Borde contínuo para trazar', // ficha tecnica
    19000,            // precio
    '0',             // precio al publico (siempre va en 0)
    19000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Truper',      // marca
    'assets/imagenes/NP-14.jpg', //img
   'assets/imagenes/NP-14.jpg', //img1
    false,           // descuento
    false           // destacado
  ),
    new Producto(
    41,              // id
    '17034',         // ref
    'Nivel profesional de 18"',    // name
    'Nivel profesional 46cm con protección de ABS, Truper',  // description
	'Cuerpo de aluminio tipo vigueta con protección de ABS contra impacto -Gotas reemplazables de alta visibilidad que permiten una fácil lectura desde ángulos 0° y 90° -Borde contínuo para trazar', // ficha tecnica
    26000,            // precio
    '0',             // precio al publico (siempre va en 0)
    26000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Truper',      // marca
    'assets/imagenes/NP-18.jpg', //img
   'assets/imagenes/NP-18.jpg', //img1
    false,           // descuento
    false           // destacado
  ),
    new Producto(
    42,              // id
    '17036',         // ref
    'Nivel profesional de 24"',    // name
    'Nivel profesional 61cm con protección de ABS, Truper',  // description
	'Cuerpo de aluminio tipo vigueta con protección de ABS contra impacto -Gotas reemplazables de alta visibilidad que permiten una fácil lectura desde ángulos 0° y 90° -Borde contínuo para trazar', // ficha tecnica
    31000,            // precio
    '0',             // precio al publico (siempre va en 0)
    31000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Truper',      // marca
    'assets/imagenes/NP-24.jpg', //img
   'assets/imagenes/NP-24.jpg', //img1
    false,           // descuento
    false           // destacado
  ), 
   new Producto(
    43,              // id
    '17038',         // ref
    'Nivel profesional de 36"',    // name
    'Nivel profesional 91cm con protección de ABS, Truper',  // description
	'Cuerpo de aluminio tipo vigueta con protección de ABS contra impacto -Gotas reemplazables de alta visibilidad que permiten una fácil lectura desde ángulos 0° y 90° -Borde contínuo para trazar', // ficha tecnica
    45000,            // precio
    '0',             // precio al publico (siempre va en 0)
    45000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Truper',      // marca
    'assets/imagenes/NP-36.jpg', //img
   'assets/imagenes/NP-36.jpg', //img1
    false,           // descuento
    false           // destacado
  ),  
    new Producto(
    44,              // id
    '17040',         // ref
    'Nivel profesional de 48"',    // name
    'Nivel profesional 122cm con protección de ABS, Truper',  // description
	'Cuerpo de aluminio tipo vigueta con protección de ABS contra impacto -Gotas reemplazables de alta visibilidad que permiten una fácil lectura desde ángulos 0° y 90° -Borde contínuo para trazar', // ficha tecnica
    55000,            // precio
    '0',             // precio al publico (siempre va en 0)
    55000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Truper',      // marca
    'assets/imagenes/NP-48.jpg', //img
   'assets/imagenes/NP-48.jpg', //img1
    false,           // descuento
    false           // destacado
  ),
    new Producto(
    45,              // id
    '14625',         // ref
    'Nivel profesional de 18"',    // name
    'Nivel profesional 46cm magnético, Truper',  // description
	'Cuerpo robusto de aluminio de uso rudo tipo vigueta con protecciones de TPR contra impactos -Gotas de alta visibilidad que permiten una fácil lectura desde ángulos 0°, 45° y 90° -Ventana de vista superior con gota aumentada -Superficies maquinadas para mayor precisión -Borde contínuo para trazar', // ficha tecnica
    45000,            // precio
    '0',             // precio al publico (siempre va en 0)
    45000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Truper',      // marca
    'assets/imagenes/NP-18.jpg', //img
   'assets/imagenes/NP-18.jpg', //img1
    false,           // descuento
    false           // destacado
  ),
    new Producto(
    46,              // id
    '14626',         // ref
    'Nivel profesional de 24"',    // name
    'Nivel profesional 61cm magnético, Truper',  // description
	'Cuerpo robusto de aluminio de uso rudo tipo vigueta con protecciones de TPR contra impactos -Gotas de alta visibilidad que permiten una fácil lectura desde ángulos 0°, 45° y 90° -Ventana de vista superior con gota aumentada -Superficies maquinadas para mayor precisión -Borde contínuo para trazar', // ficha tecnica
    52000,            // precio
    '0',             // precio al publico (siempre va en 0)
    52000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Truper',      // marca
    'assets/imagenes/NP-24.jpg', //img
   'assets/imagenes/NP-24.jpg', //img1
    false,           // descuento
    false           // destacado
  ),  
   new Producto(
    47,              // id
    '14628',         // ref
    'Nivel profesional de 36"',    // name
    'Nivel profesional 91cm magnético, Truper',  // description
	'Cuerpo robusto de aluminio de uso rudo tipo vigueta con protecciones de TPR contra impactos -Gotas de alta visibilidad que permiten una fácil lectura desde ángulos 0°, 45° y 90° -Ventana de vista superior con gota aumentada -Superficies maquinadas para mayor precisión -Borde contínuo para trazar', // ficha tecnica
    65000,            // precio
    '0',             // precio al publico (siempre va en 0)
    65000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Truper',      // marca
    'assets/imagenes/NP-36.jpg', //img
   'assets/imagenes/NP-36.jpg', //img1
    false,           // descuento
    false           // destacado
  ),  
    new Producto(
    48,              // id
    '14629',         // ref
    'Nivel profesional de 48"',    // name
    'Nivel profesional 122cm magnético, Truper',  // description
	'Cuerpo robusto de aluminio de uso rudo tipo vigueta con protecciones de TPR contra impactos -Gotas de alta visibilidad que permiten una fácil lectura desde ángulos 0°, 45° y 90° -Ventana de vista superior con gota aumentada -Superficies maquinadas para mayor precisión -Borde contínuo para trazar', // ficha tecnica
    85000,            // precio
    '0',             // precio al publico (siempre va en 0)
    85000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Truper',      // marca
    'assets/imagenes/NP-48.jpg', //img
   'assets/imagenes/NP-48.jpg', //img1
    false,           // descuento
    false           // destacado
  ),  
    new Producto(
    49,              // id
    '20565',         // ref
    'Mazo de hule',    // name
    'Mazo de hule, 8oz, Pretul',  // description
	' Cabeza cilíndrica de neopreno que no daña la superficie y proporciona mayor área de impacto -Mango de madera que brinda comodidad durante el golpeo -Ideal para duela y zoclos', // ficha tecnica   
    7900,            // precio 
    '0',             // precio al publico (siempre va en 0)
    7900,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Pretul',      // marca
    'assets/imagenes/MH-8P.jpg', //img
   'assets/imagenes/MH-8P.jpg', //img1
    false,           // descuento
    false           // destacado
  ),  
    new Producto(
    50,              // id
    '16932',         // ref
    'Mazo de hule cabeza blanca',    // name
    'Mazo de hule, cabeza blanca 24oz',  // description
	'Cabeza blanca de hule 100% virgen, que no ensucia ni daña la superficie y proporciona mayor área de impacto -Mango de madera que brinda comodidad durante el golpeo -Ideal para duela, zoclos y superficies delicadas', // ficha tecnica
    23000,            // precio
    '0',             // precio al publico (siempre va en 0)
    23000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Truper',      // marca
    'assets/imagenes/MH-24.jpg', //img
   'assets/imagenes/MH-24.jpg', //img1
    false,           // descuento
    false           // destacado
  ),  
   new Producto(
    51,              // id
    '10851',         // ref
    'Martillo cabeza cónica',    // name
    'Martillos pulidos, mango de encino, uña curva, cabeza cónica',  // description
	'Cabeza cónica de acero totalmente pulido -Mango de madera de encino -Ideal para clavar o extraer clavos', // ficha tecnica
    18000,            // precio
    '0',             // precio al publico (siempre va en 0)
    18000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Truper',      // marca
    'assets/imagenes/MAC-27.jpg', //img
   'assets/imagenes/MAC-27.jpg', //img1
    false,           // descuento
    false           // destacado
  ),  
    new Producto(
    52,              // id
    '10560',         // ref
    'Martillo cabeza cónica',    // name
    'Martillo cabeza cónica 27 mm uña curva, mango fibra vidrio',  // description
	'Cabeza cónica de acero, totalmente pulida -Mango de fibra de vidrio con Grip antiderrapante de doble inyección que reducen vibraciones -Ideal para clavar o extraer clavos', // ficha tecnica
    25000,            // precio
    '0',             // precio al publico (siempre va en 0)
    25000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Truper',      // marca
    'assets/imagenes/MAC-27F.jpg', //img
   'assets/imagenes/MAC-27F.jpg', //img1
    false,           // descuento
    false           // destacado
  ),  
    new Producto(
    53,              // id
    '16736',         // ref
    'Rotomartillo 3/8"',    // name
    'Rotomartillo 3/8", 600W, Truper Pro',  // description
	'Motor de 600 W, montado sobre baleros de bolas para mayor vida útil y mejor desempeño -Selector de función taladro o rotomartillo, con velocidad reversible -Para perforaciones en concreto, madera y metal -Botón de uso continuo -Mango ergonómico con grip antiderrapante', // ficha tecnica
    115000,            // precio
    '0',             // precio al publico (siempre va en 0)
    115000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Truper',      // marca
    'assets/imagenes/ROTO-3-8A4.jpg', //img
   'assets/imagenes/ROTO-3-8A4.jpg', //img1
    false,           // descuento
    false           // destacado
  ),  
    new Producto(
    54,              // id
    '28112',         // ref
    'Rotomartillo 1/2"',    // name
    'Rotomartillo 1/2", 550W, Pretul',  // description
	'Motor de 550 W -Selector de función taladro o rotomartillo, con perilla de velocidad variable -Mango auxiliar de plástico con giro de 360° para mayor comodidad y mayor control en el perforado -Varilla de control de profundidad -Para perforaciones en concreto, madera y metal', // ficha tecnica
    105000,            // precio 
    '0',             // precio al publico (siempre va en 0)
    105000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Pretul',      // marca
    'assets/imagenes/ROTO-1-2P6.jpg', //img
   'assets/imagenes/ROTO-1-2P6.jpg', //img1
    false,           // descuento
    false           // destacado
  ),
    new Producto(
    55,              // id
    '13468',         // ref
    'Lubricante multiusos',    // name
    'Lubricante multiusos en aerosol 110ml, Truper',  // description
	'Penetrantes -Lubrican y liberan mecanismos trabados -Protegen contra la corrosión y absorben la humedad -Limpian superficies con polvo, grasa y pegamento -Para la mayoría de los materiales, excepto policarbonato y poliestireno', // ficha tecnica
    5500,            // precio
    '0',             // precio al publico (siempre va en 0)
    5500,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Truper',      // marca
    'assets/imagenes/WT-110.jpg', //img
   'assets/imagenes/WT-110.jpg', //img1
    false,           // descuento
    false           // destacado
  ),
  new Producto(
    56,              // id
    '13469',         // ref
    'Lubricante multiusos',    // name
    'Lubricante multiusos en aerosol 235ml, Truper',  // description
	'Penetrantes -Lubrican y liberan mecanismos trabados -Protegen contra la corrosión y absorben la humedad -Limpian superficies con polvo, grasa y pegamento -Para la mayoría de los materiales, excepto policarbonato y poliestireno', // ficha tecnica
    6900,            // precio
    '0',             // precio al publico (siempre va en 0)
    6900,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Truper',      // marca
    'assets/imagenes/WT-240.jpg', //img
   'assets/imagenes/WT-240.jpg', //img1
    false,           // descuento
    false           // destacado
  ),
  new Producto(
    57,              // id
    '13470',         // ref
    'Lubricante multiusos',    // name
    'Lubricante multiusos en aerosol 345ml, Truper',  // description
	'Penetrantes -Lubrican y liberan mecanismos trabados -Protegen contra la corrosión y absorben la humedad -Limpian superficies con polvo, grasa y pegamento -Para la mayoría de los materiales, excepto policarbonato y poliestireno', // ficha tecnica
    9700,            // precio
    '0',             // precio al publico (siempre va en 0)
    9700,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Truper',      // marca
    'assets/imagenes/WT-350.jpg', //img
   'assets/imagenes/WT-350.jpg', //img1
    false,           // descuento
    false           // destacado
  ),
  new Producto(
    58,              // id
    '13471',         // ref
    'Lubricante multiusos',    // name
    'Lubricante multiusos en aerosol 400ml, Truper',  // description
	'Penetrantes -Lubrican y liberan mecanismos trabados -Protegen contra la corrosión y absorben la humedad -Limpian superficies con polvo, grasa y pegamento -Para la mayoría de los materiales, excepto policarbonato y poliestireno', // ficha tecnica
    10000,            // precio
    '0',             // precio al publico (siempre va en 0)
    10000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Truper',      // marca
    'assets/imagenes/WT-400.jpg', //img
   'assets/imagenes/WT-400.jpg', //img1
    false,           // descuento
    false           // destacado
  ),
  new Producto(
    59,              // id
    '13472',         // ref
    'Lubricante multiusos',    // name
    'Lubricante multiusos en aerosol 550ml, Truper',  // description
	'Penetrantes -Lubrican y liberan mecanismos trabados -Protegen contra la corrosión y absorben la humedad -Limpian superficies con polvo, grasa y pegamento -Para la mayoría de los materiales, excepto policarbonato y poliestireno', // ficha tecnica
    14000,            // precio
    '0',             // precio al publico (siempre va en 0)
    14000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Truper',      // marca
    'assets/imagenes/WT-550.jpg', //img
   'assets/imagenes/WT-550.jpg', //img1
    false,           // descuento
    false           // destacado
  ),
  new Producto(
    60,              // id
    '15208',         // ref
    'Lima escofina',    // name
    'Lima escofina para herrar con zanco 14", Truper',  // description
	'Gran capacidad de desbaste -Cantos picados -Para superficies planas y esquinas', // ficha tecnica
    59000,            // precio
    '0',             // precio al publico (siempre va en 0)
    59000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Truper',      // marca
    'assets/imagenes/LEHE-14.jpg', //img
   'assets/imagenes/LEHE-14.jpg', //img1
    false,           // descuento
    false           // destacado
  ),
   new Producto(
    61,              // id
    '12983',         // ref
    'Linterna reflectora LED',    // name
    'Linterna reflectora LED 300 lm recargable, Truper',  // description
	'Distancia del haz de luz: 350 m -Modos de iluminación: Alto, bajo e intermitente y roja intermitente -Duración de la batería (runtime): 3 horas (alto), 5 horas (bajo) -Tiempo optimo de carga: 8 h -Batería ion litio, 2 x más tiempo de vida, mayor velocidad de carga', // ficha tecnica
    115000,            // precio
    '0',             // precio al publico (siempre va en 0)
    115000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Electrico',   // category
    'Truper',      // marca
    'assets/imagenes/LARE-300.jpg', //img
   'assets/imagenes/LARE-300.jpg', //img1
    false,           // descuento
    false           // destacado
  ),
    new Producto(
    62,              // id
    '14859',         // ref
    'Inyectora de grasa 14 oz',    // name
    'Inyectora de grasa 14 oz, 6000 PSI con grip antiderrapante, Truper',  // description
	'Cilindro de acero con cabeza de aluminio -Mango con cubierta antiderrapante para un mejor agarre -Palanca de recorrido corto que facilita el uso en espacios estrechos -Para lubricación de maquinaria industrial y automotriz', // ficha tecnica
    48000,            // precio
    '0',             // precio al publico (siempre va en 0)
    48000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Truper',      // marca
    'assets/imagenes/GRAS-13.jpg', //img
   'assets/imagenes/GRAS-13.jpg', //img1
    false,           // descuento
    false           // destacado
  ),
    new Producto(
    63,              // id
    '14860',         // ref
    'Inyectora de grasa 14 oz',    // name
    'Inyectora de grasa 14 oz, 8000 PSI con grip antiderrapante, Truper',  // description
	'Cilindro de acero con cabeza de aluminio -Mango con cubierta antiderrapante para un mejor agarre -Palanca de recorrido corto que facilita el uso en espacios estrechos -Para lubricación de maquinaria industrial y automotriz', // ficha tecnica
    49000,            // precio
    '0',             // precio al publico (siempre va en 0)
    49000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Truper',      // marca
    'assets/imagenes/GRAS-14.jpg', //img
   'assets/imagenes/GRAS-14.jpg', //img1
    false,           // descuento
    false           // destacado
  ),
    new Producto(
    64,              // id
    '21625',         // ref
    'Flexómetro 8 m',    // name
    'Flexómetro 8 m cinta 25 mm, display box con 6 pzas, Pretul',  // description
	'Cinta ancha que permite mayor extensión, cubierta de laca que evita rayaduras y desgaste -Fabricados en ABS', // ficha tecnica
    14000,            // precio
    '0',             // precio al publico (siempre va en 0)
    14000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Pretul',      // marca
    'assets/imagenes/PRO-8MEC.jpg', //img
   'assets/imagenes/PRO-8MEC.jpg', //img1
    false,           // descuento
    false           // destacado
  ),
    new Producto(
    65,              // id
    '13029',         // ref
    'Cargador c/arrancador de 200 A',    // name
    'Cargador c/arrancador de 200 A para baterías de 12 V, Truper',  // description
	'Cuerpo de lámina de acero -Caimanes de latón y cuerpo de plástico -Cables de 1.9 m, calibre 8 -Operación manual con selector de velocidad de carga -Fácil transporte con manija y ruedas', // ficha tecnica
    685000,            // precio
    '0',             // precio al publico (siempre va en 0)
    685000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Truper',      // marca
    'assets/imagenes/CARBA-200.jpg', //img
   'assets/imagenes/CARBA-200.jpg', //img1
    false,           // descuento
    false           // destacado
  ),
    new Producto(
    66,              // id
    '19589',         // ref
    'Cargador c/arrancador de 200 A',    // name
    'Cargador de 200 A para baterías de 12 V, con ruedas, Expert, Truper',  // description
 	'Microprocesador automático que detecta el estado de las baterías -Detección de conexión erronea para proteger la batería -Cuerpo de acero reforzado con indicadores LED -Caimanes de acero con cable de 1.8 m, calibre 8 -Transformador de uso rudo', // ficha tecnica
    925000,            // precio
    '0',             // precio al publico (siempre va en 0)
    925000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Truper',      // marca
    'assets/imagenes/CARBA-200.jpg', //img
   'assets/imagenes/CARBA-200.jpg', //img1
    false,           // descuento
    false           // destacado
  ),
    new Producto(
    67,              // id
    '16845',         // ref
    'Polipasto eléctrico de 400 kg',    // name
    'Polipasto eléctrico de 400 kg, Truper',  // description
 	'Motor de 850 W -Levantamiento 12 m línea sencilla y 6 m línea doble -Limitador de altura -Cable de acero -Control de mando con cable de 1.6 m', // ficha tecnica 
    925000,            // precio
    '0',             // precio al publico (siempre va en 0)
    925000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Truper',      // marca
    'assets/imagenes/CARBA-200.jpg', //img
   'assets/imagenes/CARBA-200.jpg', //img1
    false,           // descuento
    false           // destacado
  ),
  new Producto(
    67,              // id
    '16845',         // ref
    'Polipasto eléctrico de 400 kg',    // name
    'Polipasto eléctrico de 400 kg, Truper',  // description
    'Motor de 850 W -Levantamiento 12 m línea sencilla y 6 m línea doble -Limitador de altura -Cable de acero -Control de mando con cable de 1.6 m', // ficha tecnica
    735000,            // precio
    '0',             // precio al publico (siempre va en 0)
    735000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Truper',      // marca
    'assets/imagenes/POLE-400.jpg', //img
    'assets/imagenes/POLE-400.jpg', //img1
    false,           // descuento
    false           // destacado
  ),

new Producto(
    68,              // id
    '16846',         // ref
    'Polipasto eléctrico de 600 kg',    // name
    'Polipasto eléctrico de 600 kg, Truper',  // description
    'Motor de 1,180 W -Levantamiento 12 m línea sencilla y 6 m línea doble -Limitador de altura -Cable de acero -Control de mando con cable de 1.6 m', // ficha tecnica
    955000,            // precio
    '0',             // precio al publico (siempre va en 0)
    955000,             // precio si tiene descuento 
    0,             // el constructor siempre lo calcula, dejar en 0
    'Herramientas',   // category
    'Truper',      // marca
    'assets/imagenes/POLE-600.jpg', //img
    'assets/imagenes/POLE-600.jpg', //img1
    false,           // descuento
    false           // destacado
  ),
  new Producto(
    69,                        // id
    '16847',                   // ref
    'Polipasto eléctrico de 800 kg', // name
    'Polipasto eléctrico de 800 kg, Truper', // description
    'Motor de 1,350 W - Levantamiento 12 m línea sencilla y 6 m línea doble - Limitador de altura - Cable de acero - Soportes de montaje', // ficha tecnica
    1295000,                   // precio
    '0',                         // precio al publico (siempre va en 0)
    1295000,                   // precio si tiene descuento 
    0,                         // el constructor siempre lo calcula, dejar en 0
    'Herramientas',            // category
    'Truper',                  // marca
    'assets/imagenes/POLE-800.jpg', // img
    'assets/imagenes/POLE-800.jpg', // img1
    false,                     // descuento
    false                      // destacado
),
new Producto(
    70,                        // id
    '16848',                   // ref
    'Polipasto eléctrico de 1000 kg', // name
    'Polipasto eléctrico de 1000 kg, Truper', // description
    'Motor de 1500 W - Levantamiento 12 m línea sencilla y 6 m línea doble - Limitador de altura - Cable de acero - Control de mando con cable de 1.6 m', // ficha tecnica
    1845000,                   // precio
    '0',                         // precio al publico (siempre va en 0)
    1845000,                   // precio si tiene descuento 
    0,                         // el constructor siempre lo calcula, dejar en 0
    'Herramientas',            // category
    'Truper',                  // marca
    'assets/imagenes/POLE-1000.jpg', // img
    'assets/imagenes/POLE-1000.jpg', // img1
    false,                     // descuento
    false                      // destacado
),
new Producto(
    71,                        // id
    '16824',                   // ref
    'Polipasto de cadena de 1 ton', // name
    'Polipasto de cadena de 1 ton, Truper', // description
    'Levantamiento estándar 3 m - Sistema de frenado con doble trinquete que proporciona mayor seguridad - Mecanismo de triple engranaje - Cadena resistente a la oxidación - Ganchos de acero al cromo con giro de 360° y pestillos de seguridad', // ficha tecnica
    385000,                    // precio
    '0',                         // precio al publico (siempre va en 0)
    385000,                    // precio si tiene descuento 
    0,                         // el constructor siempre lo calcula, dejar en 0
    'Herramientas',            // category
    'Truper',                  // marca
    'assets/imagenes/POL-1.jpg', // img
    'assets/imagenes/POL-1.jpg', // img1
    false,                     // descuento
    false                      // destacado
),
new Producto(
    72,                        // id
    '16826',                   // ref
    'Polipasto de cadena de 2 ton', // name
    'Polipasto de cadena de 2 ton, Truper', // description
    'Levantamiento estándar 3 m - Sistema de frenado con doble trinquete que proporciona mayor seguridad - Mecanismo de triple engranaje - Cadena de carga fabricada en acero al manganeso, resistente y durable - Ganchos de acero al cromo con giro de 360° y pestillos de seguridad', // ficha tecnica
    515000,                    // precio
    '0',                         // precio al publico (siempre va en 0)
    515000,                    // precio si tiene descuento 
    0,                         // el constructor siempre lo calcula, dejar en 0
    'Herramientas',            // category
    'Truper',                  // marca
    'assets/imagenes/POL-2.jpg', // img
    'assets/imagenes/POL-2.jpg', // img1
    false,                     // descuento
    false                      // destacado
),
new Producto(
    73,                        // id
    '16829',                   // ref
    'Polipasto industrial de cadena, 10 toneladas', // name
    'Polipasto industrial de cadena, 10 toneladas, Truper', // description
    'Levantamiento estándar 3 m - Sistema de frenado con doble trinquete que proporciona mayor seguridad - Mecanismo de triple engranaje - Cadena de carga fabricada en acero al manganeso, resistente y durable - Ganchos de acero al cromo con giro de 360° y pestillos de seguridad', // ficha tecnica
    2005000,                   // precio
    '0',                         // precio al publico (siempre va en 0)
    2005000,                   // precio si tiene descuento 
    0,                         // el constructor siempre lo calcula, dejar en 0
    'Herramientas',            // category
    'Truper',                  // marca
    'assets/imagenes/POL-10.jpg', // img
    'assets/imagenes/POL-10.jpg', // img1
    false,                     // descuento
    false                      // destacado
),
new Producto(
    74,                                // id
    '16358',                           // ref
    'Rueda abrasiva p/esmeril 5X3/4"', // name
    'Rueda abrasiva p/esmeril 5X3/4", óxido de aluminio, grano 36, Truper', // description
    'Fabricada en óxido de aluminio - Ideal para esmerilar aceros al carbono y materiales ferrosos - Uso general - Incluye adaptadores de 1/2" - 5/8", 5/8" - 3/4" y 3/4" - 1"', // ficha tecnica
    13000,                             // precio
    '0',                         // precio al publico (siempre va en 0)
    13000,                             // precio si tiene descuento 
    0,                                 // el constructor siempre lo calcula, dejar en 0
    'Abrasivos',                    // category
    'Truper',                          // marca
    'assets/imagenes/PIES-53436.jpg', // img
    'assets/imagenes/PIES-53436.jpg', // img1
    false,                             // descuento
    false                              // destacado
),
new Producto(
    75,                                // id
    '16348',                           // ref
    'Rueda abrasiva p/esmeril 6X3/4"', // name
    'Rueda abrasiva p/esmeril 6X3/4", óxido de aluminio, grano 36, Truper', // description
    'Fabricada en óxido de aluminio - Ideal para esmerilar aceros al carbono y materiales ferrosos - Uso general - Incluye adaptadores de 1/2" - 5/8", 5/8" - 3/4" y 3/4" - 1"', // ficha tecnica
    18000,                             // precio
    '0',                         // precio al publico (siempre va en 0)
    18000,                             // precio si tiene descuento 
    0,                                 // el constructor siempre lo calcula, dejar en 0
    'Abrasivos',                    // category
    'Truper',                          // marca
    'assets/imagenes/PIES-63436.jpg', // img
    'assets/imagenes/PIES-63436.jpg', // img1
    false,                             // descuento
    false                              // destacado
),
new Producto(
    76,                                // id
    '16349',                           // ref
    'Rueda abrasiva p/esmeril 6X3/4"', // name
    'Rueda abrasiva p/esmeril 6X3/4", óxido de aluminio, grano 60, Truper', // description
    'Fabricada en óxido de aluminio - Ideal para esmerilar aceros al carbono y materiales ferrosos - Uso general - Incluye adaptadores de 1/2" - 5/8", 5/8" - 3/4" y 3/4" - 1"', // ficha tecnica
    18000,                             // precio
    '0',                         // precio al publico (siempre va en 0)
    18000,                             // precio si tiene descuento 
    0,                                 // el constructor siempre lo calcula, dejar en 0
    'Abrasivos',                    // category
    'Truper',                          // marca
    'assets/imagenes/PIES-63460.jpg', // img
    'assets/imagenes/PIES-63460.jpg', // img1
    false,                             // descuento
    false                              // destacado
),
new Producto(
    77,                                // id
    '16381',                           // ref
    'Rueda abrasiva p/esmeril 6 X 1"',  // name
    'Rueda abrasiva p/esmeril 6 X 1", óxido de aluminio, grano 36, Truper', // description
    'Fabricada en óxido de aluminio - Ideal para esmerilar aceros al carbono y materiales ferrosos - Uso general - Incluye adaptadores de 1/2" - 5/8", 5/8" - 3/4" y 3/4" - 1"', // ficha tecnica
    20000,                             // precio
    '0',                         // precio al publico (siempre va en 0)
    20000,                             // precio si tiene descuento 
    0,                                 // el constructor siempre lo calcula, dejar en 0
    'Abrasivos',                    // category
    'Truper',                          // marca
    'assets/imagenes/PIES-6136.jpg',  // img
    'assets/imagenes/PIES-6136.jpg',  // img1
    false,                             // descuento
    false                              // destacado
),
new Producto(
    78,                                // id
    '16382',                           // ref
    'Rueda abrasiva p/esmeril 6 X 1"',  // name
    'Rueda abrasiva p/esmeril 6 X 1", óxido de aluminio, grano 60, Truper', // description
    'Fabricada en óxido de aluminio - Ideal para esmerilar aceros al carbono y materiales ferrosos - Uso general - Incluye adaptadores de 1/2" - 5/8", 5/8" - 3/4" y 3/4" - 1"', // ficha tecnica
    20000,                             // precio
    '0',                         // precio al publico (siempre va en 0)
    20000,                             // precio si tiene descuento 
    0,                                 // el constructor siempre lo calcula, dejar en 0
    'Abrasivos',                    // category
    'Truper',                          // marca
    'assets/imagenes/PIES-6160.jpg',  // img
    'assets/imagenes/PIES-6160.jpg',  // img1
    false,                             // descuento
    false                              // destacado
),
new Producto(
    79,                                // id
    '16411',                           // ref
    'Rueda abrasiva p/esmeril 8 X 1"',  // name
    'Rueda abrasiva p/esmeril 8 X 1", óxido de aluminio, grano 36, Truper', // description
    'Fabricada en óxido de aluminio - Ideal para esmerilar aceros al carbono y materiales ferrosos - Uso general - Incluye adaptadores de 1/2" - 5/8", 5/8" - 3/4" y 3/4" - 1"', // ficha tecnica
    32000,                             // precio
    '0',                         // precio al publico (siempre va en 0)
    32000,                             // precio si tiene descuento 
    0,                                 // el constructor siempre lo calcula, dejar en 0
    'Abrasivos',                    // category
    'Truper',                          // marca
    'assets/imagenes/PIES-8136.jpg',  // img
    'assets/imagenes/PIES-8136.jpg',  // img1
    false,                             // descuento
    false                              // destacado
),
new Producto(
    80,                                // id
    '16412',                           // ref
    'Rueda abrasiva p/esmeril 8 X 1"',  // name
    'Rueda abrasiva p/esmeril 8 X 1", óxido de aluminio, grano 60, Truper', // description
    'Fabricada en óxido de aluminio - Ideal para esmerilar aceros al carbono y materiales ferrosos - Uso general - Incluye adaptadores de 1/2" - 5/8", 5/8" - 3/4" y 3/4" - 1"', // ficha tecnica
    32000,                             // precio
    '0',                         // precio al publico (siempre va en 0)
    32000,                             // precio si tiene descuento 
    0,                                 // el constructor siempre lo calcula, dejar en 0
    'Abrasivos',                    // category
    'Truper',                          // marca
    'assets/imagenes/PIES-8160.jpg',  // img
    'assets/imagenes/PIES-8160.jpg',  // img1
    false,                             // descuento
    false                              // destacado
),
new Producto(
    81,                                // id
    '12401',                           // ref
    'Rueda abrasiva p/esmeril 10X1 1/4"', // name
    'Rueda abrasiva p/esmeril 10X1 1/4", óxido aluminio, grano 36, Truper', // description
    'Fabricada en óxido de aluminio - Ideal para esmerilar aceros al carbono y materiales ferrosos - Uso general', // ficha tecnica
    55000,                             // precio
    '0',                         // precio al publico (siempre va en 0)
    55000,                             // precio si tiene descuento 
    0,                                 // el constructor siempre lo calcula, dejar en 0
    'Abrasivos',                    // category
    'Truper',                          // marca
    'assets/imagenes/PIES-1036.jpg',  // img
    'assets/imagenes/PIES-1036.jpg',  // img1
    false,                             // descuento
    false                              // destacado
),
new Producto(
    82,                                // id
    '12402',                           // ref
    'Rueda abrasiva p/esmeril 10X1 1/4"', // name
    'Rueda abrasiva p/esmeril 10X1 1/4", óxido aluminio, grano 60, Truper', // description
    'Fabricada en óxido de aluminio - Ideal para esmerilar aceros al carbono y materiales ferrosos - Uso general', // ficha tecnica
    55000,                             // precio
    '0',                         // precio al publico (siempre va en 0)
    55000,                             // precio si tiene descuento 
    0,                                 // el constructor siempre lo calcula, dejar en 0
    'Abrasivos',                    // category
    'Truper',                          // marca
    'assets/imagenes/PIES-1060.jpg',  // img
    'assets/imagenes/PIES-1060.jpg',  // img1
    false,                             // descuento
    false                              // destacado
),
new Producto(
    83,                                // id
    '28152',                           // ref
    'Juego de 3 cepillos multiusos',   // name
    'Juego de 3 cepillos multiusos para taladro, Pretul', // description
    'Cerdas de polipropileno - Zanco de cambio rápido - Para limpieza profunda de baños, alfombra, cocinas, rines, parrillas y tapicería - Compatibles con cualquier taladro - Ideal para esquinas, contornos, detalles y superficies planas', // ficha tecnica
    23000,                             // precio
    '0',                         // precio al publico (siempre va en 0)
    23000,                             // precio si tiene descuento 
    0,                                 // el constructor siempre lo calcula, dejar en 0
    'Herramientas',                    // category
    'Pretul',                          // marca
    'assets/imagenes/JCE-3P.jpg',     // img
    'assets/imagenes/JCE-3P.jpg',     // img1
    false,                             // descuento
    false                              // destacado
),
new Producto(
    84,                                // id
    '10652',                           // ref
    'Juego de 3 mini cepillos de alambre', // name
    'Juego de 3 mini cepillos de alambre 28 pinceles, Truper', // description
    'Cerdas en la parte superior para trabajo a detalle - Mangos de TPR antiderrapante - Ideal para limpieza en áreas de difícil acceso', // ficha tecnica
    9500,                              // precio
    '0',                         // precio al publico (siempre va en 0)
    9500,                              // precio si tiene descuento 
    0,                                 // el constructor siempre lo calcula, dejar en 0
    'Herramientas',                    // category
    'Truper',                          // marca
    'assets/imagenes/JCEA-3.jpg',    // img
    'assets/imagenes/JCEA-3.jpg',    // img1
    false,                             // descuento
    false                              // destacado
),
new Producto(
    85,                                     // id
    '11540',                                // ref
    'Cepillo curvo anti-chispa',            // name
    'Cepillo curvo anti-chispa, alambre ondulado, Truper', // description
    'Cerdas de acero latonado (anti-chispa) - Mango de plástico con diseño ergonómico - Para aplicaciones de reducción de estática - Para trabajar en cobre, plástico, plomo, aluminio y acero', // ficha tecnica
    4900,                                   // precio
    '0',                         // precio al publico (siempre va en 0)
    4900,                                   // precio si tiene descuento 
    0,                                      // el constructor siempre lo calcula, dejar en 0
    'Herramientas',                         // category
    'Truper',                               // marca
    'assets/imagenes/CEA-10.jpg',          // img
    'assets/imagenes/CEA-10.jpg',          // img1
    false,                                  // descuento
    false                                   // destacado
),
new Producto(
    86,                                     // id
    '20625',                                // ref
    'Carretilla 5.5 ft3 gris Imponchable',  // name
    'Carretilla 5.5 ft3 gris Imponchable, mangos de madera, Pretul', // description
    'Llanta imponchable suave y ligera de poliuretano con rin 3 aspas, facilita el acarreo y reduce la fatiga - Concha de lámina espesor 0.7 mm - Bastidores cuadrados de madera (37 x 37 mm) - Soportes de uso ligero', // ficha tecnica
    160000,                                 // precio
    '0',                         // precio al publico (siempre va en 0)
    160000,                                 // precio si tiene descuento 
    0,                                      // el constructor siempre lo calcula, dejar en 0
    'Herramientas',                         // category
    'Pretul',                               // marca
    'assets/imagenes/CAP-5WFFG.jpg',       // img
    'assets/imagenes/CAP-5WFFG.jpg',       // img1
    false,                                  // descuento
    false                                   // destacado
),
new Producto(
    87,                                     // id
    '20624',                                // ref
    'Carretilla 5.5 ft3 gris Neumática',    // name
    'Carretilla 5.5 ft3 gris Neumática, mangos de madera, Pretul', // description
    'Llanta neumática reforzada con rin de 3 aspas - Concha de lámina espesor 0.7 mm - Bastidores cuadrados de madera (37 x 37 mm) - Soportes de uso ligero', // ficha tecnica
    18000,                                  // precio
    '0',                         // precio al publico (siempre va en 0)
    18000,                                  // precio si tiene descuento 
    0,                                      // el constructor siempre lo calcula, dejar en 0
    'Herramientas',                         // category
    'Pretul',                               // marca
    'assets/imagenes/CAP-5WNDG.jpg',       // img
    'assets/imagenes/CAP-5WNDG.jpg',       // img1
    false,                                  // descuento
    false                                   // destacado
),
new Producto(
    88,                                     // id
    '11139',                                // ref
    'Caja para herramienta de 14"',         // name
    'Caja para herramienta de 14" con compartimentos, TRUPER', // description
    'Fabricada en polipropileno - Broche plástico - Compartimentos laterales en la tapa para almacenar piezas pequeñas sin necesidad de abrir la caja - Modelo ancho para mayor capacidad - Manija con diseño ergonómico para transportar cómodamente', // ficha tecnica
    25000,                                  // precio
    '0',                         // precio al publico (siempre va en 0)
    25000,                                  // precio si tiene descuento 
    0,                                      // el constructor siempre lo calcula, dejar en 0
    'Herramientas',                         // category
    'Truper',                               // marca
    'assets/imagenes/CHA-14NC.jpg',        // img
    'assets/imagenes/CHA-14NC.jpg',        // img1
    false,                                  // descuento
    false                                   // destacado
),
new Producto(
    89,                                     // id
    '11141',                                // ref
    'Caja para herramienta de 16"',         // name
    'Caja para herramienta de 16" con compartimentos, TRUPER', // description
    'Fabricada en polipropileno - Broche plástico - Compartimentos laterales en la tapa para almacenar piezas pequeñas sin necesidad de abrir la caja - Modelo ancho para mayor capacidad - Manija con diseño ergonómico para transportar cómodamente', // ficha tecnica
    35000,                                  // precio
    '0',                         // precio al publico (siempre va en 0)
    35000,                                  // precio si tiene descuento 
    0,                                      // el constructor siempre lo calcula, dejar en 0
    'Herramientas',                         // category
    'Truper',                               // marca
    'assets/imagenes/CHA-16NC.jpg',        // img
    'assets/imagenes/CHA-16NC.jpg',        // img1
    false,                                  // descuento
    false                                   // destacado
),
new Producto(
    90,                                     // id
    '11143',                                // ref
    'Caja para herramienta de 19"',          // name
    'Caja para herramienta de 19" con compartimentos, TRUPER', // description
    'Fabricada en polipropileno - Broche plástico - Compartimentos laterales en la tapa para almacenar piezas pequeñas sin necesidad de abrir la caja - Modelo ancho para mayor capacidad - Manija con diseño ergonómico para transportar cómodamente', // ficha tecnica
    55000,                                  // precio
    '0',                         // precio al publico (siempre va en 0)
    55000,                                  // precio si tiene descuento 
    0,                                      // el constructor siempre lo calcula, dejar en 0
    'Herramientas',                         // category
    'Truper',                               // marca
    'assets/imagenes/CHA-19NC.jpg',        // img
    'assets/imagenes/CHA-19NC.jpg',        // img1
    false,                                  // descuento
    false                                   // destacado
),
new Producto(
    91,                                     // id
    '11145',                                // ref
    'Caja para herramienta de 22"',          // name
    'Caja para herramienta de 22" con compartimentos, TRUPER', // description
    'Fabricada en polipropileno - Broche plástico - Compartimentos laterales en la tapa para almacenar piezas pequeñas sin necesidad de abrir la caja - Modelo ancho para mayor capacidad - Manija con diseño ergonómico para transportar cómodamente', // ficha tecnica
    69000,                                  // precio
    '0',                         // precio al publico (siempre va en 0)
    69000,                                  // precio si tiene descuento 
    0,                                      // el constructor siempre lo calcula, dejar en 0
    'Herramientas',                         // category
    'Truper',                               // marca
    'assets/imagenes/CHA-22NC.jpg',        // img
    'assets/imagenes/CHA-22NC.jpg',        // img1
    false,                                  // descuento
    false                                   // destacado
),
new Producto(
    92,                                     // id
    '20604',                                // ref
    'Caja para herramienta',                // name
    'Cajas para herramienta, con compartimentos, PretuL', // description
    'Fabricada en polipropileno - Broche plástico - Compartimentos laterales en la tapa para almacenar piezas pequeñas sin necesidad de abrir la caja - Manija con diseño ergonómico para transportar cómodamente', // ficha tecnica
    34000,                                  // precio
    '0',                         // precio al publico (siempre va en 0)
    34000,                                  // precio si tiene descuento 
    0,                                      // el constructor siempre lo calcula, dejar en 0
    'Herramientas',                         // category
    'PretuL',                               // marca
    'assets/imagenes/CHP-19CP.jpg',        // img
    'assets/imagenes/CHP-19CP.jpg',        // img1
    false,                                  // descuento
    false                                   // destacado
),
new Producto(
    93,                                     // id
    '20603',                                // ref
    'Caja para herramienta',                // name
    'Cajas para herramienta, con compartimentos, PretuL', // description
    'Fabricada en polipropileno - Broche plástico - Compartimentos laterales en la tapa para almacenar piezas pequeñas sin necesidad de abrir la caja - Manija con diseño ergonómico para transportar cómodamente', // ficha tecnica
    25000,                                  // precio
    '0',                         // precio al publico (siempre va en 0)
    25000,                                  // precio si tiene descuento 
    0,                                      // el constructor siempre lo calcula, dejar en 0
    'Herramientas',                         // category
    'PretuL',                               // marca
    'assets/imagenes/CHP-16CP.jpg',        // img
    'assets/imagenes/CHP-16CP.jpg',        // img1
    false,                                  // descuento
    false                                   // destacado
),
new Producto(
    94,                                     // id
    '20602',                                // ref
    'Caja para herramienta',                // name
    'Cajas para herramienta, con compartimentos, PretuL', // description
    'Fabricada en polipropileno - Broche plástico - Compartimentos laterales en la tapa para almacenar piezas pequeñas sin necesidad de abrir la caja - Manija con diseño ergonómico para transportar cómodamente', // ficha tecnica
    15000,                                  // precio
    '0',                         // precio al publico (siempre va en 0)
    15000,                                  // precio si tiene descuento 
    0,                                      // el constructor siempre lo calcula, dejar en 0
    'Herramientas',                         // category
    'PretuL',                               // marca
    'assets/imagenes/CHP-13CP.jpg',        // img
    'assets/imagenes/CHP-13CP.jpg',        // img1
    false,                                  // descuento
    false                                   // destacado
),
new Producto(
    95,                                     // id
    '20533',                                // ref
    'Caja para herramienta',                // name
    'Cajas para herramienta, sin compartimientos, Pretul', // description
    'Fabricada en polipropileno - Broche plástico - Manija con diseño ergonómico para transportar cómodamente', // ficha tecnica
    29000,                                  // precio
    '0',                         // precio al publico (siempre va en 0)
    29000,                                  // precio si tiene descuento 
    0,                                      // el constructor siempre lo calcula, dejar en 0
    'Herramientas',                         // category
    'Pretul',                               // marca
    'assets/imagenes/CHP-19P.jpg',         // img
    'assets/imagenes/CHP-19P.jpg',         // img1
    false,                                  // descuento
    false                                   // destacado
),
new Producto(
    96,                                     // id
    '20532',                                // ref
    'Caja para herramienta',                // name
    'Cajas para herramienta, sin compartimientos, Pretul', // description
    'Fabricada en polipropileno - Broche plástico - Manija con diseño ergonómico para transportar cómodamente', // ficha tecnica
    22000,                                  // precio
    '0',                         // precio al publico (siempre va en 0)
    22000,                                  // precio si tiene descuento 
    0,                                      // el constructor siempre lo calcula, dejar en 0
    'Herramientas',                         // category
    'Pretul',                               // marca
    'assets/imagenes/CHP-16P.jpg',         // img
    'assets/imagenes/CHP-16P.jpg',         // img1
    false,                                  // descuento
    false                                   // destacado
),
new Producto(
    97,                                     // id
    '20531',                                // ref
    'Caja para herramienta',                // name
    'Cajas para herramienta, sin compartimientos, Pretul', // description
    'Fabricada en polipropileno - Broche plástico - Manija con diseño ergonómico para transportar cómodamente', // ficha tecnica
    12000,                                  // precio
    '0',                         // precio al publico (siempre va en 0)
    12000,                                  // precio si tiene descuento 
    0,                                      // el constructor siempre lo calcula, dejar en 0
    'Herramientas',                         // category
    'Pretul',                               // marca
    'assets/imagenes/CHP-13P.jpg',         // img
    'assets/imagenes/CHP-13P.jpg',         // img1
    false,                                  // descuento
    false                                   // destacado
),
new Producto(
    98,                                     // id
    '16853',                                // ref
    'Bomba extractora de solventes',        // name
    'Bomba extractora de solventes con manija tipo "T", Truper', // description
    'Cuerpo de hierro - Tubo con acabado electrofosfatado para mayor resistencia a la oxidación - Tuerca de fijación al tambo de 200 litros - Empaque resistente a solventes - Ideal para uso automotriz, agrícola e industrial con alcohol, etanol, metanol, propanol, benceno, agua, glicerina, aceite, diesel, gasolina, queroseno, thinner, acetona, tolueno, xileno', // ficha tecnica
    89000,                                  // precio
    '0',                         // precio al publico (siempre va en 0)
    89000,                                  // precio si tiene descuento 
    0,                                      // el constructor siempre lo calcula, dejar en 0
    'Herramientas',                         // category
    'Truper',                               // marca
    'assets/imagenes/BOMEX-35.jpg',        // img
    'assets/imagenes/BOMEX-35.jpg',        // img1
    false,                                  // descuento
    false                                   // destacado
),
new Producto(
    99,                                     // id
    '16857',                                // ref
    'Bomba extractora de aceites',          // name
    'Bomba extractora de aceites con palanca, Truper', // description
    'Cuerpo y tubo fabricados de acero - Tubo telescópico ajustable a diferentes tamaños de tambo hasta 200 L - Tuerca de fijación al tambo de 200 litros - Empaque resistente de hule que evita fugas y no se deforma - Ideal para uso automotriz, agrícola e industrial con lubricantes y aceites grado de viscosidad hasta ISO VG 100', // ficha tecnica
    95000,                                  // precio
    '0',                         // precio al publico (siempre va en 0)
    95000,                                  // precio si tiene descuento 
    0,                                      // el constructor siempre lo calcula, dejar en 0
    'Herramientas',                         // category
    'Truper',                               // marca
    'assets/imagenes/BOMEX-31.jpg',        // img
    'assets/imagenes/BOMEX-31.jpg',        // img1
    false,                                  // descuento
    false                                   // destacado
),
new Producto(
    100,                                    // id
    '10067',                                // ref
    'Bomba extractora de aceites',          // name
    'Bomba extractora de aceites con manivela, Truper', // description
    'Cuerpo de hierro y tubo de acero - Tubo desmontable en 3 piezas, que facilita su almacenamiento y transporte - Tuerca de fijación al tambo de 200 litros - Empaque resistente de hule que evita fugas y no se deforma - Ideal para uso automotriz, agrícola e industrial con aceite, petróleo, queroseno y diesel', // ficha tecnica
    115000,                                 // precio
    '0',                         // precio al publico (siempre va en 0)
    115000,                                 // precio si tiene descuento 
    0,                                      // el constructor siempre lo calcula, dejar en 0
    'Herramientas',                         // category
    'Truper',                               // marca
    'assets/imagenes/BOMEX-25.jpg',        // img
    'assets/imagenes/BOMEX-25.jpg',        // img1
    false,                                  // descuento
    false                                   // destacado
),
new Producto(
    101,                                    // id
    '16856',                                // ref
    'Bomba extractora de ácidos',           // name
    'Bomba extractora de ácidos con manivela, Truper', // description
    'Cuerpo en resina especializada de alta resistencia química - Tubo ajustable a diferentes tamaños de tambo hasta 200 litros - Ideal para uso automotriz, agrícola e industrial con ácidos (nítrico, muriático y clorhídrico), soluciones alcalinas, alcohol, diesel, gasolina, agua, aceite, acetona y xileno - El uso con gasolina genera estática, conecte el tambo a tierra física con varilla de cobre antes de usar. Para ácidos consulte empaque - No usar con thinner', // ficha tecnica
    435000,                                 // precio
    '0',                         // precio al publico (siempre va en 0)
    435000,                                 // precio si tiene descuento 
    0,                                      // el constructor siempre lo calcula, dejar en 0
    'Herramientas',                         // category
    'Truper',                               // marca
    'assets/imagenes/BOMEX-28.jpg',        // img
    'assets/imagenes/BOMEX-28.jpg',        // img1
    false,                                  // descuento
    false                                   // destacado
),
new Producto(
    102,                                    // id
    '22403',                                // ref
    'Cutter 9 mm',                          // name
    'Cutter 9 mm plástico, Pretul',         // description
    'Cuchilla de acero',                    // ficha tecnica
    1200,                                   // precio
    '0',                         // precio al publico (siempre va en 0)
    1200,                                   // precio si tiene descuento 
    0,                                      // el constructor siempre lo calcula, dejar en 0
    'Herramientas',                         // category
    'Pretul',                               // marca
    'assets/imagenes/CUT-5PB.jpg',         // img
    'assets/imagenes/CUT-5PB.jpg',         // img1
    false,                                  // descuento
    false                                   // destacado
),
new Producto(
    103,                                    // id
    '16968',                                // ref
    'Cutter 9 mm reforzado',                // name
    'Cutter 9 mm reforzado de plástico con alma metálica, Truper', // description
    'Cuchilla de acero SK4 - Seguro automático', // ficha tecnica
    3100,                                   // precio
    '0',                         // precio al publico (siempre va en 0)
    3100,                                   // precio si tiene descuento 
    0,                                      // el constructor siempre lo calcula, dejar en 0
    'Herramientas',                         // category
    'Truper',                               // marca
    'assets/imagenes/CUT-5.jpg',           // img
    'assets/imagenes/CUT-5.jpg',           // img1
    false,                                  // descuento
    false                                   // destacado
),
new Producto(
    104,                                    // id
    '17904',                                // ref
    'Cutter 25 mm reforzado',               // name
    'Cutter 25 mm reforzado de plástico con alma metálica, Truper', // description
    'Cuchilla de acero SK4 - Seguro y cambio automático de cuchilla', // ficha tecnica
    14000,                                  // precio
    '0',                         // precio al publico (siempre va en 0)
    14000,                                  // precio si tiene descuento 
    0,                                      // el constructor siempre lo calcula, dejar en 0
    'Herramientas',                         // category
    'Truper',                               // marca
    'assets/imagenes/CUT-7.jpg',           // img
    'assets/imagenes/CUT-7.jpg',           // img1
    false,                                  // descuento
    false                                   // destacado
),
new Producto(
    105,                                    // id
    '24233',                                // ref
    'Pinzas porta electrodo 500A',          // name
    'Pinzas porta electrodo 500A, Pretul',  // description
    'Mordaza de latón para una excelente conductividad eléctrica y mayor tiempo de vida - La separación entre mango y palanca permite un manejo más cómodo del electrodo - Opresor para sujetar el cable', // ficha tecnica
    28000,                                  // precio
    '0',                         // precio al publico (siempre va en 0)
    28000,                                  // precio si tiene descuento 
    0,                                      // el constructor siempre lo calcula, dejar en 0
    'Herramientas',                         // category
    'Pretul',                               // marca
    'assets/imagenes/PPE-500P.jpg',        // img
    'assets/imagenes/PPE-500P.jpg',        // img1
    false,                                  // descuento
    false                                   // destacado
),
new Producto(
    106,                                    // id
    '24232',                                // ref
    'Pinzas porta electrodo 300A',          // name
    'Pinzas porta electrodo 300A, Pretul',  // description
    'Mordaza de latón para una excelente conductividad eléctrica y mayor tiempo de vida - La separación entre mango y palanca permite un manejo más cómodo del electrodo - Opresor para sujetar el cable', // ficha tecnica
    24000,                                  // precio
    '0',                         // precio al publico (siempre va en 0)
    24000,                                  // precio si tiene descuento 
    0,                                      // el constructor siempre lo calcula, dejar en 0
    'Herramientas',                         // category
    'Pretul',                               // marca
    'assets/imagenes/PPE-300P.jpg',        // img
    'assets/imagenes/PPE-300P.jpg',        // img1
    false,                                  // descuento
    false                                   // destacado
),
new Producto(
    107,                                    // id
    '14232',                                // ref
    'Pinza porta electrodo de 300 A',       // name
    'Pinza porta electrodo de 300 A, Truper', // description
    'Recubrimiento de fibra de vidrio resistente a temperaturas elevadas - Mordaza de latón para una excelente conductividad eléctrica y mayor tiempo de vida - La separación entre mango y palanca permite un manejo más cómodo del electrodo - Opresor para sujetar el cable', // ficha tecnica
    45000,                                  // precio
    '0',                         // precio al publico (siempre va en 0)
    45000,                                  // precio si tiene descuento 
    0,                                      // el constructor siempre lo calcula, dejar en 0
    'Herramientas',                         // category
    'Truper',                               // marca
    'assets/imagenes/PPE-300.jpg',         // img
    'assets/imagenes/PPE-300.jpg',         // img1
    false,                                  // descuento
    false                                   // destacado
),
new Producto(
    108,                                    // id
    '14233',                                // ref
    'Pinza porta electrodo de 500 A',       // name
    'Pinza porta electrodo de 300 A, Truper', // description
    'Recubrimiento de fibra de vidrio resistente a temperaturas elevadas - Mordaza de latón para una excelente conductividad eléctrica y mayor tiempo de vida - La separación entre mango y palanca permite un manejo más cómodo del electrodo - Opresor para sujetar el cable', // ficha tecnica
    45000,                                  // precio
    '0',                         // precio al publico (siempre va en 0)
    45000,                                  // precio si tiene descuento 
    0,                                      // el constructor siempre lo calcula, dejar en 0
    'Herramientas',                         // category
    'Truper',                               // marca
    'assets/imagenes/PPE-500.jpg',         // img
    'assets/imagenes/PPE-500.jpg',         // img1
    false,                                  // descuento
    false                                   // destacado
),
new Producto(
    109,                                    // id
    '18343',                                // ref
    'Pinza 8" ponchadora',                  // name
    'Pinza 8" ponchadora, módulos intercambiables, Truper', // description
    'Cuchilla de acero SK5 - Mango cubierto de TPR antiderrapante - Corta y pela cable - Uso en electrónica y telecomunicaciones - Para instalar conectores: RJ-9, RJ-11, RJ-12 y RJ-45', // ficha tecnica
    105000,                                 // precio
    '0',                         // precio al publico (siempre va en 0)
    105000,                                 // precio si tiene descuento 
    0,                                      // el constructor siempre lo calcula, dejar en 0
    'Herramientas',                         // category
    'Truper',                               // marca
    'assets/imagenes/PRJ-3X.jpg',           // img
    'assets/imagenes/PRJ-3X.jpg',           // img1
    false,                                  // descuento
    false                                   // destacado
),
new Producto(
    110,                                    // id
    '17376',                                // ref
    'Pinza 6" pela cables automática',      // name
    'Pinza 6" pela cables automática, 16 a 12 AWG, TRUPER EXPERT', // description
    'Cuchillas de acero SK5, 3X más durables que las de acero al carbono - Mango ergonómico de TPR antiderrapante - Perilla de ajuste y resorte que regresa la herramienta a su posición inicial - Permite quitar el aislante del cable de forma automática y sin dañarlo, hasta 1" de largo - Corta y pela cables sólidos y trenzados de 16 a 12 AWG', // ficha tecnica
    105000,                                 // precio
    '0',                         // precio al publico (siempre va en 0)
    105000,                                 // precio si tiene descuento 
    0,                                      // el constructor siempre lo calcula, dejar en 0
    'Herramientas',                         // category
    'TRUPER EXPERT',                        // marca
    'assets/imagenes/PE-CA-X.jpg',          // img
    'assets/imagenes/PE-CA-X.jpg',          // img1
    false,                                  // descuento
    false                                   // destacado
),
new Producto(
    111,                                    // id
    '22975',                                // ref
    'Juego de 3 pinzas de 6"',              // name
    'Juego de 3 pinzas de 6" mango de vinil, Pretul', // description
    'Fabricadas en acero al carbono - Mangos cubiertos de PVC', // ficha tecnica
    29000,                                  // precio
    '0',                         // precio al publico (siempre va en 0)
    29000,                                  // precio si tiene descuento 
    0,                                      // el constructor siempre lo calcula, dejar en 0
    'Herramientas',                         // category
    'Pretul',                               // marca
    'assets/imagenes/JGO-PIN3.jpg',         // img
    'assets/imagenes/JGO-PIN3.jpg',         // img1
    false,                                  // descuento
    false                                   // destacado
),
new Producto(
    112,                                    // id
    '23975',                                // ref
    'Juego de 3 pinzas, 2 de 6" y 1 de 8"', // name
    'Juego de 3 pinzas, 2 de 6" y 1 de 8", mangos de PVC, Pretul', // description
    'Fabricadas en acero al carbono - Mangos cubiertos de PVC', // ficha tecnica
    32000,                                  // precio
    '0',                         // precio al publico (siempre va en 0)
    32000,                                  // precio si tiene descuento 
    0,                                      // el constructor siempre lo calcula, dejar en 0
    'Herramientas',                         // category
    'Pretul',                               // marca
    'assets/imagenes/JGO-PIN-3B.jpg',       // img
    'assets/imagenes/JGO-PIN-3B.jpg',       // img1
    false,                                  // descuento
    false                                   // destacado
),
new Producto(
    113,                                    // id
    '22970',                                // ref
    'Juego de 4 pinzas mango de vinil',     // name
    'Juego de 4 pinzas mango de vinil, Pretul', // description
    'Fabricadas en acero al carbono - Mangos cubiertos de PVC', // ficha tecnica
    45000,                                  // precio
    '0',                         // precio al publico (siempre va en 0)
    45000,                                  // precio si tiene descuento 
    0,                                      // el constructor siempre lo calcula, dejar en 0
    'Herramientas',                         // category
    'Pretul',                               // marca
    'assets/imagenes/JGO-PIN4.jpg',         // img
    'assets/imagenes/JGO-PIN4.jpg',         // img1
    false,                                  // descuento
    false                                   // destacado
),
new Producto(
  114,              // id
  'BG103',         // ref
  'Guantes Snow',  // name
  'Guantes Snow',  // description
  'Tejido de hilaza 3 hilos calibre 7, 10 tallas', // ficha tecnica
  1940,            // precio
  '0',             // precio al publico (siempre va en '0')
  1940,            // precio si tiene descuento 
  0,               // el constructor siempre lo calcula, dejar en 0
  'Seguridad',     // category
  'Snow',          // marca
  'assets/imagenes/BG103_SNOW_1.jpg', // img
  'assets/imagenes/BG103_SNOW_1.jpg', // img1
  false,           // descuento
  false            // destacado
),

new Producto(
  115,              // id
  'BG132B',        // ref
  'Guantes Dark Rain',  // name
  'Guantes Dark Rain',  // description
  'Tejido en hilaza con puntos PVC doble cara, Azul oscuro', // ficha tecnica
  2190,            // precio
  '0',             // precio al publico (siempre va en '0')
  2190,            // precio si tiene descuento 
  0,               // el constructor siempre lo calcula, dejar en 0
  'Seguridad',     // category
  'Snow',          // marca
  'assets/imagenes/BG132_DARK_RAIN.jpg', // img
  'assets/imagenes/BG132_DARK_RAIN.jpg', // img1
  false,           // descuento
  false            // destacado
),

new Producto(
  116,              // id
  'BG174BF',       // ref
  'Guantes Smooth Rob',  // name
  'Guantes Smooth Rob',  // description
  'En poliéster recubierto en nitrilo, calibre13, color negro palma azul', // ficha tecnica
  4120,            // precio
  '0',             // precio al publico (siempre va en '0')
  4120,            // precio si tiene descuento 
  0,               // el constructor siempre lo calcula, dejar en 0
  'Seguridad',     // category
  'Snow',          // marca
  'assets/imagenes/BG174BF_SMOOTH_ROB.jpg', // img
  'assets/imagenes/BG174BF_SMOOTH_ROB.jpg', // img1
  false,           // descuento
  false            // destacado
),

new Producto(
  117,              // id
  'BG2301W',       // ref
  'Guantes Canvas White',  // name
  'Guantes Canvas White',  // description
  'Guante de algodón color blanco con puño elástico', // ficha tecnica
  6190,            // precio
  '0',             // precio al publico (siempre va en '0')
  6190,            // precio si tiene descuento 
  0,               // el constructor siempre lo calcula, dejar en 0
  'Seguridad',     // category
  'Snow',          // marca
  'assets/imagenes/BG230W_CANVAS_WHITE.jpg', // img
  'assets/imagenes/BG230W_CANVAS_WHITE.jpg', // img1
  false,           // descuento
  false            // destacado
),

new Producto(
  118,              // id
  'BG442',         // ref
  'Guantes Meca 1',  // name
  'Guantes Meca 1',  // description
  'Hilaza cubierto en nitrilo liso, puño elástico cerrado', // ficha tecnica
  6060,            // precio
  '0',             // precio al publico (siempre va en '0')
  6060,            // precio si tiene descuento 
  0,               // el constructor siempre lo calcula, dejar en 0
  'Seguridad',     // category
  'Snow',          // marca
  'assets/imagenes/BG442_MECA1.jpg', // img
  'assets/imagenes/BG442_MECA1.jpg', // img1
  false,           // descuento
  false            // destacado
),
new Producto(
  119,              // id
  'BG001',         // ref
  'Guantes Ni',  // name
  'Guantes Ni',  // description
  '100% nitrilo, calibre 4, liso, uso industrial, sin talco, ambidiestro, azul', // ficha tecnica
  24860,            // precio
  '0',             // precio al publico (siempre va en '0')
  24860,            // precio si tiene descuento 
  0,               // el constructor siempre lo calcula, dejar en 0
  'Seguridad',     // category
  'Snow',          // marca
  'assets/imagenes/BG001_NI.jpg', // img
  'assets/imagenes/BG001_NI.jpg', // img1
  false,           // descuento
  false            // destacado
),

new Producto(
  120,              // id
  'BG190S',        // ref
  'Guantes Power Shark',  // name
  'Guantes Power Shark',  // description
  'Antiimpacto, textil anticorte nivel 5, recubierto en espuma de nitrilo acabado arenoso, refuerzo entre pulgar e índice y moldes en TPR', // ficha tecnica
  22330,            // precio
  '0',             // precio al publico (siempre va en '0')
  22330,            // precio si tiene descuento 
  0,               // el constructor siempre lo calcula, dejar en 0
  'Seguridad',     // category
  'Snow',          // marca
  'assets/imagenes/BG190S_POWER_SHARK1.jpg', // img
  'assets/imagenes/BG190S_POWER_SHARK1.jpg', // img1
  false,           // descuento
  false            // destacado
),

new Producto(
  121,              // id
  'BG199',         // ref
  'Guantes Cut (PU)',  // name
  'Guantes Cut (PU)',  // description
  'Anticorte nivel 5 recubierto en poliuretano', // ficha tecnica
  9530,            // precio
  '0',             // precio al publico (siempre va en '0')
  9530,            // precio si tiene descuento 
  0,               // el constructor siempre lo calcula, dejar en 0
  'Seguridad',     // category
  'Snow',          // marca
  'assets/imagenes/BG199_CUT_PU.jpg', // img
  'assets/imagenes/BG199_CUT_PU.jpg', // img1
  false,           // descuento
  false            // destacado
),

new Producto(
  122,              // id
  'BG3001Y',       // ref
  'Guantes Calf 1',  // name
  'Guantes Calf 1',  // description
  'Guante vaqueta sencillo color amarillo', // ficha tecnica
  5820,            // precio
  '0',             // precio al publico (siempre va en '0')
  5820,            // precio si tiene descuento 
  0,               // el constructor siempre lo calcula, dejar en 0
  'Seguridad',     // category
  'Snow',          // marca
  'assets/imagenes/BG3001Y_CALF1.jpg', // img
  'assets/imagenes/BG3001Y_CALF1.jpg', // img1
  false,           // descuento
  false            // destacado
),

new Producto(
  123,              // id
  'BG3510Y',       // ref
  'Guantes Max',  // name
  'Guantes Max',  // description
  'Refuerzo en palma, índice y pulgar, cosido en fibra de aramida, retardante al fuego con dulceabrigo, 16" CON LOGO', // ficha tecnica
  7500,            // precio
  '0',             // precio al publico (siempre va en '0')
  7500,            // precio si tiene descuento 
  0,               // el constructor siempre lo calcula, dejar en 0
  'Seguridad',     // category
  'Snow',          // marca
  'assets/imagenes/BG3510Y_MAX.jpg', // img
  'assets/imagenes/BG3510Y_MAX.jpg', // img1
  false,           // descuento
  false            // destacado
),

new Producto(
  124,              // id
  'BYG0017',       // ref
  'Monolentes Hawkeye',  // name
  'Monolentes Hawkeye',  // description
  'Monolentes con protector lateral y ventilación directa', // ficha tecnica
  4650,            // precio
  '0',             // precio al publico (siempre va en '0')
  4650,            // precio si tiene descuento 
  0,               // el constructor siempre lo calcula, dejar en 0
  'Seguridad',     // category
  'Snow',          // marca
  'assets/imagenes/BYG0017_HAWKEYE.jpg', // img
  'assets/imagenes/BYG0017_HAWKEYE.jpg', // img1
  false,           // descuento
  false            // destacado
),

new Producto(
  125,              // id
  'BEG',           // ref
  'Protector auditivo Pino',  // name
  'Protector auditivo Pino',  // description
  'Protector auditivo de inserción 3 membranas en caja individual, con TPR color verde', // ficha tecnica
  1270,            // precio
  '0',             // precio al publico (siempre va en '0')
  1270,            // precio si tiene descuento 
  0,               // el constructor siempre lo calcula, dejar en 0
  'Seguridad',     // category
  'Snow',          // marca
  'assets/imagenes/BEG_PINO_1.jpg', // img
  'assets/imagenes/BEG_PINO_1.jpg', // img1
  false,           // descuento
  false            // destacado
),

  // Continuar con más productos si es necesario
];


