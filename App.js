import React from 'react';
import { StyleSheet, SectionList, View, Image, Text } from 'react-native';

import EventDetailScreen from './screens/EventDetail';
import ScheduleScreen from './screens/Schedule';

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<ScheduleScreen />
			</View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
		flex: 1,
    backgroundColor: '#ffff',
		paddingTop:25,
	},
});
//<EventDetailScreen />
