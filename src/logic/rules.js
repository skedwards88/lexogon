// .* zero or more
// .+ one or more
// . exactly one

export const rules = {
  gray: {
    1: {
      pattern: "1.*",
      description: "Starts with 1",
      minNumberMatches: 10,
      maxNumberMatches: 10000,
      maxLength: 5,
    },
    2: {
      pattern: "1.*2.*",
      description: "Starts with 1",
      minNumberMatches: 100,
      maxNumberMatches: 10000,
    },
    3: {
      pattern: "1.*2.*",
      description: "Starts with 1",
      minNumberMatches: 1,
      maxNumberMatches: 100,
    },
    4: {
      pattern: "1.*2.*3.*",
      description: "Starts with 1",
      minNumberMatches: 100,
      maxNumberMatches: 10000,
    },
    5: {
      pattern: "1.*2.*3.*",
      description: "Starts with 1",
      minNumberMatches: 1,
      maxNumberMatches: 100,
    },
  },
  yellow: {
    1: {
      pattern: ".*1",
      description: "Ends with 1",
      minNumberMatches: 10,
      maxNumberMatches: 10000,
      maxLength: 5,
    },
    2: {
      pattern: ".*1.*2",
      description: "Ends with 2",
      minNumberMatches: 100,
      maxNumberMatches: 10000,
    },
    3: {
      pattern: ".*1.*2",
      description: "Ends with 2",
      minNumberMatches: 1,
      maxNumberMatches: 100,
    },
    4: {
      pattern: ".*1.*2.*3",
      description: "Ends with 3",
      minNumberMatches: 100,
      maxNumberMatches: 10000,
    },
    5: {
      pattern: ".*1.*2.*3",
      description: "Ends with 3",
      minNumberMatches: 1,
      maxNumberMatches: 100,
    },
  },
  orange: {
    1: {
      pattern: ".1.*",
      description: "1 is the second letter",
      minNumberMatches: 10,
      maxNumberMatches: 10000,
      maxLength: 5,
    },
    2: {
      pattern: ".1.*2.*",
      description: "1 is the second letter",
      minNumberMatches: 100,
      maxNumberMatches: 10000,
    },
    3: {
      pattern: ".1.*2.*",
      description: "1 is the second letter",
      minNumberMatches: 1,
      maxNumberMatches: 100,
    },
    4: {
      pattern: ".1.*2.*3.*",
      description: "1 is the second letter",
      minNumberMatches: 100,
      maxNumberMatches: 10000,
    },
    5: {
      pattern: ".1.*2.*3.*",
      description: "1 is the second letter",
      minNumberMatches: 1,
      maxNumberMatches: 100,
    },
  },
  pink: {
    1: {
      pattern: "12.*",
      description: "1 is first and 2 is second",
      minNumberMatches: 10,
      maxNumberMatches: 10000,
      maxLength: 5,
    },
    2: {
      pattern: "1.*2",
      description: "1 is first and 2 is last",
      minNumberMatches: 20,
      maxNumberMatches: 10000,
      maxLength: 6,
    },
    3: {
      pattern: "1.*2",
      description: "1 is first and 2 is last",
      minNumberMatches: 1,
      maxNumberMatches: 100,
    },
    4: {
      pattern: "1.*2.*3",
      description: "1 is first and 3 is last",
      minNumberMatches: 50,
      maxNumberMatches: 10000,
    },
    5: {
      pattern: "1.*2.*3",
      description: "1 is first and 3 is last",
      minNumberMatches: 1,
      maxNumberMatches: 100,
    },
  },
  green: {
    1: {
      pattern: ".*12",
      description: "Ends with 12",
      minNumberMatches: 10,
      maxNumberMatches: 10000,
      maxLength: 5,
    },
    2: {
      pattern: ".*12.*",
      description: "1 and 2 are adjacent",
      minNumberMatches: 100,
      maxNumberMatches: 10000,
    },
    3: {
      pattern: ".*12.*",
      description: "1 and 2 are adjacent",
      minNumberMatches: 1,
      maxNumberMatches: 100,
    },
    4: {
      pattern: ".*12.*3.*",
      description: "1 and 2 are adjacent",
      minNumberMatches: 100,
      maxNumberMatches: 10000,
    },
    5: {
      pattern: ".*12.*3.*",
      description: "1 and 2 are adjacent",
      minNumberMatches: 1,
      maxNumberMatches: 100,
    },
  },
  blue: {
    1: {
      pattern: "123.*",
      description: "Starts with 123",
      minNumberMatches: 10,
      maxNumberMatches: 10000,
      maxLength: 5,
    },
    2: {
      pattern: "1.+2.*",
      description: "Starts with 1 and no letters touch",
      minNumberMatches: 100,
      maxNumberMatches: 10000,
    },
    3: {
      pattern: "1.+2.*",
      description: "Starts with 1 and no letters touch",
      minNumberMatches: 1,
      maxNumberMatches: 100,
    },
    4: {
      pattern: "1.+2.+3.*",
      description: "Starts with 1 and no letters touch",
      minNumberMatches: 50,
      maxNumberMatches: 10000,
    },
    5: {
      pattern: "1.+2.+3.*",
      description: "Starts with 1 and no letters touch",
      minNumberMatches: 1,
      maxNumberMatches: 100,
    },
  },
  purple: {
    1: {
      pattern: ".+123",
      description: "Ends with 123",
      minNumberMatches: 10,
      maxNumberMatches: 10000,
      maxLength: 5,
    },
    2: {
      pattern: ".+12.+",
      description: "Contains 12 in the middle",
      minNumberMatches: 100,
      maxNumberMatches: 10000,
    },
    3: {
      pattern: ".+12.+",
      description: "Contains 12 in the middle",
      minNumberMatches: 1,
      maxNumberMatches: 100,
    },
    4: {
      pattern: ".+123.+",
      description: "Contains 123 in the middle",
      minNumberMatches: 50,
      maxNumberMatches: 10000,
    },
    5: {
      pattern: ".+123.+",
      description: "Contains 123 in the middle",
      minNumberMatches: 1,
      maxNumberMatches: 100,
    },
  },
};