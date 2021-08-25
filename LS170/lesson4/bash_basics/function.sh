greeting () {
  echo Hello $1
}

greeting 'Peter'

greetingTwo () {
  echo "Hello $1"
  echo Hello $2
}

greetingTwo 'Peter' 'Paul'

# Note: we can interpolate variables in dobule quoted strings like line 8 or not like line 9