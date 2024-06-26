import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";

export default function ButtonCategory({
	title,
	setSelectedBtn,
	selectedBtn,
	setCatId,
	item,
}: any) {
	return (
		<TouchableOpacity
			onPress={() => {
				setSelectedBtn(title);
				setCatId(item?.id);
			}}
			style={tw` pl-5 pr-5 h-[7] rounded-md justify-center text-[#fff] border border-[#d4d4d4] items-center ${
				selectedBtn === title ? "bg-[#0F66D2]  " : "bg-[#d4d4d4] text-white"
			}  ${selectedBtn === title ? " text-white " : " text-black "}
`}>
			<Text
				style={tw`text-3 font-bold ${
					selectedBtn === title ? "text-white" : "text-black"
				}`}>
				{title}
			</Text>
		</TouchableOpacity>
	);
}
