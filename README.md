

# Sistemas Distribuidos API Node.js 

Esta é uma aplicação Node.js que fornece uma API para gerenciar uma lista de usuários.

## Configuração

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Clone este repositório usando o seguinte comando:

```bash
git clone https://github.com/775PedroCmd/Docker-SistemasDistribuidos
```

3. Navegue até o diretório do projeto:

```bash
cd node-api
```

4. Instale as dependências do projeto:

```bash
npm install
```

## Execução

Após a configuração, você pode iniciar o servidor usando o seguinte comando:

```bash
npm start
```

O servidor estará em execução na porta 5000 por padrão. Você pode alterar a porta no arquivo `index.js` se necessário.

## Endpoints

### Listar Usuários

- **URL:** `/users`
- **Método:** `GET`
- **Descrição:** Retorna uma lista de todos os usuários.
- **Exemplo de Requisição:**
  ```bash
  curl http://localhost:5000/users
  ```

### Obter Usuário por ID

- **URL:** `/users/:id`
- **Método:** `GET`
- **Descrição:** Retorna os detalhes de um usuário com o ID especificado.
- **Parâmetros de URL:** `id` (ID do usuário)
- **Exemplo de Requisição:**
  ```bash
  curl http://localhost:5000/users/1
  ```

### Adicionar Usuário

- **URL:** `/users`
- **Método:** `POST`
- **Descrição:** Adiciona um novo usuário à lista.
- **Corpo da Requisição:** JSON com os detalhes do usuário (por exemplo, `{ "id": 21, "name": "Umaima" }`).
- **Exemplo de Requisição:**
  ```bash
  curl -X POST -H "Content-Type: application/json" -d '{"id": 21, "name": "Umaima"}' http://localhost:5000/users
  ```

### Atualizar Usuário por ID

- **URL:** `/users/:id`
- **Método:** `PUT`
- **Descrição:** Atualiza os detalhes de um usuário com o ID especificado.
- **Parâmetros de URL:** `id` (ID do usuário)
- **Corpo da Requisição:** JSON com os detalhes atualizados do usuário (por exemplo, `{ "name": "Umaima Hassan" }`).
- **Exemplo de Requisição:**
  ```bash
  curl -X PUT -H "Content-Type: application/json" -d '{"name": "Umaima Hassan"}' http://localhost:5000/users/21
  ```

### Remover Usuário por ID

- **URL:** `/users/:id`
- **Método:** `DELETE`
- **Descrição:** Remove o usuário com o ID especificado.
- **Parâmetros de URL:** `id` (ID do usuário)
- **Exemplo de Requisição:**
  ```bash
  curl -X DELETE http://localhost:5000/users/21
  ```

Este é um exemplo básico de como configurar, executar e interagir com a API. Sinta-se à vontade para explorar mais funcionalidades e personalizá-la de acordo com suas necessidades.
