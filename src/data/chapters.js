const chapters = [
  {
    id: 1,
    title: "Evaluate Mathematical Expressions in Python",
    details:
      "Learn how to evaluate mathematical expressions using Python's eval() function.",
      status: "completed",  
    topics: [
      {
        id: 1,
        title: "Merge Two Lists Without Using Extend",
        type: "regular",
        status: "completed",
        subtopics: [
          { id: 1, title: "Using + Operator to Merge Lists", status: "completed" },
          { id: 2, title: "Merging Lists with List Comprehension", status: "completed" },
        ],
      },
      {
        id: 2,
        title: "Lambda Functions in Python",
        type: "regular",
        status: "progress",
        subtopics: [
          { id: 1, title: "Syntax and Basic Usage of Lambda Functions", status: "progress" },
          { id: 2, title: "Using Lambda with Built-in Functions", status: "progress" },
        ],
      },
      {
        id: 3,
        title: "Using Map and Filter Functions",
        type: "regular",
        status: "incomplete",
        subtopics: [
          { id: 1, title: " Applying Functions to Lists with map()", status: "incomplete" },
          { id: 2, title: "Filtering Data Efficiently with filter()", status: "incomplete" },
        ],
      },
      {
        id: 4,
        title: "List Comprehensions in Python",
        type: "regular",
        status: "incomplete",
        subtopics: [
          { id: 1, title: "List Comprehensions with If-Else", status: "incomplete" },
          { id: 2, title: "Nested List Comprehensions", status: "incomplete" },
        ],
      },
      {
        id: "challenging-task",
        title: "Challenging Task",
        type: "challenging-task",
        description:
          "There will be a final challenging task after the topic, complete it to proceed to the next chapter.",
      },
    ],
  },

  {
    id: 2,
    title: "Working with Strings in Python",
    details:
      "Explore different methods to manipulate and process strings in Python.",
      status: "progress",
    topics: [
      {
        id: 1,
        title: "String Slicing and Indexing",
        type: "regular",
        status: "progress",
        subtopics: [
          { id: 1, title: "Extracting Substrings with Slicing", status: "progress" },
          { id: 2, title: "Negative Indexing in Strings", status: "progress" },
        ],
      },
      {
        id: 2,
        title: "String Formatting",
        type: "regular",
        status: "incomplete",
        subtopics: [
          { id: 1, title: "Using f-strings for Dynamic Formatting", status: "incomplete" },
          { id: 2, title: "Formatting with str.format() Method", status: "incomplete" },
        ],
      },
      {
        id: 3,
        title: "Using Map and Filter Functions",
        type: "regular",
        status: "incomplete",
        subtopics: [
          { id: 1, title: "Applying Functions to Lists with map()", status: "incomplete" },
          { id: 2, title: "Filtering Elements with Custom Conditions", status: "incomplete" },
        ],
      },
      {
        id: 4,
        title: "Using Regular Expressions",
        type: "regular",
        status: "incomplete",
        subtopics: [
          { id: 1, title: "Pattern Matching with re.search()", status: "incomplete" },
          { id: 2, title: "Extracting Data with re.findall()", status: "incomplete" },
        ],
      },
      {
        id: "challenging-task",
        title: "Challenging Task",
        type: "challenging-task",
        description:
          "Solve an advanced string pattern-matching challenge to complete the chapter.",
      },
    ],
  },

  {
    id: 3,
    title: "Understanding Python Data Structures",
    details:
      "Learn about lists, tuples, sets, and dictionaries and their use cases.",
      status: "incomplete",
    topics: [
      {
        id: 1,
        title: "Lists and Tuples",
        type: "regular",
        status: "incomplete",
        subtopics: [
          { id: 1, title: "Mutable vs Immutable Sequences", status: "incomplete" },
          { id: 2, title: "Common List and Tuple Operations", status: "incomplete" },
        ],
      },
      {
        id: 2,
        title: "Dictionaries and Sets",
        type: "regular",
        status: "incomplete",
        subtopics: [
          { id: 1, title: "Key-Value Pair Manipulation in Dictionaries", status: "incomplete" },
          {
            id: 2,
            title: "Set Operations: Union, Intersection, and Difference", status: "incomplete"
          },
         ],
      },
      {
        id: 3,
        title: "Using Map and Filter Functions",
        type: "regular",
        status: "incomplete",
        subtopics: [
          { id: 1, title: "Transforming Lists with map()", status: "incomplete" },
          { id: 2, title: "Filtering Data Using Lambda Functions", status: "incomplete" },
        ],
      },
      {
        id: 4,
        title: "Nested Data Structures",
        type: "regular",
        status: "incomplete",
        subtopics: [
          { id: 1, title: "Accessing Elements in Nested Lists and Dictionaries", status: "incomplete" },
          { id: 2, title: "Iterating Through Complex Data Structures", status: "incomplete" },
        ],
      },
      {
        id: "challenging-task",
        title: "Challenging Task",
        type: "challenging-task",
        description: "Solve a complex problem using nested data structures.",
      },
    ],
  },

  {
    id: 4,
    title: "Evaluate Mathematical Expressions in Python",
    details:
      "Learn how to evaluate mathematical expressions using Python's eval() function.",
      status: "incomplete",
    topics: [
      {
        id: 1,
        title: "Merge Two Lists Without Using Extend",
        type: "regular",
        status: "incomplete",
        subtopics: [
          { id: 1, title: "List Comprehensions with If-Else", status: "incomplete", },
          { id: 2, title: "Nested List Comprehensions", status: "incomplete", },
        ],
      },
      {
        id: 2,
        title: "Lambda Functions in Python",
        type: "regular",
        status: "incomplete",
        subtopics: [
          { id: 1, title: "List Comprehensions with If-Else", status: "incomplete", },
          { id: 2, title: "Nested List Comprehensions", status: "incomplete" },
        ],
      },
      {
        id: 3,
        title: "Using Map and Filter Functions",
        type: "regular",
        status: "incomplete",
        subtopics: [
          { id: 1, title: "List Comprehensions with If-Else", status: "incomplete" },
          { id: 2, title: "Nested List Comprehensions", status: "incomplete" },
        ],
      },
      {
        id: 4,
        title: "List Comprehensions in Python",
        type: "regular",
        status: "incomplete",
        subtopics: [
          { id: 1, title: "List Comprehensions with If-Else", status: "incomplete", },
          { id: 2, title: "Nested List Comprehensions", status: "incomplete", },
        ],
      },
      {
        id: "challenging-task",
        title: "Challenging Task",
        type: "challenging-task",
        description:
          "There will be a final challenging task after the topic, complete it to proceed to the next chapter.",
      },
    ],
  },

  {
    id: 5,
    title: "Evaluate Mathematical Expressions in Python",
    details:
      "Learn how to evaluate mathematical expressions using Python's eval() function.",
      status: "incomplete",
    topics: [
      {
        id: 1,
        title: "Merge Two Lists Without Using Extend",
        type: "regular",
        subtopics: [
          { id: 1, title: "List Comprehensions with If-Else", status: "incomplete", },
          { id: 2, title: "Nested List Comprehensions", status: "incomplete" },
        ],
      },
      {
        id: 2,
        title: "Lambda Functions in Python",
        type: "regular",
        status: "incomplete",
        subtopics: [
          { id: 1, title: "List Comprehensions with If-Else", status: "incomplete" },
          { id: 2, title: "Nested List Comprehensions", status: "incomplete" },
        ],
      },
      {
        id: 3,
        title: "Using Map and Filter Functions",
        type: "regular",
        status: "incomplete",
        subtopics: [
          { id: 1, title: "List Comprehensions with If-Else", status: "incomplete" },
          { id: 2, title: "Nested List Comprehensions", status: "incomplete" },
        ],
      },
      {
        id: 4,
        title: "List Comprehensions in Python",
        type: "regular",
        status: "incomplete",
        subtopics: [
          { id: 1, title: "List Comprehensions with If-Else", status: "incomplete" },
          { id: 2, title: "Nested List Comprehensions", status: "incomplete" },
        ],
      },
      {
        id: "challenging-task",
        title: "Challenging Task",
        type: "challenging-task",
        description:
          "There will be a final challenging task after the topic, complete it to proceed to the next chapter.",
      },
    ],
  },
];

export default chapters;
