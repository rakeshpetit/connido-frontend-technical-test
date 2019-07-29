import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../containers/Home/Home';
import { About } from '../containers/About/About';
import { Bars } from '../containers/Bars/Bars';

const Routes = createStackNavigator(
    {
        Home: {
            screen: Home
        },
        About: {
            screen: About
        },
        Bars: {
            screen: Bars
        }
    },
    {
        headerMode: 'none'
    }
);


const AppRoute = createAppContainer(Routes);

export default AppRoute;