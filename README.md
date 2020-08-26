# SportsX

## Criando container usando o docker:

1 - Template comando:

docker run **--name** nome_container **-e POSTGRES_PASSWORD**=docker **-p** 5432:5432 **-d** postgres:12.3

Entendendo os parâmetros:

**--name**: É o nome do container. Escolha o nome que quiser.

**-e POSTGRES_PASSWORD**: A senha que você vai utilizar no postgres.

**-p**: O número da porta que você vai utilizar para o container (pode escolher alguma diferente de 5432, caso ela já esteja ocupada) e a porta do postgress que vai rodar dentro do container (deve ser 5432). Sendo assim, supondo que você queira que seu container rode na porta 3333 da sua máquina, por exemplo, o parâmetro deve ficar "-p 3333:5432".

Obs: Você deve especificar a versão 12.3 (versão utilizada na minha máquina) para que não haja nenhum problema de compatibilidade. 


