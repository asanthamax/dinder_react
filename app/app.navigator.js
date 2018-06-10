/**
 * Created by asantha on 6/8/2018.
 */
import React from 'react';
import {DrawerNavigator, StackNavigator, DrawerItems, NavigationActions} from 'react-navigation'
import SplashScreen from './screens/splash.screen';
import LoginScreen from './screens/login.screen';
import MatchScreen from './screens/match.screen';
import RegisterScreen from './screens/register.screen';
import PostScreen from './screens/post.screen';
import {ScrollView} from 'react-native';
import {Button,Icon} from 'native-base';

const hiddenItems = [

    'Splash',
    'Login'
]
const SideBar = (props) =>{

    const propsClone = {

        ...props,
        items: props.items.filter(item => !hiddenItems.includes(item.hidden))
    }
    return(
        <ScrollView>
            <DrawerItems {...propsClone}/>
        </ScrollView>
    )
}
const MenuButton = ({navigate}) => {

    <Button transparent onPress={() => {
        navigate('DrwerOpen')
    }}>
        <Icon style={{color: '#fff'}} size={28} name="menu"/>
    </Button>
}
const Splash = {

    screen: SplashScreen,
    navigationOptions:{

        header: null
    }
}
const Login = {

    screen: LoginScreen,
    navigationOptions:{

        header: null
    }
}
const Register ={

    screen: RegisterScreen,
    navigationOptions:{

        header: null
    }
}
const Match={

    screen: MatchScreen,
    navigationOptions:{

        headerMode: 'screen',
        headerTitle: 'Matches',
        drawerLabel: 'Matches'
    }
}
const Post={

    screen: PostScreen,
    navigationOptions:{

        headerMode: 'screen',
        headerTitle: 'Post'
    }
}
const MatchStack = StackNavigator({

    Match: Match,
    Post: Post
},{
    navigationOptions: ({navigation, HeaderProps}) => ({

        headerLeft: <MenuButton navigate={navigation.navigate}/>,
        headerStyle: {backgroundColor: '#000'},
        headerTintColor: '#fff'
    })
})
const RouteConfig = {

    initialRoute: 'Splash',
    contentComponent: SideBar,
    navigationOptions: {

        gesturesEnabled: false
    }
}
const AppNavigator = DrawerNavigator({

    Splash: Splash,
    Login: Login,
    Register: Register,
    Match: {screen: MatchStack}
},RouteConfig)


export default AppNavigator;