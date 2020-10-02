import React from 'react';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './style';
// import { useFonts, KumbhSans } from '@expo-google-fonts/Kumbh Sans';
// import { AppLoading } from 'expo';

const Turma = () => {
    // let [fontsLoaded] = useFonts({
    //     KumbhSans, 
    // });
    // if(!fontsLoaded){
    //     return <AppLoading/>
    // }
    return(
        <>
        <View style = { styles.container }>
            <Octicons style = { styles.hamburger } name="three-bars" size={25}/>
            <Text style = { styles.nome}>Google Sala de Aula</Text>
            <FontAwesome style = { styles.user } name="user-circle" size={30} color="black" />
            <Octicons style = { styles.configuracao } name="kebab-vertical" size={24} color="black" />
        </View>
        <View style={{borderBottomWidth: 1,  marginTop: 20,}}/>
        <TouchableOpacity style = { styles.button } >
            <ImageBackground source ={{uri: 'https://gstatic.com/classroom/themes/Math.jpg'}} style ={styles.imagem}>
            <Text style={styles.text}>7-2020-PET07-FrontEnd...</Text>
            <Text style = {styles.text1}>Daniel Silva/Daiane Barizon</Text>
            <Text style = {styles.text2}>Serratec Oficial</Text>
            </ImageBackground>
        </TouchableOpacity>
       
        <TouchableOpacity style = { styles.button } >
            <ImageBackground source ={{uri: 'https://gstatic.com/classroom/themes/img_mealfamily.jpg'}} style ={styles.imagem}>
            <Text style={styles.text}>1-2020-PET07-Nivelame...</Text>
            <Text style = {styles.text1}>Marcelo Collares/Kaique Heinen</Text>
            <Text style = {styles.text2}>Serratec Oficial</Text>
            </ImageBackground>
        </TouchableOpacity>
        </>
    );
}
export default Turma;