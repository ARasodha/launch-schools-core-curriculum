/* Capturing and Bubbling Practice Problems
Question 1:
My Answer:
1. the click event listener is listening for a click on elem1 (div) on the bubbling phase and will
handle it with an alert that reads the clicked on target's tag name even if it isn't elem1
2. the click even listener is listening for a click on elem1 (div) on the bubbling phase and will 
handle it with an alter that reads the tag name of the div that has the id elem1
Lesson Answer:
1. The click event listener listening on the bubbling phase that alerts the tagName of the target 
element listening on the div element (the first event handler).
2.The click event listener listening on the bubbling phase that alerts the tagName of the 
currentTarget element listening on the div element (the second event handler).

It is interesting to note that adding an event listener of the same type — "click" — to the same 
element doesn't overwrite the first one that was added.

Question 2:
My Answer:
1. The click event listener listening on the bubbling phase for #elem1 that sends an alert saying 
"bubbling"
2. The click event listener listening on the capturing phase for #elem2 that sends an alert saying
 "capturing"
Lesson Answer:
1. The click event listener listening on the capturing phase on the div#elem1 element (the second
   event handler).
2. The click event listener listening on the bubbling phase on the div#elem1 element (the first event
   handler).

This problem demonstrates that the [click] event object passes through the capturing before the 
bubbling phase.

Question 3:
My Answer:
1. The div#elem1 has been clicked on and triggered it's click event listener that is using setTimeout
to give a 7 second delayed response which consists of an alert with the tag name of the element that was
clicked on. In this case DIV
2. The keypress even listener has been activated after entering the character "q" with the keyboard. The
listeners response is to use setTimeout to delay its action of sending an alert of the code of the
key pressed on the event object after a delay of 7 seconds
3. The same as step 2 takes place for "w"
4. The same as step 1 takes place for the main element whose tagName is returned after being clicked on
// Lesson Solution:
1. The click event listener listening on the bubbling phase on the div#elem1 element that alerts the
 tagName of the target element (the second event handler).
2. The keypress event listener listening on the bubbling phase on document that alerts the code of
 the keyboard key that was pressed (the first event handler).
3. The keypress event listener listening on the bubbling phase on document that alerts the code of 
the keyboard key that was pressed (the first event handler).
4. The click event listener listening on the bubbling phase on the div#elem1 element that alerts the
 tagName of the target element (the second event handler).

In a later assignment, we'll cover the concept that this practice problem surfaces — the event loop.
 For now, just note that events queue and it's the oldest one that gets processed first regardless of
  the type of event.
*/ 