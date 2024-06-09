import {
	View,
	Text,
	TextInput,
	FlatList,
	Image,
	StyleSheet,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";

const SearchScreen = () => {
	const [audioQuery, setAudioQuery] = useState("");
	const [churchQuery, setChurchQuery] = useState("");
	const [audioResults, setAudioResults] = useState([]);
	const [churchResults, setChurchResults] = useState([]);

	const audioData = [
		{
			id: "1",
			title: "Song One",
			artist: "Artist One",
			artwork: "https://via.placeholder.com/60",
		},
		{
			id: "2",
			title: "Song Two",
			artist: "Artist Two",
			artwork: "https://via.placeholder.com/60",
		},
		{
			id: "3",
			title: "Song Three",
			artist: "Artist One",
			artwork: "https://via.placeholder.com/60",
		},
	];

	const searchAudio = (query: any) => {
		setAudioQuery(query);
		const results: any = audioData.filter(
			(audio) =>
				audio.title.toLowerCase().includes(query.toLowerCase()) ||
				audio.artist.toLowerCase().includes(query.toLowerCase()),
		);
		setAudioResults(results);
	};

	const renderAudioItem = ({ item }: any) => (
		<View style={styles.resultItem}>
			<Image source={{ uri: item.artwork }} style={styles.artwork} />
			<View style={styles.resultText}>
				<Text style={styles.title}>{item.title}</Text>
				<Text style={styles.subtitle}>{item.artist}</Text>
			</View>
		</View>
	);

	return (
		<View style={tw`h-full bg-black p-4`}>
			<Text style={tw`text-white text-2xl mb-4`}>Search</Text>

			<Text style={tw`text-white text-lg mb-2`}>Search Audio</Text>
			<TextInput
				style={styles.input}
				placeholder='Search by artist, title, etc.'
				placeholderTextColor='#ccc'
				value={audioQuery}
				onChangeText={searchAudio}
			/>

			<View style={tw`flex-row items-center gap-3  w-full mb-5 mt-1`}>
				<View>
					<Text style={tw`text-white text-200`}>
						<Ionicons name='location-sharp' size={24} color='#00b894' />
					</Text>
				</View>
				<Text style={tw`text-white text-4 text-[#00b894]`}>
					Find Church Audio Nearby
				</Text>
			</View>
			<FlatList
				data={audioResults}
				keyExtractor={(item: any) => item.id}
				renderItem={renderAudioItem}
				ListEmptyComponent={() => (
					<Text style={styles.noResults}>No results found.</Text>
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		backgroundColor: "#333",
		color: "white",
		padding: 10,
		borderRadius: 5,
		marginBottom: 10,
	},
	resultItem: {
		flexDirection: "row",
		alignItems: "center",
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: "#444",
	},
	artwork: {
		width: 60,
		height: 60,
		borderRadius: 5,
	},
	resultText: {
		marginLeft: 10,
	},
	title: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
	},
	subtitle: {
		color: "#777",
		fontSize: 14,
		marginTop: 2,
	},
	noResults: {
		color: "#777",
		textAlign: "center",
		marginTop: 20,
	},
});

export default SearchScreen;
