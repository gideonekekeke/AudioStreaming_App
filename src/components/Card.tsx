import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { useNavigation, Link } from "@react-navigation/native";
// import { Audio } from "expo-av";

const AudioCard2 = ({ title, artist, imageUri, audioUri }: any) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [sound, setSound] = useState(null);

	const playSound = async () => {
		if (sound) {
			// await sound.unloadAsync();
		}

		// const { sound: newSound } = await Audio.Sound.createAsync({
		// uri: audioUri,
		// });
		// setSound(newSound);
		// await newSound.playAsync();
		// setIsPlaying(true);
	};

	const pauseSound = async () => {
		if (sound) {
			// await sound.pauseAsync();
			setIsPlaying(false);
		}
	};

	const handleAudioPress = () => {
		if (isPlaying) {
			pauseSound();
		} else {
			playSound();
		}
	};

	return (
		<Link to='/DetailScreen'>
			<View style={tw` w-40 mr-3 pr-3   rounded-lg flex-col `}>
				<Image
					source={{ uri: imageUri }}
					style={tw`w-40 h-30 bg-gray-800 rounded-lg`}
				/>
				<View>
					<Text style={tw`text-white font-bold text-md mt-2`}>
						24 hours sermon
					</Text>
					<Text style={tw`text-gray-400 text-sm`}>Nathaniel Bassey</Text>
				</View>
			</View>
		</Link>
	);
};

export default AudioCard2;
