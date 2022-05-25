let button = document.getElementById("button");
let input1 = document.getElementById("input1") as HTMLInputElement;
let input2 = document.getElementById("input2") as HTMLInputElement;

function adicionarNumeros(
  n1: number,
  n2: number,
  devePrintar: boolean,
  frase: string
): number {
  let resultado = n1 + n2;
  return n1 + n2;
}

let devePrintar = true;

button?.addEventListener("click", () => {
  console.log(
    adicionarNumeros(Number(input1?.value), Number(input2?.value), devePrintar)
  );
});