# Configuração de Estrutura TypeScript

## Passo 1: Inicialização do projeto npm
```csharp
npm init -y
```
Esse comando inicializa um novo projeto npm no diretório atual e gera um arquivo `package.json` com as configurações padrão.

## Passo 2: Instalação das dependências
```csharp
npm install typescript ts-node-dev -D
```
Aqui, você está instalando duas dependências de desenvolvimento: o TypeScript e o `ts-node-dev`. O TypeScript é um superset do JavaScript que adiciona suporte a Tipagem estática, enquanto o `ts-node-dev` é um utilitário que permite executar o código TypeScript diretamente, sem a necessidade de compilação manual.

## Passo 3: Criação dos arquivos
Crie um arquivo `main.ts` dentro da pasta `src`. Esse será o ponto de entrada do seu aplicativo TypeScript.

## Passo 4: Inicialização do TypeScript

```csharp
npx tsc --init
```

Esse comando inicializa o TypeScript no seu projeto e cria um arquivo de configuração chamado `tsconfig.json`. Esse arquivo contém várias opções de configuração que podem ser ajustadas para atender às necessidades do seu projeto.

## Passo 5: Configuração dos scripts no arquivo `package.json`
No arquivo `package.json`, adicione as seguintes entradas ao objeto `"scripts"`:

```json
"scripts": {
  "build": "tsc",
  "dev": "ts-node-dev --respawn --quiet --clear ./src/main.ts"
}
```
Esses scripts permitem executar comandos personalizados através do npm.

`"build": "tsc"`: Executa o compilador do TypeScript (tsc) para gerar o código JavaScript equivalente a partir dos arquivos TypeScript.

`"dev": "ts-node-dev --respawn --quiet --clear ./src/main.ts"`: Usa o `ts-node-dev` para executar o código TypeScript em tempo de desenvolvimento. Ele monitora os arquivos no diretório `src` e reinicia automaticamente o servidor toda vez que houver alterações nos arquivos.

## Passo 6: Configuração do arquivo tsconfig.json
No arquivo `tsconfig.json`, defina as seguintes opções de configuração:

```json
"compilerOptions": {
  "rootDir": "./src",
  "outDir": "./dist"
}
```
`"rootDir": "./src"`: Especifica o diretório raiz para a busca de arquivos TypeScript.

`"outDir": "./dist"`: Especifica o diretório de saída para os arquivos JavaScript gerados pelo compilador do TypeScript.

Essa configuração permite que você escreva e execute código TypeScript no diretório `src`, e o código JavaScript resultante será gerado na pasta dist após a execução do comando `npm run build`. Durante o desenvolvimento, você pode executar o código TypeScript diretamente com o comando `npm run dev`, que utiliza o `ts-node-dev` para facilitar a execução e o recarregamento automático do servidor.


