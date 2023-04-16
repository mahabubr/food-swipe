import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginVertical: 50
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 30
    },
    infoContent: {
        marginVertical: 20
    },
    title: {
        fontSize: 25,
        fontWeight: 800,
        color: '#0B2447'
    },
    tags: {
        fontSize: 18,
        fontWeight: 600,
        marginTop: 5,
        color: '#576CBC'
    },
    ing: {
        marginTop: 10,
        fontWeight: 700
    },
    cat: {
        fontWeight: 800,
        color: '#E11299',
        fontSize: 20,
        marginTop: 5
    },
    des: {
        marginTop: 15
    },
    bottomContent: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 30
    },
    bottomImg: {
        width: 20,
        height: 20
    },
    bottomLeft: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bottomRight: {
        flex: 2,
    }
})

export default styles