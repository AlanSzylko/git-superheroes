import { SuperheroesList } from "./domain/SuperheroesList";
import type { Superhero } from "./domain/Superhero";

const list = new SuperheroesList();

function createBadge(hero: Superhero): HTMLSpanElement {
  const badge = document.createElement("span");
  badge.textContent = hero.side === "hero" ? "Hero" : "Villain";
  badge.className =
    hero.side === "hero" ? "badge bg-success" : "badge bg-danger";
  return badge;
}

function createRow(hero: Superhero): HTMLTableRowElement {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = hero.name;

  const badgeCell = document.createElement("td");
  badgeCell.appendChild(createBadge(hero));

  row.appendChild(nameCell);
  row.appendChild(badgeCell);
  return row;
}

function createTable(title: string, items: Superhero[]): HTMLDivElement {
  const col = document.createElement("div");
  col.className = "col-md-6";

  const heading = document.createElement("h2");
  heading.textContent = title;
  col.appendChild(heading);

  const table = document.createElement("table");
  table.className = "table table-bordered";

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  ["Nombre", "Bando"].forEach((text) => {
    const th = document.createElement("th");
    th.textContent = text;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  items.forEach((item) => tbody.appendChild(createRow(item)));
  table.appendChild(tbody);

  col.appendChild(table);
  return col;
}

const app = document.getElementById("app");
if (app) {
  app.appendChild(createTable("Heroes", list.getHeroes()));
  app.appendChild(createTable("Villains", list.getVillains()));
}
