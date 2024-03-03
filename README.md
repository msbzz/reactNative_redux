# React-native : introdução ao uso do Redux Toolkits

Este projeto é fruto do curso de 'React Native: gerenciamento de estados globais com redux toolkit' da plataforma ALURA
 

## Introdução

-  Neste curso utilza o projeto Jornada Milhas, onde é feita sua refatoração para se poder usar o redux. As partes refatoradas tiveram passadas o estado de usuário para dentro do Redux. 

As telas foram :

  - Logar, 
  - Deslogar 
  - Cadastrar Usuário  

obs: neste curso não foram desenvolvidas qualquer tela da aplicação


## Tecnologias abordadas
 
  - Store (Armazenamento);
  - Reducer (Redutor);
  - Action (Ação);
  - Dispatch (Despachar);
  - Payload (Carga);
  - Ciclo de vida do Redux.

## Instalção das dependências

- yarn install

## Executar o projeto 

- npx expo start

## Implementando um Store

- Criação do store que sera usado para prover o estado para o aplicativo

  - store inicial

<img src="images/store.inicio.png" alt="" style="width: 15%; display: block;"/>

   - disponibilizando store em app.tsx

<img src="images/app.store.png" alt="" style="width: 15%; display: block;"/>   

## Criando um slice

  - Criação do reducer de usuario e sua referência em store
    
    - reducer usuario

    <img src="images/reducer.usuario.png" alt="" style="width: 15%; display: block;"/> 

    - integração em store 

     <img src="images/store.reducer.usuario.png" alt="" style="width: 15%; display: block;"/> 

    obs: antes da adição desse reducer de usuario a aplicação apresentava uma warning "Store does not have a valid reducer." 

## Criando uma Action

 - criação da action logar e é feito o seu export

  <img src="images/reducer.action.logar.png" alt="" style="width: 15%; display: block;"/> 





