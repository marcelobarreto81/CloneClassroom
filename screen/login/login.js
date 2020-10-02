import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './style1';

const Login = () => {
return(
<>
<View>
    <Text style={styles.texto}>Google</Text>
    <Text style={styles.texto1}>Fazer Login</Text>
    <Text style={styles.texto2}>Use  sua Conta  Google.</Text>
</View>
<TouchableOpacity style = {styles.button } >
<Text>E-mail ou telefone</Text>
</TouchableOpacity>
<TouchableOpacity style = {styles.button1 } >
<Text>Senha</Text>
</TouchableOpacity>
<TouchableOpacity style = {styles.button2 } >
<Text style={styles.texto3}>Entrar</Text>
</TouchableOpacity>
</>

}
export default Login;


