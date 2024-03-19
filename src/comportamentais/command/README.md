## Command

### Encapsula uma solicitação como um objeto independente. Esse objeto encapsulado contém toda a informação necessária para executar uma ação ou acionar um evento em um momento posterior. Pode se adicionar uma lista de ações para ser executado posteriormente.

##### Nesse exemplo foi feito um serviço de backup onde o mesmo backup pode ser feito local, enviado para serviço de armazenamento(storage) e para um servidor ftp, tudo isso com apenas um comando, onde o design pattern vai enfileirando os processos a ser executado em uma fila e quando acionado vai executar todos os processos da fila um a um.

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
