# Ejercicio Superheroes

**Objetivo:** practicar comandos git para trabajar con ramas y resolver conflictos.

> **Instalar previamente en la computadora:**
> - Git
> - Node.js
> - Visual Studio Code
>
> **Tip:** habilitar en VS Code la opción `File / Auto Save`.

---

## Setup inicial

Clonar el repositorio, instalar dependencias y levantar la app:

```bash
git clone <url git-superheroes-USERNAME>
cd git-superheroes-USERNAME
npm install
```

Abrir el proyecto en VS Code:

```bash
code .
```

Levantar la app en el navegador:

```bash
npm run dev
```

La app muestra dos tablas: **Heroes** y **Villains**. Dejarla corriendo mientras trabajás.

---

## Parte A: Rama de héroes

1. Crear y moverse a la rama `feature/heroes`:

```bash
git branch feature/heroes
git switch feature/heroes
```

2. Abrir el archivo `src/domain/SuperheroesList.ts` y agregar dos héroes nuevos a la lista `characters`:

```ts
{ name: "Black Widow", side: "hero" },
{ name: "Hawkeye", side: "hero" },
```

Guardar el archivo y verificar que los nuevos héroes aparecen en la app.

Ejecutar:

```bash
git add src/domain/SuperheroesList.ts
git commit -m "add heroes"
```

3. En el mismo archivo, cambiar el nombre de Wanda por "Scarlet Witch":

```ts
{ name: "Scarlet Witch", side: "hero" },
```

Guardar y verificar en la app que el personaje pasó a la tabla de Heroes con su nuevo nombre.

Ejecutar:

```bash
git add src/domain/SuperheroesList.ts
git commit -m "change Wanda's name to Scarlet Witch"
```

---

## Parte B: Rama de villanos

4. Volver a `main` y crear la rama `feature/villains`:

```bash
git switch main
git branch feature/villains
git switch feature/villains
```

> Notá que en la app el personaje volvió a aparecer como `Wanda`, porque esta rama sale desde `main`.

5. Abrir `src/domain/SuperheroesList.ts` y agregar dos villanos nuevos a la lista `characters`:

```ts
{ name: "Ultron", side: "villain" },
{ name: "Red Skull", side: "villain" },
```

Guardar y verificar en la app.

Ejecutar:

```bash
git add src/domain/SuperheroesList.ts
git commit -m "add villains"
```

6. En el mismo archivo, el nombre `Wanda` está incompleto. Corregirlo a nombre completo y mantenerla como villana:

```ts
{ name: "Wanda Maximoff", side: "villain" },
```

Guardar y ejecutar:

```bash
git add src/domain/SuperheroesList.ts
git commit -m "fix Wanda's name"
```

---

## Parte C: Merge y conflicto

### Qué es un conflicto

Cuando dos ramas modifican la **misma línea** del mismo archivo, git no puede decidir cuál cambio conservar. Eso se llama **conflicto**. Git pausa el merge y marca las líneas en conflicto para que el usuario elija qué mantener.

Eso es exactamente lo que va a pasar: ambas ramas modificaron la línea de `Wanda`, pero de forma diferente.

7. Volver a `main` e integrar la rama de héroes:

```bash
git switch main
git merge feature/heroes
```

Verificar en la app que Black Widow, Hawkeye y Scarlet Witch aparecen correctamente.

8. Integrar la rama de villanos:

```bash
git merge feature/villains
```

Git va a reportar un conflicto en `src/domain/SuperheroesList.ts`. Mantener una de las dos versiones de Wanda Maximoff/Scarlet Witch y mantener también todos los personajes agregados. Luego completar el merge:

```bash
git add src/domain/SuperheroesList.ts
git commit -m "merge feature/villains, resolve conflict"
```

9. Ejecutar `git log --oneline --graph` para ver el grafo de commits resultante.
10. Moverse a cada rama y ejecutar `git push` en cada una. Verificar que los cambios de todas las ramas se ven en el repositorio remoto en GitHub (web).
