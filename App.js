//  Hooks components imports
import { useState } from 'react';
//  Core components imports
import { StyleSheet, Text, View } from 'react-native';
//  Custom components imports
import GoalItem from './Components/GoalItem';

//  App component
export default function App() {
	return (
		<View style={styles.appContainer}>
			{/* Goal Item */}
			<GoalItem text={'blabla'} />
			<GoalItem text={'blabla'} />
			<GoalItem text={'blabla'} />
		</View>
	);
}

//  App styleSheet
const styles = StyleSheet.create({
	appContainer: {
		paddingTop: 50,
		paddingHorizontal: 16,
		flex: 1,
	},
	goalsContainer: {
		flex: 4,
	},
});
