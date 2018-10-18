import React, {Component} from 'react';
import {AppRegistry, Text, View, Button,} from 'react-native';


export default class LoginScreen extends Component{
    render(){
    	return(
    		<View>
    		    <Text>From Login Screen</Text>
    		        <Button title='Go to Component 6'
    		        	onPress={() => this.props.navigation.navigate('Component6')} />
    		        <Button title='Go to Component 5'
    		        	onPress={() => this.props.navigation.navigate('Component5')} />
    		</View>    
    	);
    }
}