import {getClue} from "./logic";

describe("getClue", () => {
  test("todo", () => {
    expect(1).toEqual(1);
    const clue = getClue({color: "purple", level: 5, test: false});
    console.log(clue);
  });
});
