import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { ExploreScreen } from "src/screens";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { HomeStackNavigator } from "./home-stack";
// import Downloads from "../screens/downloads";
// import Plans from "../screens/plans";
// import SettingsScreen from "../screens/settings";
import { Platform, SafeAreaView, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
// import HeaderRight from "../components/header/HeaderRight";
// import HeaderLeft from "../components/header/HeaderLeft";
import { EvilIcons } from "@expo/vector-icons";
import tw from "twrnc";
import SettingsScreen from "../screens/settings";
import { StatusBar } from "expo-status-bar";
import ButtonCategory from "../components/button-category";
import { Feather } from "@expo/vector-icons";
import SearchScreen from "../screens/search";
import { FontAwesome5 } from "@expo/vector-icons";
import PlanScreen from "../screens/plans";

export type BottomTabParams = {
	HomeTab: undefined;
	settings: undefined;
	add: undefined;
	Search: undefined;
	plans: undefined;
};

const Tabs = createBottomTabNavigator<BottomTabParams>();

/*
    Define Icons
*/
interface TabBarIconProps {
	focused: boolean;
	color: string;
	size: number;
}
const HomeIcon = ({ focused, color, size }: TabBarIconProps) => (
	<MaterialCommunityIcons
		name={focused ? "home" : "home-outline"}
		color={color}
		size={26}
	/>
);

const SearchIcon = ({ focused, color, size }: TabBarIconProps) => (
	<Feather name='search' size={24} color={color} />
);

const PlansIcon = ({ focused, color, size }: TabBarIconProps) => (
	<AntDesign name={focused ? "play" : "playcircleo"} size={24} color='black' />
);

const SettingsIcon = ({ focused, color, size }: TabBarIconProps) => (
	<MaterialCommunityIcons
		name={focused ? "account-settings" : "account-settings-outline"}
		size={26}
		color='white'
	/>
);

const PlanIcon = ({ focused, color, size }: TabBarIconProps) => (
	<FontAwesome5 name='money-check' size={26} color='white' />
);

export /**
 *Bottom Tab Navigator, used for Navigating between all bottom tab screens
 *
 * @return {*}
 */
const BottomTabNavigator: React.FC<{}> = () => {
	const statusBarHeight = Platform.OS === "ios" ? 200 : 0;
	return (
		<>
			<StatusBar backgroundColor='white' />
			<SafeAreaView
				style={{
					flex: 1,
					backgroundColor: "black",
					paddingTop: statusBarHeight,
				}}>
				<Tabs.Navigator
					screenOptions={{
						tabBarHideOnKeyboard: true,
						headerShown: true,
						headerTitle: "",
						headerStyle: {
							backgroundColor: "black",
							borderBottomWidth: 0,
							shadowColor: "transparent",
							elevation: 0,
						},

						headerLeft: () => (
							<View style={tw`pl-3 pr-3 flex-row gap-5 items-center`}>
								<View
									style={tw`bg-[#00b894] justify-center items-center rounded-full h-9 w-9`}>
									<Text style={tw`text-white text-5`}>G</Text>
								</View>
								<View>
									<ButtonCategory
										title='All'
										setSelectedBtn={""}
										selectedBtn={""}
										setCatId={""}
										item={""}
									/>
								</View>
							</View>
						),

						headerTintColor: "white",
						tabBarActiveTintColor: "white",
						tabBarInactiveTintColor: "white",
						tabBarStyle: {
							backgroundColor: "black",
							borderBottomWidth: 0,
						},
					}}>
					<Tabs.Screen
						name='HomeTab'
						component={HomeStackNavigator}
						options={{
							title: "Home",
							headerTitle: "",
							tabBarIcon: HomeIcon,
						}}
					/>

					<Tabs.Screen
						name='Search'
						component={SearchScreen}
						options={{
							title: "search",
							headerTitle: "",
							tabBarIcon: SearchIcon,
						}}
					/>
					<Tabs.Screen
						name='plans'
						component={PlanScreen}
						options={{
							title: "plans",
							headerTitle: "",
							tabBarIcon: PlanIcon,
						}}
					/>

					<Tabs.Screen
						name='settings'
						component={SettingsScreen}
						options={{
							title: "Settings",
							headerTitle: "",
							tabBarIcon: SettingsIcon,
						}}
					/>
				</Tabs.Navigator>
			</SafeAreaView>
		</>
	);
};

// <Tabs.Screen
// name='Explore'
// component={ExploreScreen}
// options={{
// headerTitle: "Explore",
// tabBarIcon: ExploreIcon,
// }}
// />;
