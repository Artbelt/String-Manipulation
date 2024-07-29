# String Manipulation Tools

A set of tools for string manipulation in JavaScript. This package includes common string operations such as padding, trimming, and case conversion.

## Installation

You can install this package using npm:

npm install string-manipulation-tools

## Usage

First, require the package in your JavaScript file:

const StringManipulationTools = require('string-manipulation-tools');

### Methods

#### `toTitleCase(str)`

Converts a string to title case.

console.log(StringManipulationTools.toTitleCase("hello world")); // "Hello World"

#### `padString(str, length, char = ' ')`

Pads a string to a given length with a specified character.

console.log(StringManipulationTools.padString("hello", 10, '*')); // "**hello***"

#### `trimString(str)`

Trims whitespace from the beginning and end of a string.

console.log(StringManipulationTools.trimString("  hello  ")); // "hello"

#### `toCamelCase(str)`

Converts a string to camel case.

console.log(StringManipulationTools.toCamelCase("Hello World")); // "helloWorld"

#### `reverseString(str)`

Reverses a string.

console.log(StringManipulationTools.reverseString("hello")); // "olleh"

#### `isPalindrome(str)`

Checks if a string is a palindrome.

console.log(StringManipulationTools.isPalindrome("A man a plan a canal Panama")); // true

## License

This project is licensed under the MIT License.