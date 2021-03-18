import React from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'react-native-axios'

export const Token = async () => {
    try {
        const value = await AsyncStorage.getItem('@storage_Key')
        if (value !== null) {
        }
    } catch (e) {
    }
}

export const instance = axios.create({
    baseUrl: 'https://traidors.com/api',
    timeout: 10000,
    headers:{'Authorization': 'Bearer '+ Token}
})
