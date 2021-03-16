import * as React from 'react'

import { BottomNavigation, Text } from 'react-native-paper'

import Maps from '../../mapsScreens/Maps'
import SaloonScreen from '../../SaloonScreen/SaloonScreen'

const RecentsRoute = () => <Text>Recents</Text>
const Sss = () => <Text>sss</Text>
const Hakında = () => <Text>hakında</Text>
const Çıkış = () => <Text>Çıkış</Text>

const MyComponent = () => {
    const [index, setIndex] = React.useState(0)
    const [routes] = React.useState([
        {
            key: 'Maps', title: 'Maps', icon: 'map', color: '#3F51B5'
        },
        {
            key: 'Saloons', title: 'Saloons', icon: 'map', color: '#009688'
        },
        {
            key: 'recents', title: 'Eğitmenler', icon: 'map', color: '#795548'
        },
        {
            key: 'Sss', title: 'Sss', icon: 'map', color: '#607D8B'
        },
        {
            key: 'Hakında', title: 'Hakında', icon: 'map', color: 'aqua'
        },
        {
            key: 'Çıkış', title: 'Çıkış', icon: 'map', color: 'green'
        }
    ])

    const renderScene = BottomNavigation.SceneMap({
        Maps,
        Saloons: SaloonScreen,
        recents: RecentsRoute,
        Sss,
        Hakında,
        Çıkış
    })

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene} />
    )
}

export default MyComponent
