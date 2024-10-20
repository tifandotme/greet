/**
 * A collection of functions to greet someone in different languages.
 *
 * ```ts
 * import * as greet from "@tifan/greet";
 *
 * greet.indonesia("Tifan") // Halo, Tifan!
 * greet.english("Jake") // Hello, Jake!
 * ```
 * @module
 */

/**
 * Greet someone in Indonesia.
 *
 * ```ts
 * indonesia("Tifan") // Halo, Tifan!
 * ```
 *
 * @param name The name of the person to greet.
 * @returns The greeting.
 */
export function indonesia(name: string): string {
  return `Halo, ${name}!`;
}

/**
 * Greet someone in English.
 *
 * ```ts
 * english("Jake") // Hello, Jake!
 * ```
 *
 * @param name The name of the person to greet.
 * @returns The greeting.
 */
export function english(name: string): string {
  return `Hello, ${name}!`;
}
