# Exercise 2

The purpose of this exercise is to create a tool for performing text analysis over text documents.

The exercise is split in two parts: algorithms and UI

## Algorithms

An initial preprocessing is allowed. That means the module/class can be initialized with the text document and do whatever preprocessing it wants to do.

Implement the following methods:

### text_summary

This method should return an object with the following attributes:

- number_of_words: the total number of words in the document
- number_of_different_words: the total number of different words in the document
- number_of_letters: the total number of letters in the document
- number_of_symbols: any non-letter and non-digit character, excluding white spaces

Example:

```javascript
{
  number_of_words: 45623,
  number_of_letters: 675469,
  number_of_different_words: 6792,
  number_of_symbols: 14
}
```

### words_frequency

This method should return a frequency analysis of the input document.

It an Array of objects with the following attributes:

- word: the word analyzed
- occurrences: the number of times this word appears in the document
- frequency: the frequency is defined as the ratio between the number of occurrences for this word and the total number of words

This Array must be ordered by frequency in descending order, in such a way that the first element of the Array is the most frequent word.

Example:

```javascript
[
  {
    word: 'the',
    occurrences: 3412,
    frequency: 0.02
  },
  {
    word: 'a',
    occurrences: 3132,
    frequency: 0.018
  },
  ...
  {
    word: 'lycanthropy',
    occurrences: 1,
    frequency: 0.0002
  }
]
```

### words_size_frequency

This method should return a frequency analysis of the words lenght of the input document.

It an Array of objects with the following attributes:

- word_length: the number of characters
- word_count: how many words in the text have this length
- frequency: the frequency is defined as the ratio between the word count and the total number of words

This Array must be ordered by frequency in descending order, in such a way that the first element of the Array is the most frequent word size.

Example:

```javascript
[
  {
    word_length: 3,
    word_count: 35412,
    frequency: 0.23
  },
  {
    word_length: 2,
    word_count: 21341,
    frequency: 0.18
  },
  ...
  {
    word_length: 11,
    occurrences: 1,
    frequency: 0.0002
  }
]
```

### find_text(text)

This method should perform a search in the document and return an Array of results.

Each element in the Array is a String. The String represents the paragraph where the text was found, and the text must be surrounded by <em> tags so that it can be emphasized when displayed on screen.

Example:

For the input:

````
I see no occasion for that. You and the girls may go, or you may send
them by themselves, which perhaps will be still better, for as you are
as handsome as any of them, Mr. Bingley may like you the best of the
party.

In such cases, a woman has not often much beauty to think of.

But consider your daughters. Only think what an establishment it would
be for one of them. Sir William and Lady Lucas are determined to
go, merely on that account, for in general, you know, they visit no
newcomers. Indeed you must go, for it will be impossible for _us_ to
visit him if you do not.

But if a woman is partial to a man, and does not endeavour to conceal
it, he must find it out.
````

A call to `find_text('woman')` should return:

```javascript
[
  "In such cases, a <em>woman</em> has not often much beauty to think of.",
  "But if a <em>woman</em> is partial to a man, and does not endeavour to conceal it, he must find it out."
]
```

## UI

Build a small application that can be launched locally and it allows to load a .txt file from the computer and displays each implemented method's output on screen.

An example data file can be found in [here](example/pride-and-prejudice.txt)