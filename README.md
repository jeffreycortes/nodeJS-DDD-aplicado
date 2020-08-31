# Api-Tin-V1-Mock - 20200415
Este proyecto es una mockup de los servicios y contratos establecidos para el proyecto de transferencias inmediatas (TIN) de Banco Falabella Colombia.

## Instalación de dependencias
Para instalar las dependencias del proyecto, ejecute el comando: `npm install`. Este comando debe crear la carpeta **node_modules**.

## Ejecutar el proyecto localmente
Para ejecutar el proyecto hay 2 archivos disponibles:
- **start-server-dev:** Inicia el proyecto en modo *DEBUG* y en entorno de desarrollo (environment=dev)
- **start-server**: Inicia el proyecto en entorno productivo y sin el modo *DEBUG* para efectos de minimizar logs o detalle de errores.

## Ejecutar con docker
### Compilación
docker build -t tin-v1-mock/node:12 .
### Ejecutar imagen
docker run -p 8080 -d tin-v1-mock/node:12

## Documentació del API
La documentación del API se encuentra en el directorio **apidoc** y para visualizarla basta con abrir el archivo **index.html**
