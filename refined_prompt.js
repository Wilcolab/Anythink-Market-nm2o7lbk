/**
 * Converts a string to camelCase format.
 * 
 * @param {string} input - The input string to convert. Can contain spaces, underscores, or hyphens as separators.
 * @returns {string} The converted camelCase string. The first word is lowercase, subsequent words are capitalized.
 * @throws {Error} If input is null, undefined, or not a string.
 * 
 * @example
 * toCamelCase("hello world");           // Returns: "helloWorld"
 * toCamelCase("hello_world");           // Returns: "helloWorld"
 * toCamelCase("hello-world");           // Returns: "helloWorld"
 * toCamelCase("");                      // Returns: ""
 * 
 * @description
 * Splits the input by spaces, underscores, or hyphens, then joins the words
 * together with the first word in lowercase and all subsequent words capitalized.
 */

/**
 * Converts a string to dot.case format.
 * 
 * @param {string} input - The input string to convert. Can contain spaces, underscores, hyphens, or camelCase boundaries.
 * @returns {string} The converted dot.case string with words separated by dots and all lowercase.
 * @throws {Error} If input is null, undefined, or not a string.
 * 
 * @example
 * toDotCase("hello world");             // Returns: "hello.world"
 * toDotCase("hello_world");             // Returns: "hello.world"
 * toDotCase("helloWorld");              // Returns: "hello.world"
 * toDotCase("hello-world");             // Returns: "hello.world"
 * toDotCase("");                        // Returns: ""
 * 
 * @description
 * Splits the input by spaces, underscores, hyphens, and camelCase boundaries,
 * then joins the words together with dots, converting all characters to lowercase.
 */
function toCamelCase(input) {
    // Handle null or undefined
    if (input === null || input === undefined) {
        throw new Error("Input must be a non-empty string");
    }

    // Handle non-string inputs
    if (typeof input !== "string") {
        throw new Error("Input must be a non-empty string");
    }

    // Handle empty strings
    if (input === "") {
        return "";
    }

    // Split by spaces, underscores, or hyphens
    const words = input.split(/[\s_-]+/).filter(word => word.length > 0);

    // Convert to camelCase
    return words
        .map((word, index) => {
            const lowerWord = word.toLowerCase();
            // First word stays lowercase, subsequent words are capitalized
            return index === 0
                ? lowerWord
                : lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
        })
        .join("");
}

module.exports = toCamelCase;

function toDotCase(input) {
    // Handle null or undefined
    if (input === null || input === undefined) {
        throw new Error("Input must be a non-empty string");
    }

    // Handle non-string inputs
    if (typeof input !== "string") {
        throw new Error("Input must be a non-empty string");
    }

    // Handle empty strings
    if (input === "") {
        return "";
    }

    // Split by spaces, underscores, hyphens, or camelCase boundaries
    const words = input
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .split(/[\s_-]+/)
        .filter(word => word.length > 0);

    // Convert to dot.case
    return words.map(word => word.toLowerCase()).join(".");
}

module.exports = toDotCase;
