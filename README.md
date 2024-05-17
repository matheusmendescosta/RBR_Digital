[![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=https://github.com/matheusmendescosta)](https://github.com/matheusmendescosta)
[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/matheusmendescosta/)](https://www.linkedin.com/in/matheusmendescosta/)

# Teste para Desenvolvedor Full Stack - RBR Digital

## Montando o ambiente de desenvolvimento

### Backend
Clone o projeto

`git clone https://github.com/matheusmendescosta/RBR_Digital`

Vamos começar com o backend

Acesse a pasta do projeto

`cd RBR_Digital/`

Acesse a pasta do backend

`cd backend`

Na pasta backend instale as dependencias

Instalando dependencias

`npm i`

Crie o arquivo de variaveis ambiente na raiz do projeto

`.env`

Em seu arquivo .env configure sua string de conexão com o mongodb

```
MONGODB_URI=SUA_STRING_DE_CONEXÃO
```

Agora basta rodar o projeto com o comando 

`npm run dev`


OBS: Certifique-se de ter o node.js, npm, typescript instalados em sua maquina

Se tudo estiver correto você podera observar a seguinte mensagem em seu terminal

```
Server is running
Connected to MongoDB
```


### Frontend

Acesse a pasta frontend/rbr-frontend

`cd frontend/rbr-frontend`

Na pasta frontend/rbr-frontend instale as dependencias

Instalando as dependencias

`npm i`

Agora basta rodar o projeto com o comando 

`npm run dev`

Se tudo ocorrer bem você verá a mensagem 

```
▲ Next.js 14.2.3
  - Local:        http://localhost:3000

 ✓ Starting...
 ✓ Ready in 4.9s
```

Acesse o link informado pelo frontend http://localhost:3000

Se tudo estiver ok, você vai ver a tela inicial, então é só clicar em get started e testar a aplicação :D
