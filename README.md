# Typescript

- TypeScript is a programming language developed and maintained by Microsoft.
- It is a typed superset of JavaScript that compiles to plain JavaScript.
- TypeScript is known as Object oriented programming language whereas JavaScript is a scripting language.
- TypeScript gives support for modules whereas JavaScript does not support modules.
- TypeScript has Interface but JavaScript does not have Interface.

## tsc

- tsc typeScrpit_FileName.ts
- node javaScrpit_fileName.ts

## 1. Annotations

- TypeScript is a typed language
- we can specify the type of the variables
- using :Type after the name of the variable

## 2. Variable

1. var
   - javascrpit same rules
2. let
   - let is block-scpo
3. const
   - must be declared and initailzed in single satement
   - value cannot changed
   - let scpoing rule

## 3. data types

- The data type classification are Two type
  1.  Built-in Datatypes (Primitive types)
      1. number
      2. string
      3. boolean
      4. null
      5. undefind
      6. symbol
  2.  User-defined Data Types (Object types)
      1. array
      2. functions
      3. class
      4. Touple
      5. Enum
      6. interface
- Methords
  1.  number
      1. toString()
      2. toFixed() - specified number of decimals
      3. toPrecision() - specified length.
      4. valueOf()
      5. Number() - convert JavaScript variables to numbers.
      6. parseInt() - pass string and returns a whole number.Only the first number is returned.
      7. parseFloat() - pass string and returns a number.Only the first number is returned.
  2.  string
      1. indexOf()
         - (substr, [start])
         - returns the index position of character value passed with method. If not found, -1 is returned.
      2. lastIndexOf()
         - (substr, [end])
         - returns the last index position of character value passed with method. If not found, -1 is returned.
      3. replace()
         - (originalstr,newstr)
         - search for a specified regular expression in a given string and then replace it if the match occurs.
      4. slice()
         - (start, [end])
         - returns a substring of the string based on the “start” and “end” index arguments.
      5. split()
         - converts a string into an array.
      6. trim()
         - returns a new string with removed white space from the start and end of the string.
      7. trimStart()
         - eturns a new string with removed white space from the start of the string.
      8. trimEnd()
         - returns a new string with removed white space from the end of the string.
      9. charAt()
         - Returns the character at the “x” position within the string.
      10. concat()
      - Combines one or more strings into the existing one and returns the combined string.
      11. includes()
      - (searchString)
      - searching String may be found string retun boolean.
      12. toUpperCase()
      13. toLowerCase()
      14. endsWith()
      - string ends with the searching string.
