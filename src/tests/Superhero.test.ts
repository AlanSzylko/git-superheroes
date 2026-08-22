import { describe, it, expect } from "vitest";
import type { Superhero } from "../domain/Superhero";

describe("Superhero", () => {
  it("should have a name and a side", () => {
    const hero: Superhero = { name: "Iron Man", side: "hero" };
    expect(hero.name).toBe("Iron Man");
    expect(hero.side).toBe("hero");
  });

  it("side can be villain", () => {
    const villain: Superhero = { name: "Thanos", side: "villain" };
    expect(villain.side).toBe("villain");
  });
});
