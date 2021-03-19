import React from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'react-native-axios'

export const getToken = async () => {
    const value = await AsyncStorage.getItem('@storage_Key')

    return value
}

export const instance = axios.create({
    baseUrl: 'https://traidors.com/api',
    timeout: 10000
})

/*
instance.interceptors.request.use(async (config) => {
    console.log(config)
    config.headers.Authorization = `Bearer ${await getToken()}`

    return config
})
*/
