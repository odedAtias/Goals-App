//  Hooks components imports
import { useState } from 'react';
//  Core components imports
import {
	Button,
	TextInput,
	View,
	StyleSheet,
	Modal,
	Image,
} from 'react-native';

//  GoalInput component
function GoalInput({ OnAddNewGoal, isVisible, OffModalVisible }) {
	//  GoalInput state
	const [entredText, setEntredText] = useState('');

	//  GoalInput Event handlers
	const handleChangeText = entredText => setEntredText(entredText);

	const handleAddGoal = () => {
		OnAddNewGoal(entredText);
		setEntredText('');
		OffModalVisible();
	};
	//	JSX Rendering
	return (
		<Modal visible={isVisible} animationType='slide'>
			<View style={styles.inputContainer}>
				<Image
					style={styles.image}
					source={require('../assets/Images/goal.png')}
				/>
				<TextInput
					style={styles.textInput}
					placeholder='Write new goal'
					placeholderTextColor={'#fff'}
					onChangeText={handleChangeText}
					value={entredText}
				/>
				{/* Buttons container */}
				<View style={styles.buttonsContainer}>
					{/* First button container */}
					<View style={styles.button}>
						<Button
							title='Add goal'
							onPress={handleAddGoal}
							color={'#bb86fc'}
						/>
					</View>
					{/* Second button container */}
					<View style={styles.button}>
						<Button
							title='Cancel'
							onPress={OffModalVisible}
							color={'#bb86fc'}
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
}

//  GoalInput styleSheet
const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
		padding: 16,
		backgroundColor: '#121212',
	},
	textInput: {
		borderBottomWidth: 1,
		borderColor: '#ccc',
		width: '100%',
		padding: 8,
		color: '#fff',
	},
	image: {
		width: 100,
		height: 100,
		margin: 20,
	},
	buttonsContainer: {
		flexDirection: 'row',
		marginTop: 16,
	},
	button: {
		width: '30%',
		marginHorizontal: 8,
	},
});

export default GoalInput;
