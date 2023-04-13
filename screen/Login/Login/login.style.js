import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '40%',
        height: '40%'
    },
    mainText: {
        color: '#3C486B',
        fontSize: 35,
        fontWeight: 700
    },
    secondaryText: {
        color: '#3C486B',
    },
    textInputContainer: {
        marginTop: 20,
        marginBottom: 20,
        width: '100%'
    },
    textInput: {
        width: '80%',
        borderBottomColor: '#000',
        borderBottomWidth: 1.5,
        paddingBottom: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginVertical: 10,
        fontSize: 16
    },
    forgetP: {
        width: '80%',
        textAlign: 'right'
    },
    button: {
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginVertical: 20
    }
})

export default styles