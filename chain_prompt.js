function toKebabCase(input) {
    // Validate input is a string
    if (typeof input !== 'string') {
        throw new Error('Input must be a non-empty string');
    }

    // Return empty string for empty input
    if (input === '') {
        return '';
    }

    // Insert hyphens before uppercase letters in camelCase/PascalCase
    let result = input.replace(/([a-z])([A-Z])/g, '$1-$2');

    // Handle sequences of uppercase letters followed by lowercase (e.g., "APIResponse" -> "API-Response")
    result = result.replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2');

    // Replace spaces, underscores, and non-alphanumeric characters (except hyphens) with hyphens
    result = result.replace(/[\s_\W]/g, (match) => {
        // Keep hyphens, replace everything else with hyphens
        return match === '-' ? '-' : '-';
    });

    // Remove non-alphanumeric characters except hyphens
    result = result.replace(/[^a-zA-Z0-9-]/g, '');

    // Collapse consecutive hyphens into a single hyphen
    result = result.replace(/-+/g, '-');

    // Convert to lowercase
    result = result.toLowerCase();

    // Trim leading and trailing hyphens
    result = result.replace(/^-+|-+$/g, '');

    return result;
}

// Test cases
console.log(toKebabCase("first name"));           // "first-name"
console.log(toKebabCase("user_id"));              // "user-id"
console.log(toKebabCase("mobile--number"));       // "mobile-number"
console.log(toKebabCase("screenName"));           // "screen-name"
console.log(toKebabCase("ScreenName"));           // "screen-name"
console.log(toKebabCase("APIResponseCode"));      // "api-response-code"
console.log(toKebabCase("SCREEN_NAME"));          // "screen-name"
console.log(toKebabCase(""));                     // ""
console.log(toKebabCase(" Hello__World "));       // "hello-world"
console.log(toKebabCase("Order#ID 123"));         // "order-id-123"

// Error case
try {
    toKebabCase(null);
} catch (error) {
    console.error(error.message);                   // "Input must be a non-empty string"
}