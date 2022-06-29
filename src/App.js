import React from "react";
import {
    View, 
    Image, 
    StyleSheet, 
    SafeAreaView, 
    StatusBar,
    Text,
    Pressable,
    Linking} from 'react-native';

const colorGitHub = "#010409"
const colorFontGitHub = '#C9D1D9'
const colorFontDarkGitHub = 'gray'
const minhaFotoGit = "https://avatars.githubusercontent.com/u/84098891?v=4"
const urlToMyGitHub = 'https://github.com/RenanRibeiroDaSilva'


const App = () =>{

    const handlePressGoToGitHub = async () => {
        const res = await Linking.canOpenURL(urlToMyGitHub)
        if(res){
            await Linking.openURL(urlToMyGitHub)
        }
    }
    return (
        <SafeAreaView style = { style.container }>
            <StatusBar backgroundColor={colorGitHub} barStyle="light-content" />
            <View style={style.content}>
                <Image 
                    accessibilityLabel="Renan sorrindo"
                    style={style.avatar} 
                    source={{ uri: minhaFotoGit }}
                />
                <Text 
                    accessibilityLabel="Nome: Renan Ribeiro" 
                    style={[style.defaultText, style.name]}>
                    Renan Ribeiro
                </Text>
                <Text 
                    accessibilityLabel="Nickname: Gradagos"
                    style={[style.defaultText, style.nickname]}>
                    Gradagos
                </Text>
                <Text 
                    accessibilityLabel="Descrição: Aluno"
                    style={[style.defaultText, style.description]}>
                    Aluno
                </Text>
                <Pressable onPress={handlePressGoToGitHub}> 
                <View style={style.button}>
                    <Text style={[style.defaultText, style.textButton]}>
                        Open in GitHub
                    </Text>
                </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

export default App;

const style = StyleSheet.create({
    container:{
        // column
        backgroundColor: colorGitHub,
        flex: 1, // Expandir para atela inteira
        alignItems: 'center',
        justifyContent: 'center',
        //flexDirection: 'row'
    },
    content:{
        alignItems: 'center',
        padding: 20,
    },
    avatar: {
        height: 150,
        width: 150,
        borderRadius: 75,
        borderColor: 'white',
        borderWidth: 3,
    },
    defaultText: {
        color: colorFontGitHub,
    },
    name: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 25,
    },
    nickname: {
        fontSize: 18,
        color: colorFontDarkGitHub,
        
    },
    description: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    button: {
        marginTop: 20,
        backgroundColor: colorFontDarkGitHub,
        borderRadius: 10,
        padding: 20,
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 16,
    }
    
})