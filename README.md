# SportsX

Criando container usando o docker:

1 - Abrir o terminal do seu sistema operacional e rodar o comando:

docker run --name nome_container -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres:12.3

Obs: Você deve especificar a versão 12.3 (versão utilizada na minha máquina) para que não haja nenhum problema de compatibilidade. Onde está escrito "nome_container", você pode escolher o nome que quiser. Você pode escolher também uma senha e porta diferentes. O importante é manter a mesma versão do banco de dados.
