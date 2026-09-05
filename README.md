# 🦸🏻 Ejercicio Superheroes

**Objetivo:** practicar comandos git para trabajar con ramas y resolver conflictos.

> **Tip:** habilitar en VS Code la opción `File / Auto Save`.

## ⚙️ Setup inicial

1. Realiza un fork del repositorio. A partir de este punto, se trabajará en el repositorio creado en este paso.
2. En el fork: Clonar el repositorio con `git clone https://github.com/<USUARIO>/git-superheroes`
3. Moverse a la carpeta del repositorio e instalr dependendencias con `npm install`
4. Verificar que funciona ejecutando `npm run dev`

## 🦸🏻‍♀️ Parte A: Rama de héroes

1. Crear y moverse a la rama `feature/heroes`:

```bash
git branch feature/heroes
git switch feature/heroes
```

2. En `src/domain/SuperheroesList.ts`, agregar dos héroes a la lista `characters`:

```ts
{ name: "Black Widow", side: "hero" },
{ name: "Hawkeye", side: "hero" },
```

Verificar en la app. Hacer commit con el mensaje: `"add heroes"`

3. En el mismo archivo, cambiar el nombre de Wanda por "Scarlet Witch": `
{ name: "Scarlet Witch", side: "hero" },`

Verificar en la app. Hacer commit con el mensaje: `"change Wanda's name to Scarlet Witch"`

## 🦹🏻 Parte B: Rama de villanos

4. Volver a `main` y crear la rama `feature/villains` de la misma forma que creaste la rama de héroes.

> Notá que en la app el personaje volvió a aparecer como `Wanda`, esto es porque esta rama sale desde `main`.

5. Abrir `src/domain/SuperheroesList.ts` y agregar dos villanos nuevos a la lista `characters`:

```ts
{ name: "Ultron", side: "villain" },
{ name: "Red Skull", side: "villain" },
```

Verificar en la app. Hacer commit con el mensaje: `"add villains"`

6. En el mismo archivo, corregir el nombre incompleto de `Wanda` manteniéndola como villana: `{ name: "Wanda Maximoff", side: "villain" },`

Verificar en la app. Hacer commit con el mensaje: `"fix Wanda's name"`

## ⚔️ Parte C: Merge y conflicto

Cuando dos ramas modifican la misma línea del mismo archivo, git no puede decidir cuál cambio conservar, eso es un **conflicto**. Git pausa el merge y marca las líneas para que el usuario elija qué mantener. Eso es lo que va a pasar: ambas ramas modificaron la línea de Wanda.

7. Volver a `main` e integrar la rama de héroes:

```bash
git switch main
git merge feature/heroes
```

8. Integrar la rama de villanos con `git merge feature/villains`

   > Git va a reportar un conflicto en `src/domain/SuperheroesList.ts`. Mantener una de las dos versiones de Wanda Maximoff/Scarlet Witch y mantener también todos los personajes agregados. Luego completar el merge haciendo un commit con el mensaje `"merge feature/villains, resolve conflict"`.

9. Ejecutar `git log --oneline --graph` para ver el grafo de commits resultante.
10. Moverse a cada rama y ejecutar `git push` en cada una. Verificar que los cambios de todas las ramas se ven en el repositorio remoto en GitHub (web).

## Referencias
- Git: https://git-scm.com/book/en/v2
- Markdown Cheat Sheet: https://www.markdownguide.org/cheat-sheet/
- TypeScript: https://www.w3schools.com/typescript/
- HTML: https://www.w3schools.com/html/
