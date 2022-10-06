import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
	Text,
	View,
	StyleSheet,
	ImageBackground,
	Image,
	ScrollView,
	TouchableOpacity,
	ImageComponent,
} from "react-native";
import { screen_names } from "../constants/ScreenNames";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../constants/Colors";
import { fonts } from "../assets/fonts/fonts";
import TwitterIcon from "../assets/icons/TwitterIcon";
import ArrowLeftIcon from "../assets/icons/ArrowLeftIcon";
import AndroidIcon from "../assets/icons/AndroidIcon";
import { RootStackParamList } from "../types/Navigation";

const SingleSpeakerScreen = ({
	navigation,
	route,
}: NativeStackScreenProps<
	RootStackParamList,
	screen_names.SINGLESPEAKER,
	undefined
>) => {
	interface Speaker {
		//Interface for a speaker type item
		speakerid?: any | null;
		speakerimg: any;
		speakername: string;
		speakerskill: [];
		speakerbio: string;
		speakerhandle: string;
	}

	const Speakers =
		//Dummy speaker data
		{
			speakerid: 1,
			speakername: "Frank Tamre",
			speakerimg: require("../assets/img/johndoe.png"),
			speakeroccupation: "Kenya Partner Lead at doridcon Berlin",
			speakerskill: ["Android", "Kotlin", "Flutter", "C++"],
			speakerbio:
				"Worked at Intel, co-Founded Moringa School, then started @earlycamp to train young children from 5-16 on how to solve problems with technology.Started @interactive to tell African stories with Games to a global audience.Community wise I organize Android & Kotlin developers every month for a meetUp to chat about technology.I Lead a cool team in organizing droidConKE the largest android developer focussed event in Sub Saharan Africa.I train people,mentor them, build things, am highly experimental, read alot and socialize vertically.",
			speakerhandle: "PriestTamzi",
		};

	const item = Speakers; //Gets a speaker object matching the id passed as a parameter

	var myloop = []; //Stores speaker skills Ex: Android, Kotlin
	for (let i = 0; i <= item.speakerskill.length; i++) {
		//Run loop while the iterator variable is less than the skill array from the speaker object's context
		myloop.push(
			//Push the speaker skills wrap in a text component in an array
			<Text key={i}>| {item.speakerskill[i]} </Text>
		);
	}

	var parragraphArray = item.speakerbio.split("."); //Create a new array by diving the speaker bio string. Fullstop denotes a new paragraph
	var textElements = []; //Array to hold the bio 'paragraphs' with line break added
	var j = 0;
	while (j < parragraphArray.length) {
		textElements.push(
			parragraphArray[j] + "\n\n" //Loop through the paragraphs adding a newline  for aesthetics while storing them in a new arrar to be placed inside a text component
		);
		j++;
	}
	return (
		<SafeAreaView>
			<View style={styles.container}>
				<View style={styles.sectionone}>
					<ImageBackground
						style={styles.bgimage}
						source={require("../assets/img/bgsinglespeaker.png")}
					>
						<View style={styles.backbutton}>
							<TouchableOpacity onPress={() => navigation.goBack()}>
								<ArrowLeftIcon color={colors.DROIDCONKE_PEARL} />
							</TouchableOpacity>
							<Text style={styles.speakerheadertext}>{route.params.title}</Text>
						</View>

						<Image style={styles.profilepic} source={item.speakerimg} />
					</ImageBackground>
				</View>
				<View style={styles.sectiontwo}>
					<View style={styles.sectiontwo_subsectionone}>
						<View style={styles.sectiontwo_subsectiononeofone}>
							<AndroidIcon
								width={27}
								height={27}
								color={colors.DROIDCONKE_BRICK_RED}
							/>
							<Text style={styles.sectiontwo_subsectionone_itemone}>
								Speaker:
							</Text>
						</View>
						<Text style={styles.sectiontwo_subsectionone_itemtwo}>
							{item.speakername}
						</Text>
						<Text style={styles.sectiontwo_subsectionone_itemthree}>
							{item.speakeroccupation}
						</Text>
						<Text style={styles.sectiontwo_subsectionone_itemthree}>
							{myloop}
						</Text>
					</View>
					<ScrollView>
						<View style={styles.sectiontwo_subsectiontwo}>
							<Text style={styles.sectiontwo_subsectiontwo_header}>Bio</Text>
							<Text style={styles.sectiontwo_subsectiontwo_paragraph}>
								{textElements}
							</Text>
						</View>
					</ScrollView>
				</View>
				<View style={styles.sectionthree}>
					<Text style={styles.sectionthree_text}>Twitter Handle</Text>
					<TouchableOpacity
						onPress={() => {
							alert("Twitter handle pressed!");
						}}
					>
						<View style={styles.sectionthree_subsectionone}>
							<TwitterIcon
								width={30}
								height={25}
								color={colors.DROIDCONKE_BLUE}
							/>
							<Text
								style={{
									...styles.sectionthree_text,
									color: colors.DROIDCONKE_BLUE,
								}}
							>
								{item.speakerhandle}
							</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default SingleSpeakerScreen;

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		display: "flex",
	},
	sectionone: {
		flex: 2,
		position: "relative",
	},
	bgimage: {
		flex: 1,
	},
	sectiontwo: {
		backgroundColor: colors.DROIDCONKE_WHITE,
		flex: 7,
	},
	sectionthree: {
		marginTop: 1,
		backgroundColor: colors.DROIDCONKE_WHITE,
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 10,
	},
	sectionthree_text: {
		fontSize: 16,
		fontFamily: fonts.MONTSERRAT_REGULAR,
	},
	arrowleft: {
		backgroundColor: "red",
		width: 50,
		height: 50,
	},
	profilepic: {
		width: 100,
		height: 100,
		position: "absolute",
		left: "37%",
		top: "75%",
		zIndex: 1,
		borderRadius: 50,
		borderWidth: 3,
		borderColor: colors.DROIDCONKE_LIGHT_GREEN,
	},
	sectiontwo_subsectionone: {
		alignItems: "center",
		paddingTop: 65,
	},
	sectiontwo_subsectionone_itemone: {
		color: colors.DROIDCONKE_BRICK_RED,
		fontSize: 15,
		fontFamily: fonts.MONTSERRAT_REGULAR,
	},
	sectiontwo_subsectionone_itemtwo: {
		color: colors.DROIDCONKE_BLUE,
		fontSize: 20,
		marginBottom: 10,
		fontFamily: fonts.MONTSERRAT_BOLD,
		padding: 0,
		lineHeight: 20,
	},
	sectiontwo_subsectionone_itemthree: {
		fontWeight: "500",
		color: colors.DROIDCONKE_LIGHT_GREY,
		fontFamily: fonts.MONTSERRAT_REGULAR,
	},
	sectiontwo_subsectiontwo: {
		height: "100%",
		paddingHorizontal: 10,
	},
	sectiontwo_subsectiontwo_header: {
		marginTop: 20,
		color: colors.DROIDCONKE_BLUE,
		fontSize: 20,
		fontWeight: "900",
		fontFamily: fonts.MONTSERRAT_BOLD,
	},
	sectiontwo_subsectiontwo_paragraph: {
		color: colors.DROIDCONKE_BLACK,
		fontWeight: "400",
		fontFamily: fonts.MONTSERRAT_REGULAR,
	},
	sectionthree_subsectionone: {
		borderWidth: 2,
		paddingHorizontal: 25,
		borderColor: colors.DROIDCONKE_BLUE,
		borderRadius: 7,
		color: colors.DROIDCONKE_BLUE,
		display: "flex",
		flexDirection: "row",
		paddingVertical: 5,
	},
	backbutton: {
		stydisplay: "flex",
		flexDirection: "row",
		width: 140,
		alignItems: "center",
		paddingVertical: 10,
		paddingHorizontal: 10,
	},
	sectiontwo_subsectiononeofone: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		padding: 0,
		margin: 0,
	},
	speakerheadertext: {
		fontFamily: fonts.MONTSERRAT_REGULAR,
		color: colors.DROIDCONKE_PEARL,
		fontSize: 18,
		marginLeft: 20,
	},
});
