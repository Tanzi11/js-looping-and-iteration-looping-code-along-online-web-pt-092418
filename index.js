function writeCards( names, event ) {
  let thanksCards = []
  for ( let i = 0; i < names.length; i++ ) {
    thanksCards.push( `Thank you, ${names[i]}, for the wonderful ${event} gift!` )
  }
  return thanksCards
}

function countdown(countdown) {
  while (countdown > 0) {
    console.log(countdown);
    countdown -= 1;
  }
  console.log(countdown);
}
