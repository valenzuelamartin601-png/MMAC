# MMAC | Agencia Comunicacional Sustentable

Sitio web interactivo para MMAC basado en la maqueta `documentacion/MMAC_PAGINA_WEB.pdf`, la información de `documentacion/MMAC__AGENCIA_COMUNICACIONAL.pdf` y el logo `imagenes/logo_mmac.png`.

## Publicación en GitHub Pages desde `/root`

El repositorio quedó preparado para funcionar aunque GitHub Pages esté configurado como **Deploy from a branch** y carpeta **/(root)**. La página no depende de JSX, React compilado ni rutas absolutas: `index.html` carga archivos estáticos con rutas relativas (`./src/main.js`, `./src/styles.css` y `./imagenes/logo_mmac.png`).

Pasos recomendados en GitHub:

1. Ir a **Settings → Pages**.
2. En **Build and deployment**, seleccionar **Deploy from a branch**.
3. Elegir la rama del repositorio y la carpeta **/(root)**.
4. Guardar y esperar a que GitHub Pages publique el sitio.

## Organización

```text
src/
  components/   Secciones reutilizables de la página.
  data/         Contenido editable de proyectos, pilares, servicios y equipo.
  utils/        Utilidades pequeñas compartidas por la lógica interactiva.
  main.js       Ensambla la página y conecta los eventos.
  styles.css    Estilos globales responsivos.
```

## Desarrollo local opcional

No es necesario compilar para GitHub Pages en root, pero puedes levantar un servidor local con Vite:

```bash
npm install
npm run dev
```

## Validación opcional de producción

```bash
npm run build
```

Si prefieres publicar el contenido compilado en una rama `gh-pages`, también existe:

```bash
npm run deploy
```
