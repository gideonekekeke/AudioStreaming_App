import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { useNavigation, Link } from "@react-navigation/native";
// import { Audio } from "expo-av";

const ArtistCard = ({ title, artist, imageUri, audioUri }: any) => {
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
			<View style={tw` w-30 mr-3 flex-col `}>
				<Image
					source={{ uri: imageUri }}
					style={tw`w-30 h-30 bg-gray-800 rounded-full`}
				/>
				<View>
					<Text style={tw`text-white font-bold text-md mt-2 text-center`}>
						Nathaniel Bassey
					</Text>
				</View>
			</View>
		</Link>
	);
};

export default ArtistCard;
