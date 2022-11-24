//  Core components imports
import { StyleSheet, Text, View, Pressable } from 'react-native';

//  GoalItem component
function GoalItem({ item, onDeleteGoal }) {
	//	Destructuring the item props
	const { text, id } = item;
	//	JSX Rendering
	return (
		<View style={styles.goalItem}>
			<Pressable
				android_ripple={{ color: '#210644' }}
				style={({ pressed }) => pressed && styles.pressedItem}
				onPress={() => onDeleteGoal(id)}>
				<Text style={styles.goalText}>{text}</Text>
			</Pressable>
		</View>
	);
}

//  GoalItem styleSheet
const styles = StyleSheet.create({
	goalItem: {
		margin: 10,

		borderRadius: 6,
		backgroundColor: '#5e0acc',
	},
	pressedItem: {
		opacity: 0.4,
	},
	goalText: {
		padding: 8,
		color: '#fff',
	},
});

export default GoalItem;
