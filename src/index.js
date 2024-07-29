// string-manipulation-tools.js

class StringManipulationTools {
    // Convert a string to title case
    static toTitleCase(str) {
        return str.replace(/\w\S*/g, (txt) => {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }

    // Pad a string to a given length with a specified character
    static padString(str, length, char = ' ') {
        if (str.length >= length) {
            return str;
        }
        const padLength = length - str.length;
        const padLeft = Math.floor(padLength / 2);
        const padRight = padLength - padLeft;
        return char.repeat(padLeft) + str + char.repeat(padRight);
    }

    // Trim whitespace from the beginning and end of a string
    static trimString(str) {
        return str.trim();
    }

    // Convert a string to camel case
    static toCamelCase(str) {
        return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
            return index === 0 ? match.toLowerCase() : match.toUpperCase();
        }).replace(/\s+/g, '');
    }

    // Reverse a string
    static reverseString(str) {
        return str.split('').reverse().join('');
    }

    // Check if a string is a palindrome
    static isPalindrome(str) {
        const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        return cleanedStr === cleanedStr.split('').reverse().join('');
    }
}

module.exports = StringManipulationTools;