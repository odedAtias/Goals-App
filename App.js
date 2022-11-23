//  Hooks components imports
import { useState } from 'react';
//  Core components imports
import { StyleSheet, View, FlatList } from 'react-native';

//  Custom components imports
import GoalItem from './Components/GoalItem';
import GoalInput from './Components/GoalInput';

//  App component
export default function App() {
	//  App state
	const [courseGoals, setCourseGoals] = useState([]);

	//  App Event handlers
	const handleNewGoal = entredText =>
		setCourseGoals(currentCourseGoals => [
			...currentCourseGoals,
			{ text: entredText, id: Math.random().toString() },
		]);

	return (
		<View style={styles.appContainer}>
			{/* Goal input */}
			<GoalInput OnAddNewGoal={handleNewGoal} />
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
});
