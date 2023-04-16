import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginVertical: 30,
    },
    titleContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 700,
        color: '#19376D'
    },
    image: {
        width: 30,
        height: 30,
    },
    menuContainer: {
        marginVertical: 30,
        flex: 1,
    }
})

export default styles