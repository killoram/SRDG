# SRDG
Structured Random Data Generation 

This javascript library allows you to define how you want to structure your data as it is randomly generated for system testing or stress testing purposes.

#How to use:
This is fairly easy to use...
SRDG uses a basic object notation to define data structures:

  There are four data types:
  - number
  - string
  - array
  - object

Each is used like so:
```js
randomData({string:14})
//Output: "ZWgt8EBTNbN5s2"
randomData({number:14})
//Output: 13835931144238
randomData({
  array: {string:14, Amount:5} 
  })
//Output: ["RyozF", "72ZPO", "jNhOb", "pOAry", "v30zQ"]
randomData({
  object: {
    prop1: {string:14}, 
    prop2:{number:14} 
  } 
})
//Output: Object {prop1: "CSZslRRtvozdwa", prop2: 68792531599744}

```
Notice each data type is a property followed by a value (e.g. `{string:14}` ).
For string and number data types, the value is an int defining the length of data type.
Thus `{string:14}` returns a string 14 characters long and `{number:7}` returns a number 7 places long.
The object and array data types take an object as a value (e.g. `{object: {prop: {string:4}} }` ).
The object data type takes an object with whatever and however many properties that you define and the values of each property are defined with any of the four data types.
The array data type takes an object with two properties: value, and amount (e.g. `{array: {number:5, Amount:10} }` ).
The value can be set to any of the four data types and the amount accepts an int as an indicator of how many of the proviously defined data type to generate... Thus `{array: {number:5, Amount:10} }` generates an array of 10 numbers 5 places long.


SRDG supports nesting, so you can created virtually any structure you can imagine...
The following code creates an array of 100 objects with 3 properties (one of which is an object that holds an array of strings as a property called list)

```js
var data = new randomData({
  array: {
    object:{
      id: { string:16 },
      place: { number:14 },
      obj: {
        object:{
          list: { array: { string:14, Amount: 14 } }
        }
      }
    },
    Amount: 100
  }
});
```

As you will quickly find, SRDG can generate thousands of data types in a single second which makes it great for stress testing a system by feeding it large loads of data.
