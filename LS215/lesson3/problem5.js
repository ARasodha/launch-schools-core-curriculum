// Problem 5
// Note: This is a hard problem that exceeds the difficulty you'll see in our assessments or 
// technical interviews
/*
Input:
Output:
Rule
- implement encoding and decoding for the rail fence cipher
- rail fence cipher -> a form of transposition cipher that gets its name from the way in which it's
encoded. It's was used by the ancient greeks.
- in the rail fence cipher, the message is written downwards on successive "rails" of an imaginary
fence, then moving up when we get to the bottom (like a zig-zag)
- finally the message is then read off in rows
Examples/ Test Cases
- for example: using three "rails" and the message "WE ARE DISCOVERED FLEE AT ONCE", the cipher
writes out:
W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . E . F . E . A . O . C .
. . A . . . I . . . V . . . D . . . E . . . N . .
then reads off:
WECRLTEERDSOEEFEAOCAIVDEN
- to decrypt a message you take the zig-zag shape and fill the cipher text along the rowws;
? . . . ? . . . ? . . . ? . . . ? . . . ? . . . ?
. ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
. . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .
- the first row has seven spots that can be fiilled with "WECRLTE"
W . . . E . . . C . . . R . . . L . . . T . . . E
. ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
. . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .
- now the 2nd row takes "ERDSOEEFEAOC"
W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . E . F . E . A . O . C .
. . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .
- leave "AIVDEN" for the last row
W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . E . F . E . A . O . C .
. . A . . . I . . . V . . . D . . . E . . . N . .
- if you now read along the zig zag shape, you can read the original message
Algorithm
-
*/