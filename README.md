# Ejercicio Super Heroes

**Objetivo:** practicar comandos git básicos.

> Instalar previamente en la computadora:
> + Git
> + Visual Studio Code
>
> Tip: hablitar en VS Code la opción File / Auto Save

## Setup inicial
Abrir una nueva terminal de comandos en Visual Studio Code y clonar este repositorio localmente.
```
git clone <url git-superheroes-USERNAME>
cd git-superheroes-USERNAME
code .
```

## Parte A Heroes

1. Crear un nuevo archivo `heroes.md`.
Ejecutar los comandos `git add heroes.md` y `git commit -m "create heros file"`

2. Editar el archivo `heroes.md` agregando las siguientes líneas:
```
Iron Man
Captain America
Black Widow
Thor
Hulk
Hawkeye
Nick Fury
```
Ejecutar los comandos `git add heroes.md` y `git commit -m "add main heroes"`

3. Editar el archivo `heroes.md` agregando las siguientes líneas:
```
Paper Potts
War Machine
JARVIS
Spider-Man
Winter Soldier
Starlord
Gamora
```
Ejecutar los comandos `git add heroes.md` y `git commit -m "add more heros"`

4. Ejecutar el comando `git push` y verificar que los cambios queradon en el repositorio remoto GitHub (web).

## Parte B Villanos y cambio de bando

5. Crear un nuevo archivo `villains.md`.
Ejecutar los comandos `git add villains.md` y `git commit -m "create villains file"`

6. Editar el archivo `villains.md` agregando las siguientes líneas:
```
Loki
Ultron
Thanos
Red Skull
Green Goblin
Wanda Maximoff
```
Ejecutar los comandos `git add villains.md` y `git commit -m "add main villains"`

7. Editar el archivo `villains.md` elimiando la línea:
```
Wanda Maximoff
```
y editar el archivo `heroes.md` agregando la línea:
```
Scarlet Witch
```
Ejecutar los comandos `git add .` y `git commit -m "Wanda change sides"`

8. Ejecutar el comando `git push` y verificar que los cambios queradon en el repositorio remoto GitHub (web).

Parte C Historial de cambios

9. Ejecutar el comando `git log --oneline` y realizar un screenshot del la terminal.
10. Crear un nuevo Issue en GitHub (web) con el subject `Final commit log`.
11. Copiar la imagen capturada del log en el cuerpo del issue creado.
