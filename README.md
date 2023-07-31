# Prueba Técnica Info Design

Este repositorio contiene el código del front-end y back-end desarrollado para la Prueba Técnica de Info Design. El objetivo de este proyecto es construir una aplicación web que permita visualizar y analizar los datos expuestos por el back-end proporcionado.

## Requisitos Previos

Antes de utilizar o clonar este repositorio, asegúrate de tener instalado lo siguiente en tu máquina:

1. Node.js: Asegúrate de tener Node.js instalado en tu computadora. Puedes descargar la última versión desde el sitio web oficial: https://nodejs.org/

2. NPM o Yarn: El proyecto utiliza NPM (Node Package Manager) para gestionar las dependencias. Si prefieres usar Yarn, puedes instalarlo siguiendo las instrucciones en: https://yarnpkg.com/

## Pasos para utilizar el repositorio

1. Clonar el repositorio: Para obtener el código, puedes clonar este repositorio utilizando Git en tu terminal o descargarlo como archivo ZIP desde GitHub.
```markdown
git clone https://github.com/Googluu/prueba_tecnica_Info_Design.git
```
**cd prueba_tecnica_Info_Design**

2. Instalar dependencias: Una vez que hayas clonado el repositorio, navega a la carpeta del proyecto y asegúrate de instalar las dependencias necesarias.
```markdown
npm install
# o, si prefieres usar Yarn
yarn
```

3. Configurar el backend: Asegúrate de que el servidor del backend esté funcionando y accesible desde la dirección http://localhost:4000.

4. Iniciar la aplicación: Puedes iniciar la aplicación con el siguiente comando:
```markdown
npm start
# o, si prefieres usar Yarn
yarn start
```

5. Visualizar la aplicación: Una vez que la aplicación esté en funcionamiento, podrás acceder a ella desde tu navegador en la dirección http://localhost:5173. Aquí encontrarás la página de inicio con información sobre la prueba técnica y la funcionalidad principal del proyecto.

# Funcionalidades Principales
El desarrollado para esta prueba técnica incluye las siguientes funcionalidades principales:

1. Visualización de Datos: La página de inicio muestra un resumen de la prueba técnica y una descripción de las funcionalidades esperadas.

2. Gráficas Interactivas: El proyecto utiliza la librería react-chartjs-2 para generar gráficas interactivas que muestran información histórica sobre tramos y consumos.

3. Tablas Interactivas: Se han implementado tablas interactivas utilizando la librería react-bootstrap-table-next. Las tablas permiten filtrar y ordenar los datos para una mejor exploración.

4. Filtros por Fecha: Se ha añadido un filtro por fechas que permite seleccionar un rango específico para visualizar los datos históricos.

5. Diseño Atractivo: Se ha utilizado Bootstrap para mejorar la apariencia y el diseño de la página.

6. Comunicación con el Backend: La aplicación se conecta con el servidor del backend mediante peticiones HTTP para obtener los datos necesarios para su visualización.

## Notas adicionales

Siéntete libre de explorar y modificar el código según tus necesidades o para agregar funcionalidades adicionales.

La aplicación ha sido desarrollada con React y se han utilizado librerías populares para gráficas y tablas, pero estás libre de utilizar otras tecnologías o enfoques según tu experiencia y preferencia.

Recuerda consultar la documentación de las librerías utilizadas para obtener información detallada sobre cómo implementar las funcionalidades adicionales.

¡Buena suerte y disfruta desarrollando la aplicación! Si tienes alguna duda o problema, no dudes en contactarme.