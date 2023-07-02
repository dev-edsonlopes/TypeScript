enum Colors {
  white = "#fff",
  black = "#000"
}

const white: string = Colors.white
console.log(white)

const black: string = Colors.black
console.log(black)

enum weekDays {
  Domingo,
  Segunda,
  Terça,
  Quarta,
  Quinta,
  Sábado
}

let dia: weekDays = weekDays.Sábado;
console.log(`Numero do dia: ${dia}`);  
console.log(weekDays[5]); 