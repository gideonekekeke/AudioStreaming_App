import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import SubscriptionPlans from "../components/SubscriptionCards";

export default function PlanScreen() {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<SubscriptionPlans />
		</SafeAreaView>
	);
}
