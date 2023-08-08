import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveLoginData = async (nome, dose) => {
    try {
        await AsyncStorage.setItem('nome', nome);
        await AsyncStorage.setItem('dose', dose);
    } catch (error) {
        console.error('Error saving login data', error);
    }
};

export const getLoginData = async (nome, dose) => {
    try {
        const nome = await AsyncStorage.getItem('nome');
        const dose = await AsyncStorage.getItem('password');
        return {nome, dose};
    } catch (error) {
        console.error('Error retriving login data', error);
        return null;
    }
};