# Aprendendo Typescript

## Tipos básicos

```
// number
let numero: number = 100;

// string
let frase: string = "Geração Tech Unimed-BH | Fullstack";

// boolean
let assistiuAsAulas: boolean = true;

// array
let stack: string[] = ["TypeScript", "JavaScript", "Angular.."];
```

## Objetos

```
const eu = {
  nome: "Guilherme",
  idade: 26,
  profissao: "Desenvolvedor",
};
```

## Interfaces

```
interface Dev {
  nome: string,
  idade: number,
  profissao: string,
}

const eu: Dev = {
  nome: "Guilherme",
  idade: 26,
  profissao: "Desenvolvedor",
};
```

## Enum

```
enum CategoriasDeFilmes {
  Terror,
  Suspense,
  Comedia,
  Drama
}

const filme = {
    name: "Forrest Gump",
    categoria: CategoriasDeFilmes.Drama,
    melhorFilmeJaProduzido: true
}
```

## tsconfi.json
#### target - Serve para especificarmos a versão do ECMAScript que quermos compilar, garantindo que browsers antigos consigam rodar o código.
#### lib - Podemos especificar quais bibliotecas serão usadas na compilação.
#### outDir - Diz para onde irão os arquivos js gerados pelo typescript.
#### rootDir - Especifica o local dos arquivos que serão compilados.
#### strictNullChecks - Faz com que o ts verifique/deixe de verificar se uma referência é null ou não;
#### noImplicitAny - Faz com que o ts deixe de atribuir implicitamente (quando não há uma atribuição específica), o valor any a um tipo.
