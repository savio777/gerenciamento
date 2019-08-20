import { createAppContainer, createStackNavigator } from 'react-navigation'

import Main from './pages/Main'
import Caixa from './pages/Caixa'

const App = createStackNavigator({
    Home: {
        screen: Main,
        navigationOptions: {
            title: 'HOME',
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
        navigationOptions: {
            title: 'CAIXA',
            headerStyle: {
                backgroundColor: '#82589F',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {            
                textAlign: 'center',
                flex: 1
            }
        }
    }
})

export default createAppContainer(App)
