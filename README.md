# React-native : introdução ao uso do Redux Toolkits

Este projeto é fruto do curso de 'React Native: gerenciamento de estados globais com redux toolkit' da plataforma ALURA
 

## Introdução

-  Neste curso utilza o projeto Jornada Milhas, onde é feita sua refatoração do o content API para se poder usar o redux. As partes refatoradas tiveram passadas o estado de usuário para dentro do Redux  foram :

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

<img src="images/store.inicio.png" alt="" style="width: 85%; display: block;"/>

   - disponibilizando store em app.tsx

<img src="images/app.store.png" alt="" style="width: 85%; display: block;"/>   

## Criando um slice

  - Criação do reducer de usuario e sua referência em store
    
    - reducer usuario

    <img src="images/reducer.usuario.png" alt="" style="width: 85%; display: block;"/> 

    - integração em store 

     <img src="images/store.reducer.usuario.png" alt="" style="width: 85%; display: block;"/> 

    obs: antes da adição desse reducer de usuario a aplicação apresentava uma warning "Store does not have a valid reducer." 

## Criando uma Action

 - criação da action logar e do seu export

  <img src="images/reducer.action.logar.png" alt="" style="width: 85%; display: block;"/> 


## Usando o Dispatch

  Na tela de login, após a validação da ação de logar, será incluida a primeira ação.

  Primeiramente declarando a constante dispatch, importando 'logar' de reducer do usuario 
  obs: necessário dar um 'alias' ao 'logar' de service ficanco 'logarService'

   <img src="images/login.tela.dispatch.png" alt="" style="width: 85%; display: block;"/> 

  A titulo de teste, coloquei um 'console.log' dentro do reducer de usuario 

  <img src="images/reducer.action.log.png" alt="" style="width: 85%; display: block;"/>

  ## migrar do contentAPI para o Redux

  - Passar  a responsabilidade de realizar a ação "logarService" para o reducer e ao invés de passar dois parametros para a função, passar um objeto contendo tal informação. 

  <img src="images/login.refatorado.png" alt="" style="width: 85%; display: block;"/>

  - dentro do reducer caso não seja realizado o login, lança-se um erro que será tratado na tela de login

<img src="images/reducer.acao.logar.png" alt="" style="width: 85%; display: block;"/>

  - Para testar, foi usado inicialmente um usuario já existente na base "mock"

<img src="images/server.usuario.mock.png" alt="" style="width: 85%; display: block;"/>

  - acessar pelo menu "hamurguer" no alto a direita

  <img src="images/menu.login.png" alt="" style="width: 15%; display: block;"/>

  - logando com o usuário 'mock'

 <img src="images/tela.login.png" alt="" style="width: 15%; display: block;"/>

  - verificando logs de service e reducers

 <img src="images/logs.autenticacao.png" alt="" style="width: 75%; display: block;"/> 








