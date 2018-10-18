import React, {Component} from 'react';
import {AppRegistry, Text, View,} from 'react-native';
import {createStackNavigator} from 'react-navigation'


//must be capital letter for component1
import Component1 from './apps/components/Component1/Component1.js'
import Component2 from './apps/components/Component2/Component2.js'
import Component3 from './apps/components/Component3/Component3.js'
import Component4 from './apps/components/Component4/Component4.js'
import Component5 from './apps/components/Component5/Component5.js'
import Component6 from './apps/components/Component6/Component6.js'
import LoginScreen from './apps/components/LoginScreen/LoginScreen.js'


export default class test1 extends React.Component{
    render(){
    	return(
    		<AppStackNavigator />
    	);
    }
}

const AppStackNavigator = createStackNavigator({
	Login: LoginScreen,
	Component6: Component6,
	Component5: Component5,
})
