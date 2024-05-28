# API de Agenda de contatos

Está é a documentação dre requisitos para a API de Agenda de Contatos. Esta API permite aos usuários gerenciar contatos, categorizá-los e realizar operações de CRUD.

## Funcionalidade

- Os usuários devem poder adicionar novos contatos com informações como nome, número de telefone, endereço de e-mail, etc

## Requisitos funcionais

- [X] Cadastro de Contatos
- [X] Visualização de Contatos
- [X] Atualização de Contatos
- [X] Exclusão de Contatos

## Requsiitos de Autenticação e Autorização

- [X] Autenticação de Usuários
- [X] Autorização de Acesso às Operações
- [X] Criação de usuário

## Regras de Negócios

- Os usuários devem ser cadastrados com nome e email
- O email deve ser uma chave unica
- Os contatos devem conter pelo menos um nome uma forma de contato (número de telefone, endereço de e-mail, etc.).
- Somente usuários atutenticados podem executar operações de criação, atualização e exclusão de contatos.
- A atuorização é baseada em funcções de usuário, como administrador e usuário regular.
- Todos os dados da API devem ser armazenados de forma segura e protegidos contra acesso não autorizado.
- As entradas do usuário devem ser validados para evitar a inserção de dados incorretos ou maliciosos.