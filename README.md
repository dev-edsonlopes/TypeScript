# TypeScript

TypeScript é uma linguagem de programação desenvolvida pela Microsoft ele é `SUPERSET` do JavaScript tudo que tem no JavaScript também tem no TypeScript.
## Typecript x JavaScript

TypeScript é uma linguagem de tipagem `ESTÁTICA`
JavaScript é uma lingaugem de tipagem `DINAMICA`

Veja o Exemplo:

Javascript:
```Javascript
//Javascript  Tipagem dinâmica
let name = 'Edson Lopes'
console.log(name) // Edson Lopes

name = 12345
console.log(name) // 12345

// Ele pode armazenar valores independente do seu tipo.

```
Typescript:
```Typescript
    let name: string = 'Edson Lopes'
    console.log(name) // Edson Lopes

    name = 12345
    console.log(name)
```
    Type 'number' is not assignable to type 'string'

## Por que TypeScript?
- Tipagem estática: O TypeScript permite declarar tipos para variáveis, parâmetros de função, retorno de função, entre outros. Isso ajuda a identificar erros de tipo antes mesmo de executar o código, melhorando a segurança e robustez.

- Recursos de IDE: O TypeScript oferece recursos avançados, como autocompletar e verificação de erros em tempo real, que são fornecidos pelas IDEs e editores de código.

- Manutenção e escalabilidade: Com o sistema de tipos estáticos, o TypeScript facilita a manutenção de projetos grandes. É mais fácil entender as dependências entre os módulos, encontrar problemas e refatorar o código.

- Compatibilidade com JavaScript: O TypeScript é compatível com o JavaScript existente, permitindo que você aproveite bibliotecas e frameworks já existentes.

- Ecossistema e suporte: O TypeScript possui uma comunidade ativa e é suportado pela Microsoft, o que garante atualizações e suporte contínuos.

    O TypeScript ajuda a evitar erros em produção, melhora a produtividade e a qualidade do código.

```Javascript
function sum(a, b) {
    return a + b
}

console.log(sum(1, 2)) // 3
console.log(sum('1', '2')) // 12
``` 
```Typescript
function sum(a: number, b: number) {
    return a + b
}
console.log(sum(1, 2)) // 3 
console.log(sum('1', '2'))
```
    Type 'number' is not assignable to type 'string'