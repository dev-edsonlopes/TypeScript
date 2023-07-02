# Tipagem no Typescript

## Como adicionar tipos nas Variáveis

```typescript
let message: string = "Hello World!"
console.log(message)
```
`let`:é uma palavra-chave usada para declarar uma variável local com escopo de bloco.
`message`:  é o nome da variável que você está declarando.
`string`:  é o tipo de dado que a variável pode armazenar.
`"Hello World!"`: é o valor inicial atribuído à variável.

`tipo variável` `nome da variável`: `tipo de dado` = `Valor da variável`

## Tipos Básicos

### Tipos Primitivos:

`number`: representa números, tanto inteiros quanto de ponto flutuante.

```typescript
let numeric: number = 10
console.log(numeric / 3) // 3.3333333333333335
```
   Ele retorna qualquer tipo de números, inteiro/realEle retorna qualquer tipo de números, inteiro/real

`string`: representa sequências de caracteres.

```typescript
let message: string = "Hello World!"
console.log(message) // Hello World!
```

`boolean`: representa valores true ou false.
```typescript
let isOpen: boolean = true
console.log(isOpen) // true
```
### Any, Void & Never

`any`: O tipo any é usado quando não se deseja aplicar nenhuma restrição de tipo a uma variável ou expressão. Ele permite que a variável armazene qualquer tipo de valor e desativa a verificação de tipo estática do TypeScript para essa variável.

```typescript
let stock: any = 89
stock = null
console.log(stock) // null
```
`void`: O tipo void é usado para indicar que uma função não possui um valor de retorno. Ou seja, a função é executada apenas para realizar ações ou operações, sem produzir um resultado. Normalmente, o valor de retorno de uma função void é undefined.

```typescript
function showsInformation(name: string = 'Edson', age: number = 23): void {

    console.log(
        `Nome: ${name} \nIdade: ${age}`
    )
}

showsInformation() 
//Nome: Edson 
//Idade: 23   
```

`never`: O tipo never é usado para representar valores que nunca ocorrem. Ele é usado em situações em que uma função nunca retorna ou quando ocorrem erros ou loops infinitos. O tipo never também é inferido quando uma função sempre lança uma exceção ou possui um ponto de retorno inalcançável.

```typescript
function erro (message: string): never {
    throw new Error(message);
}
```
## Tipos de Coleção:

### Array, Tuple & Enum
`Array`: O tipo Array é usado para representar uma coleção de elementos do mesmo tipo. É semelhante aos arrays em JavaScript, mas com suporte a tipagem estática. Você pode especificar o tipo dos elementos dentro do array usando a sintaxe `tipo[]` ou `Array<tipo>`.

Exemplo:
```typescript
let numerics: number[] = [1, 2, 3, 4, 5];
let names: Array<string> = ["Edson", "Danilo", "Wilson"];
```
`Tuple`: O tipo Tuple é usado para representar uma sequência de elementos com tipos específicos, onde o número e a ordem dos tipos são fixos. Diferentemente dos arrays, as tuplas permitem que você especifique tipos diferentes para cada posição dentro da sequência.

Exemplo:
```typescript
let registry: [number, string, boolean] = [2454, "Edson Lopes", true]
```
`Enum` é usado para representar um conjunto de valores nomeados. Ele permite criar um tipo personalizado com valores específicos, em vez de usar valores literais. Cada valor do enum tem um nome e um valor correspondente associado.

Exemplo:
```typescript
enum Colors {
  white = "#fff",
  black = "#000"
}

const white: string = Colors.white
console.log(white)

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
```