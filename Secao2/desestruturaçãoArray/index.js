let pessoaImportante = {
  id: 1,
  nome: "Mariana Silva",
  cargo: "Gerente de Operações",
  departamento: "Administrativo",
  email: "mariana.silva@empresa.com.br",
  telefone: "+55 (11) 98765-4321",
  cpf: "123.456.789-00",
  dataNascimento: "1985-07-14",
  dataAdmissao: "2020-02-10",
  endereco: {
    rua: "Av. Paulista",
    numero: 1000,
    complemento: "Conjunto 1203",
    bairro: "Bela Vista",
    cidade: "São Paulo",
    estado: "SP",
    cep: "01310-000"
  },
  permissoes: {
    acessoTotal: true,
    editarUsuarios: true,
    visualizarRelatorios: true,
    configurarSistema: true
  },
  status: "Ativo",
  ultimoLogin: "2025-10-20T09:42:00Z",
  fotoPerfil: "https://empresa.com.br/imagens/usuarios/mariana_silva.jpg",
  metas: [
    { ano: 2025, descricao: "Aumentar eficiência operacional em 15%", concluida: false },
    { ano: 2024, descricao: "Implantar novo sistema de gestão", concluida: true }
  ],
  observacoes: "Funcionária destaque do ano de 2024. Responsável por decisões estratégicas."
};

let = {nome, cargo, ...rest} = pessoaImportante

console.log(rest);


