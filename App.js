import React, {Component} from 'react';
import {AppRegistry, Text, View,} from 'react-native';


//must be capital letter for component1
import Component1 from './apps/components/Component1/Component1.js'
import Component2 from './apps/components/Component2/Component2.js'
import Component3 from './apps/components/Component3/Component3.js'
import Component4 from './apps/components/Component4/Component4.js'
import Component5 from './apps/components/Component5/Component5.js'
import Component6 from './apps/components/Component6/Component6.js'


export default class test1 extends Component{
	renderScene(route, navigator){
      switch(route.id){
      	case 'component5':
      	  return(<Component5 navigator={navigator} title='component5' />)
		case 'component5':
	  	  return(<Component6 navigator={navigator} title='component6' />)

      }
	}

    render(){
    	return(
          <Navigator
            initialRoute={{id: 'component5'}}
            renderScene={this.renderScene}
            configreScreen={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
          />
    	);
    }
}
