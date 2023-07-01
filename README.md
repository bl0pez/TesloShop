<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Teslo Api

1. Clonar el repositorio
2. Instalar las dependencias
```bash
npm install
```
3. clone el archivo .env.example y renombrelo a .env
4. Configurar las variables de entorno en el archivo .env
5. Levantar la base de datos con docker-compose
```bash	
docker-compose up -d
```
6. Ejecutar el proyecto
```bash
npm run start:dev
```



### Dependencies

Permite leer variables de entorno desde un archivo .env
```bash
npm install @nestjs/config 
```
Ayuda con el manejo de la base de datos
```bash
npm install --save @nestjs/typeorm typeorm pg
```
