import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native"

export default function Register({navigation}){
    return(
        <ScrollView style = {styles.view}>
        <Text style={styles.title}>Hola Bienvenido desde el Register</Text>
        <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={()=>navigation.navigate('Init')} style={styles.button1}>
            <Text style={styles.buttonText}>Volver</Text>
        </TouchableOpacity>
        </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    view:{
        paddingHorizontal: 30,
        paddingTop: 80,
        backgroundColor: 'pink'
    },
    title:{
        fontSize: 32, 
        fontWeight: "bold",
        textAlign: 'center',
        lineHeight: 35, 
        color: 'white',
    },
    body:{
        paddingTop: 20,
        fontSize: 16,
        lineHeight: 23,
        fontWeight: "medium",
        alignItems: 'center',
        color: 'white',
    },
    buttonContainer:{
        flexDirection: 'row',
        width: '100%',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 6,
        backgroundColor:'',
        marginTop: 40,
    },
    button1:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'pink',
        opacity: '70%',
        padding:16,
        borderRadius: 6,
    },
    button2:{
        flex: 1,
        alignItems: 'center',
        padding:16,
        borderRadius: 6,
    },
    buttonText:{
        fontWeight: "bold",
        color: 'white'
    }
})