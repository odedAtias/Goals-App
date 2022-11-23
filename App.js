//  Hooks components imports
import { useState } from 'react';
//  Core components imports
import { Button, StyleSheet, TextInput, View, FlatList } from 'react-native';

//  Custom components imports
import GoalItem from './Components/GoalItem';

//  App component
export default function App() {
	//  App state
	const [entredText, setEntredText] = useState('');
	const [courseGoals, setCourseGoals] = useState([]);

	//  App Event handlers
	const handleChangeText = entredText => {
		setEntredText(entredText);
	};

	const handleNewGoal = () => {
		console.log(entredText);
		setCourseGoals(currentCourseGoals => [
			...currentCourseGoals,
			{ text: entredText, id: Math.random().toString() },
		]);
	};

	return (
		<View style={styles.appContainer}>
			{/* Search */}
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.textInput}
					placeholder='Write new goal'
					onChangeText={handleChangeText}
				/>
				<Button title='Add goal' onPress={handleNewGoal} />
			</View>
			{/* Goals List*/}
			<View style={styles.goalsContainer}>
				<FlatList
					data={courseGoals}
					renderItem={itemData => <GoalItem text={itemData.item.text} />}
					keyExtractor={item => item.id}
					alwaysBounceVertical={false}
				/>
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
