## Recursos del proyecto
https://primeng.org/ **PrimeNG**
https://v17.angular.io/api?query=pipe  **Documentación Pipes**

### Instalación PrimeNG
npm install primeng --save
npm install primeicons --save

**En el archivo Angular.json debo poner los estilos**
"styles": [
   "node_modules/primeicons/primeicons.css",
    "node_modules/primeng/resources/themes/lara-dark-blue/theme.css",
    "node_modules/primeng/resources/primeng.min.css"
]
## Configuración Prime NG

En el **app.components.ts** usas lo siguiente
import { PrimeNGConfig } from 'primeng/api';
Y dentro de la clase pones lo siguiente...

constructor(private primengConfig: PrimeNGConfig) {}
ngOnInit() {
    this.primengConfig.ripple = true;
}

## Ubicar todas las importaciones de los componentes de PrimeNG en un sólo módulo.
Creo un módulo en la raiz del proyecto con el Angular CLI, e importo todos los
módulos del primeNg aquí, luego los pongo en los exports.
Este módulo es el que voy a importar en los módulos de mi proyecto donde vaya a usar los componentes del primeNg.
Recordar importar en el módulo principal **app.module.ts** de la aplicación el **BrowserAnimationsModule**

## Prime Flex
Es una librería que se usa junto con primeNg para agregarle clases css al proyecto 
-> https://primeflex.org/.

**npm install primeflex** y después en el Angular.json, en el item de styles pego lo siguiente 
**/node_modules/primeflex/primeflex.min.css**

Es decir el styles del Angular.json queda de la siguiente manera después de todos los ajustes:
"styles": [
    "src/styles.css",
    "node_modules/primeicons/primeicons.css",
    "node_modules/primeng/resources/themes/lara-dark-indigo/theme.css",
    "node_modules/primeng/resources/primeng.min.css",
    "node_modules/primeflex/primeflex.min.css"
]

## Pipe Currency - Código de la moneda
El código de la moneda de cada país está definido por el ISO 4217, este código es el que usa el pipe
currency entre sus parámetros.

