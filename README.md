# Finance Manager

Este é um projeto de gestão de finanças utilizando AdonisJS no backend e Nuxt 3 no frontend.

## Requisitos

- Node.js versão 20 ou superior.
- NPM ou Yarn
- Banco de dados (MySQL)

## Configuração do Backend (AdonisJS)

1. Clone o repositório:

   ```sh
   git clone https://github.com/HenriqueMVSS/financeManager-backend-adonisjs.git
   cd financeManager-backend-adonisjs
   ```

2. Instale as dependências:
    ```sh
    npm install
    ```

3. Configure o arquivo .env com as credenciais do seu banco de dados:
    ```sh
    DB_CONNECTION=mysql
    MYSQL_HOST=127.0.0.1
    MYSQL_PORT=3306
    MYSQL_USER=root
    MYSQL_PASSWORD=senha
    MYSQL_DB_NAME=finance_manager
    ```

4. Execute as migrations para criar as tabelas no banco de dados:
    ```sh
    node ace migration:run
    ```

5. Inicie o servidor AdonisJS:
    ```sh
    node ace serve --hmr
    ```

6. Se quiser testar a aplicação full stack, acessa o repositorio e clona:
   ```sh
    git clone https://github.com/HenriqueMVSS/financeManager-Front-Nuxt.git
    ```

## Utilização
- Para testar a aplicação é necessário utilizar o comando `` node ace db:seed`` para executar o seed e criar o usuario de teste, seguem dados abaixo:

   ```
   {
      name: 'Test User',
      email: 'test@example.com',
      password: '123456',
   }
    ```


1. Rota de Login

- Método: POST
- URL: http://localhost:3333/api/login
- Body (JSON):
  ```sh
  {
    "email": "test@example.com",
    "password": "123456"
  }
  ```

  - Resposta esperada:
  ```
  {
    "type": "bearer",
    "message": "Login realizado com sucesso",
    "token": "TOKEN_AQUI"
  }
  ```


2. Rota de Listagem de Despesas
   
   - Método: GET
   - URL: http://localhost:3333/api/expenses
   - Headers: Authorization: Bearer TOKEN_AQUI
   
3. Rota de Criação de Despesa
   
   - Método: POST
   - URL: http://localhost:3333/api/expenses
   - Headers:Authorization: Bearer TOKEN_AQUI
   - Body (JSON):
  ```sh
  {
    "category": "Food",
    "value": 100,
    "amountSpent": 100,
    "expenseDate": "2023-10-01"
  }
  ```

3. Testar a Rota de Atualização de Despesa
   - Método: PUT
   - URL: http://localhost:3333/api/expenses/:id
   - Headers:Authorization: Bearer TOKEN_AQUI
   - Body (JSON):
  ```sh
  {
    "category": "Food",
    "value": 150,
    "amountSpent": 150,
    "expenseDate": "2023-10-01"
  }
  ```
4. Testar a Rota de Exclusão de Despesa
   - Método: DELETE
   - URL: http://localhost:3333/api/expenses/:id
   - Headers:Authorization: Bearer TOKEN_AQUI

5. Rota de Listagem de Receitas
   
   - Método: GET
   - URL: http://localhost:3333/api/incomes
   - Headers: Authorization: Bearer TOKEN_AQUI
   
6. Rota de Criação de Receita
   
   - Método: POST
   - URL: http://localhost:3333/api/incomes
   - Headers:Authorization: Bearer TOKEN_AQUI
   - Body (JSON):
  ```sh
  {
    "category": "Food",
    "value": 100,
    "amountSpent": 100,
    "expenseDate": "2023-10-01"
  }
  ```

7. Testar a Rota de Atualização de Receita
   - Método: PUT
   - URL: http://localhost:3333/api/incomes/:id
   - Headers:Authorization: Bearer TOKEN_AQUI
   - Body (JSON):
  ```sh
  {
    "category": "Salary",
    "value": 5500,
    "amountReceived": 5500,
    "receiptDate": "2023-10-01"
  }
  ```
8. Testar a Rota de Exclusão de Receitas
   - Método: DELETE
   - URL: http://localhost:3333/api/incomes/:id
   - Headers:Authorization: Bearer TOKEN_AQUI


Licença
Este projeto está licenciado sob a licença MIT.

Este [README.md](http://_vscodecontentref_/0) fornece um guia completo para configurar, testar e utilizar o backend do seu projeto AdonisJS, incluindo instruções detalhadas para testar cada rota usando ferramentas de API como Postman.