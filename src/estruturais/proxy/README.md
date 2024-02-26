
# Proxy

### Controla o acesso ao objeto principal, permitindo fazer algo antes em outro lugar antes do pedido chegar ao objeto original.

#### Nesse exemplo utilizando design pattern proxy, foi feito um exemplo de uma suposta request a uma api de CEP que nesse caso foi feito com dados em memory, onde a consulta é feita a "api em memory", mas antes de chegar na api é feito uma consulta no proxy de cep onde se tem em cache a lista de CEP já feito request antes caso encontre retorna o CEP da lista que esta no proxy, caso não encontre ai, sim, acessa a api em memory.

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)