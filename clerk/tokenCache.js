import * as SecureStore from 'expo-secure-store'

const tokenCache = {
    async getToken(key) {
        try {
            return SecureStore.getItemAsync(key)
        } catch (e) {
            return null
        }
    },
    async saveToken(key, value) {
        try {
            return SecureStore.setItemAsync(key, value)
        } catch (e) {
            return null
        }
    }
}

export default tokenCache