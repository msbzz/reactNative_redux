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

 ## Ajuste na funcionalidade da mensagem após o login

- Originalmente ao clicar no menu hambúrguer, no canto superior direito, se tinha a mensagem "Olá, Luiz Fernando!", devido a "logarService" ter passado para o reducer esta funcionalidade parou de funcionar

- abaixo a funcionalidade original

<img src="images/menu.lateral.logado.png" alt="" style="width: 15%; display: block;"/>

- Após essa refatoração, o reducer de usuairo fornece todas as informações necessários para o drawer 

 Realizando um teste de login é percebido que o usuairo está logado porem falta ainda concluir alguns pontos como o reconnhecimento das propriedades como o nome' 


<img src="images/login.drawer.refatorado.png" alt="" style="width: 65%; display: block;"/>

- alteração em 'usuario reducer'

<img src="images/usuario.reducer.interface.png" alt="" style="width: 65%; display: block;"/>


## Condlusão do ajuste da funcionalidade da mensagem após o login

 - Devido em action.payload (reducers/usuario) o usuarioLogado receber o e-mail ou CPF e senha, e não espera esses dados como nome etc. Isto é definido como um conflito de tipagem, porque especificamente não tipamos nossa action.

  - primeiramente é criada uma tipagem (interface) chamada 'LoginPayload' (vide imagem - amarelo)

  - em seguida a tipagem da action através de 'PayloadAction' do 'Redux Toolkit'

  - agora para finalizar a tipagem, modifica-se o 'state.usuarioLogado' para usar 'usuarioEncontrado' que vai conter todas as propriedades dos usuário ao invés do 'action.payload' que contem apenas dados de autenticação.

<img src="images/logar.conclusao.uso.redux.png" alt="" style="width: 85%; display: block;"/>


## Ação deslogar

- tambem é necessário criar uma action no reducer para deslogar do aplicativo assim como corrigir o parametro em 'handleDeslogar()' na ativação da ação 'deslogar' pelo dispatcher()

<img src="images/drawer.deslogar.png" alt="" style="width: 85%; display: block;"/>

## Implementando o cadastro

 Considerando o codigo atual, será removido o 'cadastrarUsuario' que será feito pelo Redux.

<img src="images/cadastro..handleSubmitOriginal.png" alt="" style="width: 85%; display: block;"/>

Primeiro passo é criar a action 'cadastrar' em 'reducers/usuario'. Essa action é tipada usando a interface 'Omit' onde observa-se que o 'id' sera desconsiderado. Dentro a arrow function, alem de definir 'id' tambem é referido um array de 'usuarios' que sera declarado na interface 'InitialState' assim como na variavel 'initialState' que representa o estado inicial do reducer usuario. Voltando a 'cadastrar' se observa a adição do novo usuario vindo do payload juntamente com o id
 
obs: o array de usuarios e originado em no mock 'servers' em 'assets'

outro detalhe é a atualização do 'state' com o novo usuario

<img src="images/action.cadastrar.usuario.png" alt="" style="width: 85%; display: block;"/>

- Voltando a tela Cadastrar (index.ts) se faz a adaptação da chamada da action 

<img src="images/tela.cadastrar.dispatch.cadastrar.png" alt="" style="width: 85%; display: block;"/>

 Colocação de logs em reducers/usuario para na ação de cadastrar poder se pode observar os logs de 'usuario logado' e do array de usuarios


- logs em reducers/usuario

<img src="images/reducer.usuario.logs.png" alt="" style="width: 85%; display: block;"/>

 - ação cadastrar

<img src="images/acao.cadastro.logs.png" alt="" style="width: 85%; display: block;"/>

 
## Ultima refatoração

- Remoção das variaveis de estado em todos objetos que tenham referencia a 'usuarioLogado' e 'setUsuarioLogado' devido a esta informação vir de redux 'const usuarioLogado= useSelector((state:RootState)=>state.usuario.usuarioLogado)', começando por 'routes.tsx'

 obs: somente login e perfil precisaram desta referência

 <img src="images/routes.refatoracao.final.png" alt="" style="width: 85%; display: block;"/>

  obs: em 'compoments/drawerContent/index.ts' refatoraçai da interface "/interface DrawerContentProps extends DrawerContentComponentProps"

 <img src="images/drawer.refatorado.final.png" alt="" style="width: 85%; display: block;"/>

 - adaptação em 'Home/index'

<img src="images/horme.refatoracao.final.png" alt="" style="width: 85%; display: block;"/>

  - remoção da tipagem 'Home/types' de 'export interface HomeProps' devido a não haver mais passagem de parametros, porem, necessário se ter a indicação da tipagem

  <img src="images/routes.correcao.tipoagemParametros.png" alt="" style="width: 85%; display: block;"/>

 obs: anteriormente essa tipagem era indicada na interface

  <img src="images/home.index.parametros.png" alt="" style="width: 85%; display: block;"/>

 - Apartir desse ponto as demais telas (Login,Cadastrar e Perfil) terão a mesma metodologia de retatoração. 

  obs: a titulo de estudo, referencias refatoradas estão sendo mantidas com comentários para reforçar o que foi mudado

  - ultima validação

  <img src="images/testeApp.apos.refatorar.png" alt="" style="width: 85%; display: block;"/>