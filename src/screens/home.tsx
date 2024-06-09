import { View, Text, ScrollView, FlatList, RefreshControl } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import AudioCard from "../components/AudioCard";
import AudioCard2 from "../components/Card";
import ArtistCard from "../components/ArtistsCard";

export default function HomeScreen() {
	const [refreshing, setRefreshing] = useState(false);
	const fakeData = Array(10).fill(0);
	return (
		<ScrollView>
			<View style={tw`bg-black h-full text-white pl-3 pr-3 pt-2`}>
				<AudioCard />
				<Text style={tw`text-white font-bold text-6 mb-3 mt-5`}>
					Made For You
				</Text>

				<FlatList
					data={fakeData}
					renderItem={({ item }) => (
						<View style={tw`flex-row  `}>
							<AudioCard2 />
						</View>
					)}
					keyExtractor={(item) => item.id}
					horizontal={true}
					refreshControl={
						<RefreshControl
							refreshing={refreshing}
							// onRefresh={fetchData}
						/>
					}
				/>

				<Text style={tw`text-white font-bold text-6 mb-3 mt-7`}>Artists</Text>
				<FlatList
					data={fakeData}
					renderItem={({ item }) => (
						<View style={tw`flex-row  `}>
							<ArtistCard />
						</View>
					)}
					keyExtractor={(item) => item.id}
					horizontal={true}
					refreshControl={
						<RefreshControl
							refreshing={refreshing}
							// onRefresh={fetchData}
						/>
					}
				/>

				<Text style={tw`text-white font-bold text-6 mb-3 mt-7`}>
					Recently Played
				</Text>
				<FlatList
					data={fakeData}
					renderItem={({ item }) => (
						<View style={tw`flex-row  `}>
							<AudioCard2 />
						</View>
					)}
					keyExtractor={(item) => item.id}
					horizontal={true}
					refreshControl={
						<RefreshControl
							refreshing={refreshing}
							// onRefresh={fetchData}
						/>
					}
				/>
			</View>
		</ScrollView>
	);
}
