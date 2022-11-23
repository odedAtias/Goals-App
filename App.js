//  Hooks components imports
import { useState } from 'react';
//  Core components imports
import { Button, StyleSheet, TextInput, View } from 'react-native';

//  Custom components imports
import GoalItem from './Components/GoalItem';

//  App component
export default function App() {
	return (
		<View style={styles.appContainer}>
			{/* Search */}
			<View style={styles.inputContainer}>
				<TextInput style={styles.textInput} placeholder='Write new goal' />
				<Button title='Add goal' />
			</View>
			{/* Goals List*/}
			<View style={styles.goalsContainer}>
				<GoalItem text={'blabla'} />
				<GoalItem text={'blabla'} />
				<GoalItem text={'blabla'} />
			</View>
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
		paddingVertical: 15,
	},
	inputContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#ccc',
		width: '70%',
		marginRight: 8,
		padding: 8,
	},
});
