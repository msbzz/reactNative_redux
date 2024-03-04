import { Text, View } from 'react-native';
import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { Button, Drawer } from 'react-native-paper';

import styles from './styles';
import theme from 'src/config/theme';
 
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { logar } from 'src/store/reducers/usuario';
interface DrawerContentProps extends DrawerContentComponentProps {}

export default function DrawerContent({ navigation }: DrawerContentProps) {
  
  const dispatch = useDispatch();
  const usuarioLogado = useSelector((state:RootState)=>state.usuario.usuarioLogado);

  const deslogar = () => {
    dispatch(logar(undefined));
    navigation.closeDrawer();
  }

  return (
    <DrawerContentScrollView>
      <Drawer.Section style={styles.container}>
        {usuarioLogado && <Text style={styles.nome}> Olá {usuarioLogado?.nome}! </Text>}
        <Button icon='home' mode='contained' onPress={() => navigation.navigate('Home')}>
          Página inicial
        </Button>
        {usuarioLogado && (
          <Button icon='account' mode='contained' onPress={() => navigation.navigate('Perfil')}>
            Editar dados pessoais
          </Button>
        )}
      </Drawer.Section>
      {usuarioLogado
        ?
        (
          <View style={styles.container}>
            <Button
              icon='logout'
              mode='contained'
              buttonColor={theme.colors.error}
              onPress={deslogar}
            >
              Sair
            </Button>
          </View>
        )
        : (
          <Drawer.Section style={styles.container}>
            <Button icon='login' style={[styles.button, styles.login]} onPress={() => navigation.navigate('Login')}>
              Login
            </Button>
            <Button icon='account-arrow-up' style={[styles.button, styles.cadastre]} onPress={() => navigation.navigate('Cadastrar')}>
              <Text style={styles.cadastreTexto}>
                Cadastre-se
              </Text>
            </Button>
          </Drawer.Section>
        )}

    </DrawerContentScrollView>
  )
}
