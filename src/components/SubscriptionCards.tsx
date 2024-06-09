import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import tw from "twrnc";

const SubscriptionPlans = () => {
	const [selectedPlan, setSelectedPlan] = useState(null);

	const plans = [
		{ id: "daily", title: "Daily Plan", price: "$1.99/day" },
		{ id: "monthly", title: "Monthly Plan", price: "$9.99/month" },
		{ id: "quarterly", title: "Quarterly Plan", price: "$24.99/quarter" },
	];

	const selectPlan = (planId: any) => {
		setSelectedPlan(planId);
	};

	return (
		<View style={tw`flex-1 justify-center items-center bg-black`}>
			<Text style={tw`text-white font-bold text-2xl mb-8`}>
				Choose Your Plan
			</Text>
			{plans.map((plan) => (
				<TouchableOpacity
					key={plan.id}
					style={[
						styles.planContainer,
						tw`p-4 mb-4 rounded-lg`,
						selectedPlan === plan.id ? tw`bg-green-500` : tw`bg-gray-800`,
					]}
					onPress={() => selectPlan(plan.id)}>
					<Text style={tw`text-white font-bold text-xl`}>{plan.title}</Text>
					<Text style={tw`text-white text-lg`}>{plan.price}</Text>
				</TouchableOpacity>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	planContainer: {
		width: "80%",
		alignItems: "center",
	},
});

export default SubscriptionPlans;
