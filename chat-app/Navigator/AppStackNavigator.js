import React from 'react';
import Login from '../components/Login';
import Chat from '../components/Chat';
import Conversations from '../components/Conversations';
import Users from '../components/Users';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

let AppNavigator;
class AppStackNavigator extends React.Component {
    constructor(props) {
        super(props);
        AppNavigator = createStackNavigator({
            loginFlow: {
                screen: createStackNavigator({
                    login: {
                        screen: Login
                    }
                })
            },
            chatFlow: {
                screen: createStackNavigator({
                    chat: { screen: Chat }
                })
            },
            mainFlow: {
                screen: createStackNavigator({
                    someTab: {
                        screen: createBottomTabNavigator({
                            Conversations: {
                                screen: Conversations
                            },
                            Users: {
                                screen: Users
                            }
                        },
                            {
                                tabBarOptions: {
                                    activeTintColor: '#e91e63',
                                    labelStyle: {
                                        fontSize: 12
                                    },
                                    style: {
                                    }
                                },
                                initialRouteName: 'Conversations'
                            })
                    }
                })
            }
        });
    }
    render() {
        return (
            <AppNavigator screenProps={this.props} />
        )
    }
}

export default AppStackNavigator;  
