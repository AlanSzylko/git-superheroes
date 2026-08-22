import { describe, it, expect } from "vitest";
import { SuperheroesList } from "../domain/SuperheroesList";

describe("SuperheroesList", () => {
  const list = new SuperheroesList();

  it("getHeroes should return only heroes", () => {
    const heroes = list.getHeroes();
    expect(heroes.every((c) => c.side === "hero")).toBe(true);
  });

  it("getVillains should return only villains", () => {
    const villains = list.getVillains();
    expect(villains.every((c) => c.side === "villain")).toBe(true);
  });

  it("getHeroes and getVillains together equal getAll", () => {
    const total = list.getHeroes().length + list.getVillains().length;
    expect(total).toBe(list.getAll().length);
  });
});
