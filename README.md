# wordles

This package provides the word list used by [Wordle](https://www.nytimes.com/games/wordle/index.html), from The New York Times, for daily puzzle solutions (wordles.json), as well as words that are accepted but not used as puzzle solutions (nonwordles.json). They are taken directly from the JS file sourced in the page's HTML.

## Usage

This module exposes the core Wordle word list, in order, as its main root export in both `require` and `import` formats (as well as a named export in the root):

```js
import wordles from "wordles";
/*
// or
const wordles = require("wordles");
*/

console.log(wordles[219]); // knoll
```

It also exports the (alphabetized) list of accepted non-answer words under the "nonwordles" path (as well as a named export in the root):

```js
import { nonwordles } from "wordles";
/*
// or
import nonwordles from "wordles/nonwordles";
// or
const nonwordles = require("wordles/nonwordles");
*/

assert(nonwordles.includes('aight'));
```

Note that the `nonwordles` list **does not include** words that are present in the main `wordles` list. To get a list of all words that Wordle will not reject (both valid solutions and accepted guesses), both lists must be combined:

```js
import { wordles, nonwordles } from "wordles";

const combined = [...wordles, ...nonwordles].sort();
```

## Contributing

From [The New York Times FAQ](https://help.nytimes.com/hc/en-us/articles/360029050872-Word-Games-and-Logic-Puzzles):

> We are updating the word list over time to remove obscure words to keep the puzzle accessible to more people, as well as insensitive or offensive words.

If this package goes out of sync with the word list used by the Times, please [submit a pull request to this repository](https://github.com/stuartpb/wordles/pulls).

If you would like to request a change to the word lists used by Wordle, [contact The New York Times](https://help.nytimes.com/hc/en-us/articles/115015385887-Contact-us).

## License

Lists of common English words, such as those used by Wordle, are commonly considered public domain.

This package is provided without claims of authorship or warranty of any kind.
