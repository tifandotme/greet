import { english, indonesia } from "./main.ts";
import { assertEquals } from "@std/assert";

Deno.test("indonesia", () => {
  assertEquals(indonesia("Tifan"), "Halo, Tifan!");
});

Deno.test("english", () => {
  assertEquals(english("Jake"), "Hello, Jake!");
});
