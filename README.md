# Desafío 4: Lifting State Up (Levantar el Estado)

Este pull request implementa el **Desafío 4** del curso de React - Unidad 1.

## Objetivo

Sincronizar dos componentes para que compartan datos. Tienes dos botones en una página y necesitas que, al presionar cualquiera de ellos, ambos contadores se incrementen al mismo tiempo.

# Desafío 5: Renderizado Condicional

Este pull request implementa el **Desafío 5** del curso de React - Unidad 1.

## Objetivo

Mostrar contenido diferente según una condición de JavaScript. 

## Despliegue con Docker

### Crear imagen Docker

```bash
docker build -t react-challenge-4 .
```

### Ejecutar contenedor

```bash
docker run -p 3000:80 react-challenge-4
```

La aplicación estará disponible en `http://localhost:3000`
