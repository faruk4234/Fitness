import * as React from 'react'

import { BottomNavigation, Text } from 'react-native-paper'

import MainPage from '../../mainPage'
import Maps from '../../mapsScreens/Maps'
import Saloon from '../../SaloonScreen'
import Setting from '../../SettingScreen'
import Teachers from '../../teachersScreen'

const Hakında = () => <Text>hakında</Text>

const MyComponent = ({ navigation }) => {
    const [index, setIndex] = React.useState(0)
    const routes = [
        {
            key: 'Maps', title: 'Maps', icon: 'map', color: '#3F51B5', navigation
        },
        {
            key: 'Saloon', title: 'Saloons', icon: 'map', color: '#009688', navigation
        },
        {
            key: 'Teachers', title: 'Eğitmenler', icon: 'map', color: '#795548', navigation
        },
        {
            key: 'MainPage', title: 'AnaSayfa', icon: 'map', color: 'aqua', navigation
        },
        {
            key: 'Setting', title: 'Çıkış', icon: 'map', color: 'green', navigation
        }
    ]

    const renderScene = BottomNavigation.SceneMap({
        Maps,
        Saloon,
        Teachers,
        MainPage,
        Hakında,
        Setting
    })

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene} />
    )
}

export default MyComponent
