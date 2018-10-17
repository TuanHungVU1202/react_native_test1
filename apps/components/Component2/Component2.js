import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native';


export default class Component2 extends Component{
	onPress(){
		console.log('1 Pressed')
	}

	onPress2(){
		console.log('2 pressed')
	}

	onPress3(){
		console.log('3 pressed')
	}
    render(){
    	return(
    		<View>
	    		<View style={styles.myView}>
	    		    <Text style={styles.myText}>Hello Tran!!!</Text>
	    		</View>
    		    <View style={styles.container}>
    		        <TouchableHighlight 
	    		        style={styles.v1}
	    		        underlayColor='yellow'
	    		        onPress={this.onPress}>
						<View>
							<Text>View 1</Text>
						</View>
					</TouchableHighlight>
    		        <TouchableOpacity 
	    		        style={styles.v2}
	    		        underlayColor='yellow'
	    		        onPress={this.onPress2}>
						<View>
							<Text>View 2</Text>
						</View>
					</TouchableOpacity>
					<TouchableHighlight 
	    		        style={styles.v3}
	    		        underlayColor='yellow'
	    		        onPress={this.onPress3}>
						<View>
							<Text>View 3</Text>
						</View>
					</TouchableHighlight>
    		    </View>
	    	</View>    
    	);
    }
}


const styles = StyleSheet.create({
	myView: {
		backgroundColor: 'white'
	},
	myText: {
		color: 'blue'
	},
	container: {
		flexDirection:'row',
		height: 100,
	},
	v1: {
		flex:1,
		backgroundColor:'red',
		padding:10,
	},
		v2: {
		flex:1,
		backgroundColor:'green',
		padding:10,
	},
		v3: {
		flex:1,
		backgroundColor:'cyan',
		padding:10,
	},
})