//  Hooks components imports
import { useState } from 'react';
//  Core components imports
import { Button, TextInput, View, StyleSheet, Modal } from 'react-native';

//  GoalInput component
function GoalInput({ OnAddNewGoal, isVisible }) {
	//  GoalInput state
	const [entredText, setEntredText] = useState('');

	//  GoalInput Event handlers
	const handleChangeText = entredText => setEntredText(entredText);

	const handleAddGoal = () => {
		OnAddNewGoal(entredText);
		setEntredText('');
	};
	//	JSX Rendering
	return (
		<Modal visible={isVisible} animationType='slide'>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.textInput}
					placeholder='Write new goal'
					onChangeText={handleChangeText}
					value={entredText}
				/>
				<Button title='Add goal' onPress={handleAddGoal} />
			</View>
		</Modal>
	);
}

//  GoalInput styleSheet
const styles = StyleSheet.create({
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

export default GoalInput;
