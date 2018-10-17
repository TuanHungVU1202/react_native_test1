import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';


export default class Component1 extends Component{
	constructor(props){
		super(props);
		this.state={
			name: 'hung',
			showName: true,
			message: this.props.message,
		}
	}

	static defaultProps = {
		message: 'Hi Trân'
	}

    render(){
    	console.log('Heloo tran')
    	//if showName is true => name = this.state.name (hung); else show No name
    	let name = this.state.showName ? this.state.name: 'No name';
    	return(
    		<View>
    		    <Text>{this.state.message}</Text>
    		    <Text>{name}</Text>
    		</View>    
    	);
    }
}

