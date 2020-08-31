# SportsX

## Colocando a API no ar e rodando a Aplicação

Para colocar a API no ar, é necessário que você instale o postgres, **versão 12.3**, no seu computador. Eu recomendo que você instale o docker e crie um container, para garantir que não vai haver nenhum conflito com os softwares já instalados e configurações do seu computador. Após a instalação do postgres, você deve criar um banco de dados com o nome _sportsx_database_. Se quiser usar um nome diferente para o banco de dados, basta entrar dentro do arquivo _ormconfig.json_ e, na propriedade _database_, colocar o nome que desejar.

Após instalar o postgres e criar o banco de dados, abra um terminal e entre no diretório server. Instale todas as dependências do projeto utilizando _npm_ ou _yarn_: _npm install_ ou _yarn_.

Após a instalação de todas as dependências, é necessário criar as tabelas no banco de dados. Para isso, é necessário que você execute as _migrations_ do projeto. Sendo assim, em um terminal, execute o comando: _yarn typeorm migration:run_ ou _npm run-script typeorm migration:run_.

Por fim, execute a API, usando o comando _yarn start_ ou _npm start_. Se tudo ocorrer bem, irá aparecer uma mensagem no console do terminal com o seguinte texto: _Server is running on port 3333_.

Agora é hora de executar a aplicação front-end. Entre dentro da pasta _client_ e instale todas as dependências do projeto, usando _yarn_ ou _npm_. Agora é só executar a aplicação, com mo comando _npm start_ ou _yarn start_.

## Criando container usando o docker:

Guia de instalação do docker: https://github.com/sergiocampos93/SportsX

Após instalar o docker no seu computador, utilize o comando abaixo como template:

_docker run **--name** sportsx_postgres **-e POSTGRES_PASSWORD**=docker **-p** 5432:5432 **-d** postgres:12.3_

Entendendo os parâmetros:

**--name**: É o nome do container. Escolha o nome que quiser. No meu caso, escolhi _sportsx_postgres_.

**-e POSTGRES_PASSWORD**: A senha que você vai utilizar no postgres. Escolha a que você quiser. Eu escolhi _docker_ mesmo.

**-p**: O número da porta que você vai utilizar para o container (pode escolher alguma diferente de 5432, caso ela já esteja ocupada) e a porta do postgress que vai rodar dentro do container (deve ser 5432). Sendo assim, supondo que você queira que seu container rode na porta 3333 da sua máquina, por exemplo, o parâmetro deve ficar _-p 3333:5432_. No meu caso, deixei ambas as portas _5432_.

**-d**: O nome da imagem que vamos utilizar no nosso container. No nosso caso, vamos usar o postgres na versão _12.3_.

**Obs: Você deve especificar a versão 12.3 (versão utilizada na minha máquina) para que não haja nenhum problema de compatibilidade.**

**Obs: Se você mudar o nome de qualquer um dos parâmetros, com exceção do nome do container, é necessário que você configure o arquivo ormconfig.json com os memsos valores que você usou.**

**Obs: Não se esqueça de criar o banco de dados. Se preferir, pode criar usando um SGBD, como o DBeaver.**


