import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '~/pages/Home';
import Comments from '~/pages/Comments';
import Notifications from '~/pages/Notifications';
import Likes from '~/pages/Likes';

const HomeStack = createNativeStackNavigator();

const HomeRoutes = () => {
    return (
        <HomeStack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
            }}>
            <HomeStack.Screen name="Home" component={Home} />
            <HomeStack.Screen name="Comments" component={Comments} />
            <HomeStack.Screen name="Likes" component={Likes} />
            <HomeStack.Screen name="Notifications" component={Notifications} />
        </HomeStack.Navigator>
    );
};

export default HomeRoutes;
