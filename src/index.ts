/*
 * Crie um programa que simule as operações de uma conta corrente,
 * onde o cliente deve poder fazer o seguinte:
 * - Consultar saldo,
 * - Fazer um depósito,
 * - Fazer um saque
 * - Imprimir um extrato.
 * Utilize estruturas de dados em memória
 * para armazenar as informações da conta e
 * das operações feitas pela conta.
 */

import { randomUUID } from "node:crypto";
import Scanner from "@codeea/scanner";

let scanner: Scanner;

type Conta = {
  nomeCliente: string;
  numero: number;
  agencia: number;
  saldo: number;
}

type Transacao = {
  id: string;
  valor: number;
  numero: number;
  agencia: number;
  tipo: TipoTransacao;
  operacao: TipoOperacao;
}

type TipoTransacao = 'E' | 'S';

type TipoOperacao = "SAQ" | "DEP" | "TRANSF" | "PIX";

const contas: Conta[] = [];
const transacoes: Transacao[] = [];

async function main() {
    let operacao = 0;

    const agencia = parseInt(await scanner.question("Informe o número da agência: "));
    const numeroConta = parseInt(await scanner.question("Informe o número da agência: "));

    let conta = localizaConta(agencia, numeroConta);

    if (!conta) {
      console.log("Conta não encontrada")
    } else {
      imprimeMenu();
      operacao = parseInt(await scanner.question("Informe a operação"));
    }

  while (true) {
        if (operacao === 0){
      console.log("Obrigado por utilizar nossos serviços\nVolte Sempre")
      break;
    }

    if
  } while (true);
  }

function imprimeMenu(){
  const menu = `
  1 - CONSULTAR SALDO
  2 - DEPOSITO
  3 - SACAR
  4 - EXTRATO
  0 - SAIR
  `;
  console.log(menu);

}

function inicializarBanco(){
  const conta: Conta = {
    nomeCliente: "Gustavo Silveira Silva",
    numero: 1234-5,
    agencia: 1,
    saldo: 100
  };

  contas.push(conta);

  const transacao: Transacao = {
    id: randomUUID(),
    valor: 100,
    numero: conta.numero,
    agencia: conta.agencia,
    tipo: "E",
    operacao: "DEP",
  };

  transacoes.push(transacao);
}

function localizaConta(agencia: number, numeroConta:number){
  for (let conta of contas){
    if (conta.agencia === agencia && conta.numero === numeroConta){
      return conta;
    }
  }
}

(async () =>{
  scanner = new Scanner();

  inicializarBanco();

  await main();
  scanner.close();
})();
