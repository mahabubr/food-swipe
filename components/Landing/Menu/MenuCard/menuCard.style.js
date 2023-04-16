import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E4DCCF',
        width: '45%',
        marginVertical: 10,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 16,

    },
    image: {
        width: '100%',
        height: 100,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    textContent: {
        padding: 16
    },
    mainText: {
        fontSize: 16,
        fontWeight: 700,
        color: '#146C94',
        height: 40
    },
    text: {
        marginTop: 4
    }
})

export default styles