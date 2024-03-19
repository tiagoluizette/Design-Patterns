## Factory Method

### É útil quando você precisa criar objetos dinamicamente sem conhecer a classe de implementação, somente sua interface: o padrão factory estabelece uma forma de desenvolver objetos responsáveis pela criação de outros objetos.

##### Exemplo de uso é ao ter vários ORMs para fazer a manipulação de dados, para não ficar engessado a um ORM cria uma interface e faz com que as classes responsáveis por cada ORM implemente essa interface para ser utilizada, quando precisar trocar de ORM não precisa fazer alteração nas demais classes apenas na classe que implementa a interface ORM, tornando fácil de fazer a troca de um ORM, por exemplo, de uma aplicação.

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
