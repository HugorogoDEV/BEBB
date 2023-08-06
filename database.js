import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveLoginData = async (username, password) => {
    try {
        await AsyncStorage.setItem('nome', nome);
        await AsyncStorage.setItem('dose', dose);
    } catch (error) {
        console.error('Error saving login data', error);
    }
};

export const getLoginData = async () => {
    try {
        const username = await AsyncStorage.getItem('nome');
        const dose = await AsyncStorage.getItem('password');
        return {username, password};
    } catch (error) {
        console.error('Error retriving login data', error);
        return null;
    }
};