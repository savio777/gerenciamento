import { createAppContainer, createStackNavigator } from 'react-navigation'

import Main from './pages/Main'
import Caixa from './pages/Caixa'

const App = createStackNavigator({
    Home: {
        screen: Main,
        navigationOptions: {
            title: 'Home',
            headerStyle: {
                backgroundColor: '#82589F',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                textAlign: 'center',
                flex: 1
            }
        }
    },
    Caixa: {
        screen: Caixa,
    }
})

export default createAppContainer(App)
