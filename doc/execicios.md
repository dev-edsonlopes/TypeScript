# Exercícios

## Tipagem Typescript

### Exercício 1:
1. Declare uma variável chamada age e atribua a ela o valor numérico da sua idade. Em seguida, exiba a mensagem "Minha idade é X anos", substituindo X pelo  valor da variável.

```typescript
let age: number
age = 23

console.log(`Minha idade é ${age}`)
```

### Exercício 2:
2. Declare uma variável chamada fullName e atribua a ela uma string com seu nome completo. Em seguida, exiba a mensagem "Meu nome é X", substituindo X pelo valor da variável.

```typescript
let fullName: string
fullName = "Edson Lopes da Silva Junior"

console.log(`Meu nome completo é ${fullName}`)
```

### Exercício 3:
3. Declare uma variável chamada isStudent e atribua a ela um valor booleano que indique se você é estudante ou não. Em seguida, exiba a mensagem "Eu sou 
estudante: X", substituindo X pelo valor da variável.

```typescript
let isStudent: boolean 
isStudent = true

let response: string = isStudent ? "SIM" : "NÃO"

console.log(`Eu sou estudante: ${response}`)

```

### Exercício 4:
4. Crie uma função chamada calculateArea que receba a largura e altura de um retângulo como parâmetros. A função deve retornar a área desse retângulo (largura multiplicada pela altura). Chame a função com valores de sua escolha e exiba o resultado.

```typescript
function calculateArea(height: number, width: number): number {
    return height * width
}

console.log(calculateArea(8,8))

```

### Exercício 5:
5. Crie um enum chamado DaysOfWeek que represente os dias da semana. Inclua os valores "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado" e "Domingo". Em seguida, declare uma variável chamada today e atribua a ela o valor "Sexta" usando o enum. Exiba a mensagem "Hoje é X", substituindo X pelo valor da variável.

```typescript
enum DaysOfWeek {
  "Domingo"
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado"
}

const today = DaysOfWeek.Sexta

console.log(`Hoje é ${DaysOfWeek[today]}`)
```

### Exercício 6:
6. Declare uma variável chamada myVariable com o tipo union number | boolean. Atribua a ela um valor numérico e, em seguida, imprima seu valor no console.

```typescript
let myVariable: number | boolean;

myVariable = 16;

console.log(myVariable);
```
### Exercício 7:
7. Crie um type alias chamado Person que represente um objeto com as propriedades name (string) e age (number). Em seguida, declare uma variável chamada person do tipo Person e atribua a ela um objeto com um nome e uma idade. Imprima as propriedades name e age desse objeto no console.

```typescript 
type Person = {
    name: string;
    age: number;
  }

let person: Person = {
    name: "Edson",
    age: 23
}

console.log(person)
```
### Exercicios 8:

8. Declare uma função chamada multiply que recebe dois parâmetros do tipo number. A função deve retornar o resultado da multiplicação dos dois números. Chame a função com dois argumentos numéricos e imprima o resultado no console.

```typescript
function multiply(a: number, b: number) {
    return a * b
} 

console.log(multiply(7,3))

```

### Exercícios 9:

9. Declare uma variável chamada value do tipo any e atribua a ela um valor numérico. Use uma type assertion para informar ao compilador que value é uma string e, em seguida, imprima seu comprimento no console.

```typescript
let value: any = "Hello, TypeScript!";
let len: number = (value as string).length;
console.log(len);

```