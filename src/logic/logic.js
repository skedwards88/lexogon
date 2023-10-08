import { rules } from "./rules";
import {
  commonWordsLen4,
  commonWordsLen5,
  commonWordsLen6,
  commonWordsLen7,
} from "@skedwards88/word_lists";


function shuffleArray(array) {
  let shuffledArray = array.slice();

  // Swap each value in an array, starting at the end of the array, with a position equal or earlier in the array.
  for (let index = shuffledArray.length - 1; index > 0; index--) {
    // Get a "random" index from 0 to the current index of the array
    // So for an array of length 3, the first round will be 0, 1, or 2, second round 0 or 1, and last round 0
    // The values at this index and the current index will be swapped
    let swapIndex;
    swapIndex = Math.floor(Math.random() * (index + 1));

    // If the current index and index to swap are the same, move on to the next loop iteration
    if (index === swapIndex) {
      continue;
    }

    // Get the original value at index,
    // set the value at the index to be the value at the swap index,
    // then set the value at the swap index to be the original value at the index
    let swapValue = shuffledArray[index];
    shuffledArray[index] = shuffledArray[swapIndex];
    shuffledArray[swapIndex] = swapValue;
  }

  return shuffledArray;
}

function getAllLetterCombos(numLetters) {
  const allLetters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let combos = [...allLetters];

  for (let index = 1; index < numLetters; index++) {
    let updatedCombos = [];
    for (const letter of allLetters) {
      for (const combo of combos) {
        updatedCombos.push(combo + letter);
      }
    }
    combos = updatedCombos;
  }
  return combos;
}

function getWordsThatMatch(pattern, maxLength) {
  const allWords = [
    ...commonWordsLen4,
    ...commonWordsLen5,
    ...commonWordsLen6,
    ...commonWordsLen7,
  ];
  const patternRegExp = new RegExp(`^${pattern}$`);
  const matches = allWords.filter(
    (word) => word.length <= maxLength && patternRegExp.test(word),
  );

  return matches;
}

function replaceWithLetters(combo, thingToReplace) {
  const iterator = combo.split("")[Symbol.iterator]();
  return thingToReplace.replace(/\d/g, () => iterator.next().value ?? "");
}

export function getClue({color, level, test=false}) {
  let numClues = 0;
  const rule = rules[color][level]["pattern"];
  const description = rules[color][level]["description"];
  const minNumberMatches = rules[color][level]["minNumberMatches"];
  const maxNumberMatches = rules[color][level]["maxNumberMatches"];
  const maxLength = rules[color][level]["maxLength"] || 30;
  const numLetters = rule.match(/\d/g).length;
  const possibleCombos = shuffleArray(getAllLetterCombos(numLetters));

  for (const combo of possibleCombos) {
    const pattern = replaceWithLetters(combo, rule)
    const wordMatches = getWordsThatMatch(pattern, maxLength);
    if (
      wordMatches.length >= minNumberMatches &&
      wordMatches.length <= maxNumberMatches
    ) {
      if (!test) {
        const modifiedDescription = replaceWithLetters(combo, description)
        return {
          clue: combo,
          solution: shuffleArray(wordMatches).slice(0,10),
          description: modifiedDescription,
        };
      } else {
        numClues ++
      }
    }
  }

  if (test) return numClues
}

// console.log(getClue({color: "gray", level: 1, test: true}))