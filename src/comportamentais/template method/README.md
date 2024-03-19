## Template Method

### É usado para definir a base ou interface de um algoritmo definido como abstract e permitir que as subclasses implementem e sobrescreva esses métodos abstrac sem alterar sua estrutura.

##### Exemplo utilizado foi a leitura de diferentes formatos de arquivos, onde disponibiliza a função de fazer a leitura do arquivo como abstract para as classes filhas sobrescrever esse método e fazer parse de acordo com cada tipo de arquivo, pois o restante para se fazer a leitura de um arquivo como, por exemplo, carregar o arquivo é responsável pela classe base que é a template method.

###### Outro exemplo de uso seria fazer um request para uma determinada api, onde tudo comum para fazer o request ficaria por conta do template method e o que ficaria cada classe especialista apenas em fazer o parse do retorno de sua responsabilidade.

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
