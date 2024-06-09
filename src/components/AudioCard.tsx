import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import tw from "twrnc";
// import { Audio } from "expo-av";

const AudioCard = ({ title, artist, imageUri, audioUri }: any) => {
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
		<View style={tw`bg-gray-800  p-4 rounded-lg flex-row items-center `}>
			<Image source={{ uri: imageUri }} style={tw`w-16 h-16 rounded-lg`} />
			<View style={tw`flex-1 ml-4`}>
				<Text style={tw`text-white font-bold text-lg`}>{title}</Text>
				<Text style={tw`text-gray-400 text-sm`}>{artist}</Text>
			</View>
			<TouchableOpacity onPress={handleAudioPress} style={tw`ml-4`}>
				<Text style={tw`text-white text-2xl`}>{isPlaying ? "⏸" : "▶️"}</Text>
			</TouchableOpacity>
		</View>
	);
};

export default AudioCard;
