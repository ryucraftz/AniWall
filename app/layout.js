import {Viwe, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Layout = () => {
    return (
        <Stack>
            <Stack.Screen
            name="index"
            options={{
                headerShow: false
            }}
            />
        </Stack>
    )
}

export default Layout