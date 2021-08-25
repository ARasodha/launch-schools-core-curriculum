#!/bin/bash

# output a string if it is longer than 0
string='Hello';

if [[ -n $string ]]
then
  echo $string
fi

# compare two integers and output a string if they are equal
integer_1=10
integer_2=10

if [[ $integer_1 -eq $integer_2 ]]
then
  echo $integer_1 and $integer_2 are the same!
fi

# output string if hello_world.sh file exists
if [[ -e ./hello_world.sh ]]
then
  echo 'File exists'
fi

# nested if statements

integer=4

if [[ $integer -lt 10 ]]
then
  echo $integer is less than 10

  if [[ $integer -lt 5 ]]
  then
    echo $integer is also less than 5
  fi
fi

# two condition branches with if and else
integer=15

if [[ $integer -lt 10 ]]
then
  echo $integer is less than 10
else
  echo $integer is not less than 10
fi

# three conditional branches with if, elif and else
integer=15

if [[ $integer -lt 10 ]]
then
  echo $integer is less than 10
elif [[ $integer -gt 20 ]]
then
  echo $integer is greater than 20
else
  echo $integer is between 10 and 20
fi

# matching two conditions using && (and)
integer=15

if [[ $integer -gt 10 ]] && [[ integer -lt 20 ]]
then
  echo $integer is between 10 and 20
fi

# matching one of two conditions using || (or)
integer=12

if [[ $integer -lt 5 ]] || [[ $integer -gt 10 ]]
then
  echo $integer is less than 5 or greater than 10.
fi

# negating conditions using ! (not)
integer=8

if ! ([ $integer -lt 5 ] || [ $integer -gt 10 ])
then
  echo $integer is between 5 and 10
fi