enum DaysOfWeek {
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
  "Domingo",
}

const today = DaysOfWeek.Sexta

console.log(`Hoje é ${DaysOfWeek[today]}`)