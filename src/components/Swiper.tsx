import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
	Text,
	Dimensions,
	StyleSheet,
	View,
	ImageBackground,
	TouchableOpacity,
} from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import tw from "twrnc";
import { useNavigation, Link } from "@react-navigation/native";

const bgImages = [
	{
		title: "Worship Service",
		descrition:
			"Listen to the latest worship service recordings from our church.",
		url: require("../../assets/images/1.jpg"),
	},
	{
		title: "Sermon Series",
		descrition:
			"Explore our latest sermon series and catch up on any messages you might have missed",
		url: require("../../assets/images/2.jpg"),
	},
	{
		title: "Bible Studies",
		descrition:
			"Dive deeper into the Word of God with our weekly Bible study recordings.",
		url: require("../../assets/images/3.jpg"),
	},
	{
		title: "Special Events",
		descrition: "Listen to recordings from our special events and conferences.",
		url: require("../../assets/images/4.jpg"),
	},
];

const Swiper = () => {
	const navigation = useNavigation<any>();
	return (
		<View style={styles.container}>
			<SwiperFlatList
				autoplay
				autoplayDelay={10}
				autoplayLoop
				index={2}
				showPagination
				data={bgImages}
				renderItem={({ item }) => (
					<ImageBackground source={item?.url} style={styles.child}>
						<View style={styles.slide}>
							<LinearGradient
								colors={["transparent", "rgba(0, 0, 0, 2.5)"]}
								start={{ x: 1, y: 0.2 }}
								end={{ x: 1, y: 1 }}
								style={styles.gradient}>
								<Text style={styles.title}>{item?.title}</Text>
								<Text style={styles.description}>{item?.descrition}</Text>
								<Link to='/Register'>
									<TouchableOpacity
										onPress={() => {
											navigation.navigate("Register");
										}}
										style={styles.button}>
										<Text style={styles.buttonText}>Get Started</Text>
									</TouchableOpacity>
								</Link>
							</LinearGradient>
						</View>
					</ImageBackground>
				)}
			/>
		</View>
	);
};

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		height: 120,
		borderRadius: 10,
	},
	child: {
		width,
		justifyContent: "center",
		overflow: "hidden",
		fontSize: 10,
		resizeMode: "cover",
	},
	text: {
		fontSize: 30,
		textAlign: "center",
		color: "white",
		textShadowColor: "rgba(0, 0, 0, 0.75)",
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
	},

	slide: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: "99%",
	},
	gradient: {
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 20,
	},
	title: {
		fontSize: 40,
		fontWeight: "bold",
		color: "#fff",
		marginBottom: 10,
	},
	description: {
		fontSize: 18,
		color: "#fff",
		textAlign: "center",
		marginBottom: 20,
	},
	button: {
		backgroundColor: "#00b894",
		height: 50,
		borderRadius: 25,
		justifyContent: "center",
		alignItems: "center",
		// marginHorizontal: 20,
		marginTop: 20,
		width: 300,
	},
	buttonText: {
		color: "#fff",
		fontWeight: "bold",
	},
});

export default Swiper;
