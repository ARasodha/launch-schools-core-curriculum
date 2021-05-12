# The PEDAC PROCESS

## P: Understanding the Problem

- Establish the rules/ defines the boundaries of the Problem
  - Assessing all the available information about the problem
  - Restate Explicit Requirements (clearly stated in the problem description)
  - Identify Implicit Requirements (not stated in the problem description - can be be identified in test cases or during problem analysis of the question)
- Spend enough time. Don't rush this step.

**General Example**

Given a string, produce a new string with every other word removed.

- Explicit requirements:
  - Input: string
  - Output: new string
  - Remove every other word from input string

- Questions (the answers to these questions provides implicit requirements for the problem):
  - What do we mean by every other word? (is it all of the odd words or even words?) - or does other have a different meaning all together?
  - How do we define a word in this context
    - Words are delimited by spaces
    Note: these questions can be answered by analyzing the test cases and if that doesn't work, ask the interviewer

## E: Examples and Test Cases

- Can confirm/ refute assumptions
- Help to answer questions about implicit requirements
- Act as assertions which help to codify the rules and boundaries

- Depending on the conditions of the questions -- its good to be able to build your own test cases incase the ones provided aren't good enough, or incase none are provided at all


## D: Data Structures

- Help to reason with data logically
- Help interact with data at implementation level
- Thinking in terms of data structures is part of problem solving process
- Data Structures are closely linked to algorithms
  - Set of steps from input to output
    - Involves structuring data in a certain way

## A: Algorithms

- A logical sequence of steps for accomplishing a task or objective
  - Closely linked to data structures
  - We can think of the algorithm as the steps required to structure the data in a way that produces the required output
- Generally keep the algorithm abstract and high level. Avoid implementation details such as reference to particular methods or built in functions (doing so could risk getting stuck in a particular approach or way of thinking about the problem)
  - Don't worry about efficiency for now
- Should write out the solution steps to the algorithm in plain words - not code or formal pseudocode
- Should revisit the algorithm during the implementation step either to update it or make implementation level notes based on the algorithm


## C: Implementing a solution in Code

- Translating solution algorithm to code
- Think about the algorithm in the context of the programming language we are using
  - Language features/ constraints
  - Characteristics of data structures
  - Built-in functions/ methods
  - Syntax/ coding patterns
- Create test cases
- Code with intent


## EXAMPLE QUESTION: Sum Even Number Rows

Imagine a sequence of consecutive even integers beginning with 2. The integers are grouped in rows, with the first row containing one integer, the second row two integers, the third row three, and so on. Given an integer representing the number of a particular row, return an integer representing the sum of all the integers in that row.

**Rules/ requirements**

What do we know an understand about this problem?
- Sequence of even integers
- Sequence begins with two
- Integers are consecutive
- Sequences are grouped into rows
- Each row is incrementally larger: 1, 2, 3 ...
- Row 'number' equals the number of elements in the row
  - Row 1 has 1 element, row 2 has 2 elements, ...
- Input: a single integer
  - Identifies a 'row', which is a subset of a sequence of integers
- Output: a single integer
  - The sum of the integers in the row identified by the input integer

Might be helpful for us to type out the sequence to see it visually

- Sequence:
2, 4, 6, 8, 10, 12, 14, 16, 18, ...

2 --> 2
4, 6 --> 10
8, 10, 12
14, 16, 18, 20 --> 68
....

- How do we create the structure? - We can't hard code a structure because we don't know what the input number is going to be (could be 100 or even higher). We need to create the structure as we need it based on the input value (row number) -- Just something to think about at this point.

**Examples**

row number: 1 --> sum of integers in row: 2
row number: 2 --> sum of integers in row: 10
row number 4 --> sum of integers in row: 68

(We can confirm these examples with our sequence breakdown in the previous step to better our understanding of the problem)

**Data Structure**

2
4, 6
8, 10, 12
14, 16, 18, 20
....

- Overall structure represents a sequence as a whole
- Individual rows within the overall structure
- Individual rows in a set order in context of sequence
- Individual rows contain integers
- Can assume integers are in a set order in the context of the sequence

(Based on what we see here a nested array structure seems like the best way to represent our Data. We can dry to illustrate this bellow)

[
[2],
[4, 6],
[8, 10, 12],
[14, 16, 18, 20]
....
]

(Based on looking at this example we can already start to connect dots to how we are going to work our algorithm. For example, if the input number is 4 we can build this nested array 4 layers deep and return the sum of the 4th row. We can also see that our algorithm is mainly going to be concerned with creating the structure.)

**Algorithm**
(From our understanding up until this point we know a number of things that can help us build our algorithm. We know that we need to get the sum of all the integers from a specific row in the data structure that we defined. Therefore, need to create the structure up to an including the final row that is indicated by the input. Once we created that structure then we need to obtain that final row. Then sum the elements of the row and return the result value.)

1. Create an empty 'rows' array to contain all of the rows
2. Create a 'row' and add it to the overall 'rows' array
3. Repeat step 2 until all the necessary rows have been created
  - All the rows have been created when the length of the 'rows' array is equal to the input
4. Sum the final row
5. Return the sum

(At this point the steps are good on a general level but some of the steps seem to vague still. In this situation we don't necessarily want to add any more overall steps to our algorithm. Just expand on any current step that is vague. In this case step 2, we need to add additional details (add sub- steps) If a particular element requires many sub-steps, then another option is to extract that element to its own problem. Therefore, solving a mini problem within the large one. Like bellow:)

*Problem: Create a Row*

Rules:
- Row is an array
- The array contains Integers
- The integers are consecutive even numbers
- Integers in each row form parts of a larger overall sequence
- Rows are of different lengths
- Input: the information needed to create the output
  - Start integer of the rows
  - Length of the row
- Output: the row itself: `[8, 10, 12]`

(We can now come up with some examples to test our assumptions for our mini problem)

Examples:
start: 2, length: 1 --> [2]
start: 4, --> length: 2 --> [4, 6]
start: 8, length: 3 ---> [8, 10, 12]

Data Structures:
- An array of integers

Algorithm
1. Create an empty 'row' to contain the Integers
2. Add the starting integer
3. Increment the starting integer by 2 to get the next integer in sequence
4. Repeat steps 2 and 3 until the array has reached the correct length
5. Return the array

(Sufficient detail at this stage. We can think about the implementation detail at the coding stage. Now we can look at the original algorithm and see if any other steps are lacking detail.)

## Final Thoughts
- PEDAC is not a completely linear process. You want to approach the steps in order initially but you should also be prepared to move back and forward between them at various stages of the process.
- Switch from implementation mode back into abstract problem solving mode when necessary
- Don't try to problem solve at the code level
