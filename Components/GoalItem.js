//  Core components imports
import { StyleSheet, Text, View } from 'react-native';

//  GoalItem component
function GoalItem({ text }) {
	return (
		<View style={styles.goalItem}>
			<Text style={styles.goalText}>{text}</Text>
		</View>
	);
}

//  GoalItem styleSheet
const styles = StyleSheet.create({
	goalItem: {
		margin: 10,
		padding: 8,
		borderRadius: 6,
		backgroundColor: '#5e0acc',
	},
	goalText: {
		color: '#fff',
	},
});

export default GoalItem;
