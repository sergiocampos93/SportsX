# SportsX

## Sobre a aplicação

### Padrões de projetos

Para manter o código de toda a aplicação padronizado, foram utilizadas 3 ferramentas: _EditoConfig_, _EsLint_ e _Prettier_. Todo o projeto foi desenvolvido utilizando typescript.

### Front-end

No front-end, foram usadas as seguintes bibliotecas:

_axios_: Biblioteca para consumir dados da API, utilizando promises.<br/>
_react-router-dom_: Biblioteca par gerenciar as rotas da aplicação.<br/>
_styled-components_: Biblioteca para isolar o css dentro do escopo do componenete, para que os estilos de um componente não afetem os estilos de outro componente.<br/>
_react-hook-form_: Biblioteca para controlar e validar formulários. Validar se os dados estão no formato correto.<br/>
_react-icons_: Biblioteca que disponibiliza vários tipos de ícones para serem utilizados na aplicação.<br/>
_polished_: Biblioteca para escrever estilos dentro do javascript.<br/>

### Back-end

No back-end, forma suadas as seguintes bibliotecas:

_express_: É um framework que oferece soluções para gerenciar requisições, definir configurações da aplicação, adicionar middlewares nas requisições e integrar view engines.  <br/>
_typeorm_: É um ORM que pode rodar no Nodejs e pode ser usado com Typescript.  <br/>
_uuidv4_: Biblioteca usada para gerar um identificador único universal. Muito útil para usar nas colunas de ID das tabelas.   <br/>

## Colocando a API no ar e rodando a Aplicação

Para colocar a API no ar, é necessário que você instale o postgres, **versão 12.3**, no seu computador. Eu recomendo que você instale o docker e crie um container, para garantir que não vai haver nenhum conflito com os softwares já instalados e configurações do seu computador. Após a instalação do postgres, você deve criar um banco de dados com o nome _sportsx_database_. Se quiser usar um nome diferente para o banco de dados, basta entrar dentro do arquivo _ormconfig.json_ e, na propriedade _database_, colocar o nome que desejar.

Após instalar o postgres e criar o banco de dados, abra um terminal e entre no diretório server. Instale todas as dependências do projeto utilizando _npm_ ou _yarn_: _npm install_ ou _yarn_.

Após a instalação de todas as dependências, é necessário criar as tabelas no banco de dados. Para isso, é necessário que você execute as _migrations_ do projeto. Sendo assim, em um terminal, execute o comando: _yarn typeorm migration:run_ ou _npm run-script typeorm migration:run_.

Por fim, execute a API, usando o comando _yarn start_ ou _npm start_. Se tudo ocorrer bem, irá aparecer uma mensagem no console do terminal com o seguinte texto: _Server is running on port 3333_.

Agora é hora de executar a aplicação front-end. Entre dentro da pasta _client_ e instale todas as dependências do projeto, usando _yarn_ ou _npm_. Agora é só executar a aplicação, com mo comando _npm start_ ou _yarn start_.

## Criando container usando o docker:

Guia de instalação do docker: https://www.notion.so/Instalando-Docker-6290d9994b0b4555a153576a1d97bee2

Após instalar o docker no seu computador, em um terminal, utilize o comando abaixo para criar o container da aplicação:

_docker run **--name** sportsx_postgres **-e POSTGRES_PASSWORD**=docker **-p** 5432:5432 **-d** postgres:12.3_

Entendendo os parâmetros:

**--name**: É o nome do container. Escolha o nome que quiser. No meu caso, escolhi _sportsx_postgres_.

**-e POSTGRES_PASSWORD**: A senha que você vai utilizar no postgres. Escolha a que você quiser. Eu escolhi _docker_ mesmo.

**-p**: O número da porta que você vai utilizar para o container (pode escolher alguma diferente de 5432, caso ela já esteja ocupada) e a porta do postgress que vai rodar dentro do container (deve ser 5432). Sendo assim, supondo que você queira que seu container rode na porta 3333 da sua máquina, por exemplo, o parâmetro deve ficar _-p 3333:5432_. No meu caso, deixei ambas as portas _5432_.

**-d**: O nome da imagem que vamos utilizar no nosso container. No nosso caso, vamos usar o postgres na versão _12.3_.

**Obs: Você deve especificar a versão 12.3 (versão utilizada na minha máquina) para que não haja nenhum problema de compatibilidade.**

**Obs: Se você mudar o nome de qualquer um dos parâmetros, com exceção do nome do container, é necessário que você configure o arquivo ormconfig.json com os mesmos valores que você usou.**

**Obs: Não se esqueça de criar o banco de dados. Se preferir, pode criar usando um SGBD, como o DBeaver.**


