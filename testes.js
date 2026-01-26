/*
=====================================================
TRILHA DE EXERCÍCIOS — DO ZERO ATÉ PROMISES (BACKEND)
=====================================================

REGRAS:
- Resolva os exercícios na ordem
- Não pule etapas
- Use console.log para testar
- Um exercício por vez

-----------------------------------------------------
BLOCO 1 — FUNDAMENTOS ABSOLUTOS
-----------------------------------------------------
*/

/*
EXERCÍCIO 1 — Função básica
Crie uma função somar(a, b) que retorne a soma de dois números.
*/
function somar(a, b) {
   
}

/*
EXERCÍCIO 2 — Condicional
Crie uma função verificarIdade(idade) que:
- retorne "menor de idade" se idade < 18
- retorne "maior de idade" se idade >= 18
*/
function verificarIdade(idade) {
  // seu código aqui
}

/*
EXERCÍCIO 3 — Loop
Crie uma função criarLista(n) que retorne um array com números de 1 até n.
*/
function criarLista(n) {
  // seu código aqui
}

/*
-----------------------------------------------------
BLOCO 2 — OBJETOS E ARRAYS (BASE BACKEND)
-----------------------------------------------------
*/

/*
EXERCÍCIO 4 — Objeto
Dado o objeto abaixo, crie uma função que retorne:
"Ana tem 25 anos"
*/
const usuario = { nome: 'Ana', idade: 25 };

function descreverUsuario(usuario) {
  // seu código aqui
}

/*
EXERCÍCIO 5 — Percorrer array
Dado o array abaixo, crie uma função que retorne a soma dos números.
NÃO usar reduce.
*/
const numeros = [2, 4, 6, 8];

function somarNumeros(numeros) {
  // seu código aqui
}

/*
EXERCÍCIO 6 — Filtrar dados
Retorne somente os usuários ativos.
*/
const usuarios = [
  { id: 1, ativo: true },
  { id: 2, ativo: false },
  { id: 3, ativo: true }
];

function filtrarUsuariosAtivos(usuarios) {
  // seu código aqui
}

/*
-----------------------------------------------------
BLOCO 3 — FUNÇÕES COMO DADOS (CALLBACK)
-----------------------------------------------------
*/

/*
EXERCÍCIO 7 — Callback simples
Crie a função processar(valor, callback)
Ela deve chamar o callback passando valor * 2
*/
function processar(valor, callback) {
  // seu código aqui
}

/*
EXERCÍCIO 8 — Simular atraso
Crie a função buscarDados(callback)
Ela deve:
- esperar 2 segundos
- chamar o callback com "dados carregados"
*/
function buscarDados(callback) {
  // seu código aqui
}

/*
-----------------------------------------------------
BLOCO 4 — CALLBACK HELL (PROBLEMA REAL)
-----------------------------------------------------
*/

/*
EXERCÍCIO 9 — Encadeamento com callbacks
Implemente funções que:
1. Busquem um usuário
2. Busquem os pedidos do usuário
3. Calculem o total gasto

Use APENAS callbacks.
*/

function buscarUsuarioCallback(id, callback) {
  // seu código aqui
}

function buscarPedidosCallback(userId, callback) {
  // seu código aqui
}

function calcularTotalCallback(pedidos, callback) {
  // seu código aqui
}

/*
-----------------------------------------------------
BLOCO 5 — PROMISE DO ZERO
-----------------------------------------------------
*/

/*
EXERCÍCIO 10 — Criar Promise
Crie a função buscarUsuarioPromise(id)
- resolve se id === 1
- reject caso contrário
*/
function buscarUsuarioPromise(id) {
  // seu código aqui
}

/*
EXERCÍCIO 11 — Encadeamento com Promise
1. Busque o usuário
2. Busque os pedidos
3. Calcule o total
Use .then() e finalize com .catch()
*/

function buscarPedidosPromise(userId) {
  // seu código aqui
}

function calcularTotalPromise(pedidos) {
  // seu código aqui
}

/*
-----------------------------------------------------
BLOCO 6 — ASYNC / AWAIT (PADRÃO BACKEND)
-----------------------------------------------------
*/

/*
EXERCÍCIO 12 — Refatoração
Reescreva o exercício 11 usando:
- async / await
- try / catch
*/
async function executarAsync() {
  // seu código aqui
}

/*
-----------------------------------------------------
BLOCO 7 — DESAFIO FINAL (BACKEND REAL)
-----------------------------------------------------
*/

/*
EXERCÍCIO 13 — Pipeline assíncrono
Crie a função gerarRelatorio()

Ela deve:
- buscar usuários e pedidos em paralelo
- montar um relatório com total por usuário
- tratar erros corretamente
*/

async function gerarRelatorio() {
  // seu código aqui
}

/*
=====================================================
FIM DA TRILHA
=====================================================
*/
