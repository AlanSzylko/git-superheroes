import type { Superhero } from "./Superhero";

export class SuperheroesList {
  private characters: Superhero[] = [
    { name: "Iron Man", side: "hero" },
    { name: "Captain America", side: "hero" },
    { name: "Thor", side: "hero" },
    { name: "Thanos", side: "villain" },
    { name: "Loki", side: "villain" },
    { name: "Wanda Maximoff", side: "villain" },
    { name: "Ultron", side: "villain" },
    { name: "Red Skull", side: "villain" },
  ];

  getHeroes(): Superhero[] {
    return this.characters.filter((c) => c.side === "hero");
  }

  getVillains(): Superhero[] {
    return this.characters.filter((c) => c.side === "villain");
  }


  getAll(): Superhero[] {
    return this.characters;
  }
}
