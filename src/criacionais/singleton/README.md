## Singleton

### Tem o propósito de fornecer um ponto único de acesso à instância de um objeto, de modo que qualquer local da aplicação consiga acessá-lo.

#### Nesse exemplo foi utilizado um singleton de logger, onde a aplicação(singleton) não permite que seja criado mais de uma instância da mesma classe ou seja cria-se um acesso único a essa classe econemizando recursos di sistema bloqueando multiplas instâncias desnecessárias.

#### No entanto, o Singleton também tem algumas desvantagens, como:

- O uso excessivo de Singletons pode levar a um acoplamento forte entre classes, o que pode tornar o código mais difícil de entender e manter.
- Singletons podem tornar o código mais difícil de testar, especialmente se a instância única tiver efeitos colaterais ou depender de estado externo.
- Em ambientes concorrentes, o uso de Singletons pode introduzir problemas de concorrência se não forem implementadas corretamente as medidas de proteção.

O Singleton pode ser uma ferramenta poderosa quando usado com moderação e em situações apropriadas, mas é importante estar ciente das suas vantagens e desvantagens ao decidir usá-lo no seu código.

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
