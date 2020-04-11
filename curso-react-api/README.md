# curso-react-api
Api simples em Node para o curso de React da Alura

***

## Endpoints

### GET

- `api/autor` -> array de autores (nome, livro, preço, id)
- `api/autor/livro` -> array de livros (livro, id)
- `api/autor/nome` -> array de nomes (nome, id)
- `api/autor/:id` -> autor com respectivo id (nome, livro, preço, id)

### POST 

- `api/autor` -> criação de autor (retorna o autor inteiro do banco)

### PATCH 

- `api/autor/:id` -> atualiza um autor no banco (retorna o autor inteiro)

### DELETE 

- `api/autor/:id` -> remove o autor do banco

**** 

## Execute a api localmente

1. Instale a ultima versão do Node

```sh
https://nodejs.org/en/
```

2. Clone o projeto na sua máquina

```sh
git clone https://github.com/leticiacamposs2/casa-do-codigo.git
```

3. Acesse a pasta da api

```sh
cd casa-do-codigo/curso-react-api
```

4. Instale todas as dependências da api

```sh
npm install
```

5. Rode a api na sua máquina

```sh
npm start
```

6. Abre o navegador e visualize

```sh
http://localhost:8000
```