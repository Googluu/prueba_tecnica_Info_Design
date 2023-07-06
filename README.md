# Prueba técnica Infodesign

En este repositorio se encuentra alojado el desarrollo de la prueba técnica

## Comenzando 🚀

Instrucciones generales de cómo correr el proyecto de forma local

### Pre-requisitos 📋

Para poder ejecutar el proyecto de forma local se deben tener instalados los siguientes programas:

1. Tener instalado Git para poder clonar el repositorio
2. Visual Studio Code (O cualquier otro editor de tecto de preferencia)
3. Tener instalado Mysql motor de base de datos
4. Node JS lenguaje de programación necesario para correr el aplicativo

### Instalación 🔧

Asumiendo que se cuentan con los programas previamente mencionados para poder ejecutar esta parte del proyecto, el siguiente paso a paso describirá cómo poder desplegar el proyecto de forma local

1. Se debe clonar el repositorio en una carpeta dentro del equipo en que se quiere desplegar
2. Luego se debe acceder a la carpeta raíz donde quedó el repositorio y allí abrir una consola de comandos y ejecutar el comando: "npm install"
3. Posteriormente crear una base de datos en MySQL la cual se llamará "pruebainfodesign", en el repositorio hay un .sql con el cual se importa a la base de datos mencionada anteriormente
5. Una vez finalizado el proceso, se ejecuta el comando: "npm start" 

## Despliegue 📦

Este comando "npm start o npm dev" desplegará de forma local la aplicación, la cual por defecto se despliega en el puerto 4000, en caso de que dicho puerto se encuentre ocupado o se requiere otro puerto, se debe escoger un puerto diferente en la constante de "port" que se encuentra en "src/index.js"

## Explicación ⚙️

Al iniciar la aplicación en la consola arrojara "El servidor se encuentra en el puerto 4000" junto con las conexiónes a las bases de datos

Se tienen 3 rutas las cuales se encuentran en el archivo "routes.js", esta ubicado en "src/routes/routes.js"
Las 3 rutas son:
  →/tramos
    || En esta ruta se tiene que brindar un json con fechainicial y fechafinal ejemplo { "fechainicial": "2010-01-01", "fechafinal": "2010-01-30" }, mostrara los tramos consumos, perdidas y costos
  
  →/cliente
    || En esta ruta se tiene que brindar un json con fechainicial y fechafinal ejemplo { "fechainicial": "2010-01-01", "fechafinal": "2010-01-30" }, mostrara los tramos consumos, perdidas y costos divididas por tipos de usuarios
  
  →/tramos-cliente
    || En esta ruta se tiene que brindar un json con fechainicial y fechafinal ejemplo { "fechainicial": "2010-01-01", "fechafinal": "2010-01-30" }, mostrara el top 20 peores Tramos/Cliente

## Construido con 🛠️

* [Node JS](https://nodejs.org/es/)
