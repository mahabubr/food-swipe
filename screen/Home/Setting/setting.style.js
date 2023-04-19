import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30
    },
    title: {
        fontSize: 25,
        fontWeight: 800,
        color: '#146C94',
        textAlign: 'center'
    },
    userInfo: {
        marginVertical: 20,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        borderTopWidth: 0.7,
        borderTopColor: '#000',
        paddingTop: 20
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 20
    },
    userTxt: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 700,
        marginTop: 10
    },
    userTxt1: {
        textAlign: 'center',
        fontSize: 16,
        marginBottom: 10
    },
    settingInfo: {
        marginVertical: 20,
        flex: 1,
        flexDirection: 'column',
        borderTopWidth: 0.7,
        borderTopColor: '#000',
        paddingTop: 20
    },
    userTxt2: {
        fontSize: 18,
        marginTop: 10
    },
})

export default styles