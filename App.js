//  Hooks components imports
import { useState } from 'react';
//  Core components imports
import { StyleSheet, View, FlatList, Button } from 'react-native';

//  Custom components imports
import GoalItem from './Components/GoalItem';
import GoalInput from './Components/GoalInput';

//  App component
export default function App() {
	//  App state
	const [courseGoals, setCourseGoals] = useState([]);
	const [modalIsVisible, setModalIsVisible] = useState(false);

	//  App Event handlers
	const handleNewGoal = entredText =>
		setCourseGoals(currentCourseGoals => [
			...currentCourseGoals,
			{ text: entredText, id: Math.random().toString() },
		]);

	const handleDeleteGoal = id => {
		const newCourseGoals = courseGoals.filter(goal => goal.id !== id);
		setCourseGoals(currentCourseGoals => newCourseGoals);
	};

	const handleModalVisible = () => setModalIsVisible(true);

	const handleOffModalVisible = () => setModalIsVisible(false);

	//	JSX Rendering
	return (
		<View style={styles.appContainer}>
			{/* Button to open the modal of goalInput */}
			<Button
				title='Add new goal'
				color='#5e0acc'
				onPress={handleModalVisible}
			/>
			{/* Goal input */}
			<GoalInput
				OnAddNewGoal={handleNewGoal}
				isVisible={modalIsVisible}
				OffModalVisible={handleOffModalVisible}
			/>
			{/* Goals List*/}
			<View style={styles.goalsContainer}>
				<FlatList
					data={courseGoals}
					renderItem={itemData => (
						<GoalItem item={itemData.item} onDeleteGoal={handleDeleteGoal} />
					)}
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
