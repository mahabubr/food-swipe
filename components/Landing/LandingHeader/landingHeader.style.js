import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imageContainer: {
        borderColor: '#070A52',
        borderWidth: 2,
        borderRadius: 50,
        padding: 3
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 50,
    },
    title: {
        fontSize: 20,
        fontWeight: 700,
        color: '#070A52'
    }
})

export default styles