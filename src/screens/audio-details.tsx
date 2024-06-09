import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import tw from "twrnc";
// import { Audio } from 'expo-av';

const DetailedScreen = ({ route }: any) => {
	const { title, artist, album, imageUri, audioUri } = route.params;

	const [isPlaying, setIsPlaying] = useState(false);
	const [sound, setSound] = useState(null);

	// useEffect(() => {
	// return sound
	// ? () => {
	// sound.unloadAsync();
	// }
	// : undefined;
	// }, [sound]);

	const playSound = async () => {
		// if (sound) {
		// await sound.unloadAsync();
		// }
		// // const { sound: newSound } = await Audio.Sound.createAsync({ uri: audioUri });
		// setSound(newSound);
		// await newSound.playAsync();
		// setIsPlaying(true);
	};

	const pauseSound = async () => {
		// if (sound) {
		// await sound.pauseAsync();
		// setIsPlaying(false);
		// }
	};

	const handleAudioPress = () => {
		// if (isPlaying) {
		// pauseSound();
		// } else {
		// playSound();
		// }
	};

	return (
		<View style={tw`flex-1 bg-black p-4 `}>
			<Image
				source={{ uri: imageUri }}
				style={tw`w-full h-80 rounded-lg bg-gray-400`}
			/>
			<View style={tw`mt-4`}>
				<Text style={tw`text-white text-2xl font-bold`}>{title}</Text>
				<Text style={tw`text-gray-400 text-lg`}>{artist}</Text>
				<Text style={tw`text-gray-400 text-lg`}>{album}</Text>
			</View>
			<TouchableOpacity
				onPress={handleAudioPress}
				style={tw`bg-[#00b894] mt-8 p-4 rounded-full items-center`}>
				<Text style={tw`text-white text-xl`}>
					{isPlaying ? "Pause" : "Play"}
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default DetailedScreen;
