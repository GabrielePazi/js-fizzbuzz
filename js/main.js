const fizzBuzzContainer = document.querySelector(".fizz-buzz-container");

for (let i = 1; i <= 100; i++) {

  //crea singole celle
  let singleSquare = document.createElement("div")

  //aggiunge la classe square indipendentemente dal contenuto
  singleSquare.classList.add('square')

  if (i % 3 == 0 && i % 5 == 0) {

    //assegna classe con colore e il contenuto FizzBuzz
    singleSquare.classList.add('bg-danger')
    singleSquare.innerHTML = "FizzBuzz"

    //appende la singola cella al padre se no non si vede
    fizzBuzzContainer.append(singleSquare)
  } else {

    if (i % 3 == 0) {

      //assegna classe con colore e il contenuto Fizz
      singleSquare.classList.add('bg-success')
      singleSquare.innerHTML = "Fizz"

      fizzBuzzContainer.append(singleSquare)
    } else if (i % 5 == 0) {

      //assegna classe con colore e il contenuto Buzz      
      singleSquare.classList.add('bg-warning')
      singleSquare.innerHTML = "Buzz"

      fizzBuzzContainer.append(singleSquare)
    } else {

      //assegna classe con colore e il valore dell'indice      
      singleSquare.classList.add('bg-primary')
      singleSquare.innerHTML = i.toString()

      fizzBuzzContainer.append(singleSquare)
    }
  }
}