import { createStackNavigator } from 'react-navigation';
import Home from '../containers/Home/Home';
import { About } from '../containers/About/About';

const Routes = createStackNavigator(
    {
        Home: {
            screen: Home
        },
        About: {
            screen: About
        }
    },
    {
        headerMode: 'none'
    }
);

export { Routes };