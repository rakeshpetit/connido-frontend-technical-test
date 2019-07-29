import { createStackNavigator, createAppContainer } from 'react-navigation';
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


const AppRoute = createAppContainer(Routes);

export default AppRoute;