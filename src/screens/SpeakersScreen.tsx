import React from 'react';
import { View, FlatList} from 'react-native';
import SpeakerCard from '../components/cards/SpeakerCard';
import type { SpeakerCardProps } from '../components/cards/SpeakerCard';
import BackArrowIcon from '../assets/icons/BackArrowIcon';
import { colors } from "../constants/Colors";
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { screen_names } from '../constants/ScreenNames';
import { ParamListBase } from '@react-navigation/native';
import { HeaderBackButtonProps } from '@react-navigation/native-stack/lib/typescript/src/types';

//Mock data ... to be removed when we add code to fetch the actual data
const placeholder = require("../assets/img/DummySpeakerProfilePicture.jpeg")
  const MOCK_DATA = [
    {
      id: '1',
      ProfilePicture : placeholder,
      SpeakersName : "Harun Wangereka",
      Content : "Kenya Partner Lead at droidcon Berlin | Android | Kotlin | Flutter | C++" 
    },
    {
      id: '2',
      ProfilePicture : placeholder,
      SpeakersName : "Harun Wangereka",
      Content : "Kenya Partner Lead at droidcon Berlin | Android | Kotlin | Flutter | C++" 
    },
    {
      id: '3',
      ProfilePicture : placeholder,
      SpeakersName : "Harun Wangereka",
      Content : "Kenya Partner Lead at droidcon Berlin | Android | Kotlin | Flutter | C++" 
    },
    {
      id: '4',
      ProfilePicture : placeholder,
      SpeakersName : "Harun Wangereka",
      Content : "Kenya Partner Lead at droidcon Berlin | Android | Kotlin | Flutter | C++" 
    },
    {
      id: '5',
      ProfilePicture : placeholder,
      SpeakersName : "Harun Wangereka",
      Content : "Kenya Partner Lead at droidcon Berlin | Android | Kotlin | Flutter | C++" 
    },
    {
      id: '6',
      ProfilePicture : placeholder,
      SpeakersName : "Harun Wangereka",
      Content : "Kenya Partner Lead at droidcon Berlin | Android | Kotlin | Flutter | C++" 
    },
    {
      id: '7',
      ProfilePicture : placeholder,
      SpeakersName : "Harun Wangereka",
      Content : "Kenya Partner Lead at droidcon Berlin | Android | Kotlin | Flutter | C++" 
    },
    {
      id: '8',
      ProfilePicture : placeholder,
      SpeakersName : "Harun Wangereka",
      Content : "Kenya Partner Lead at droidcon Berlin | Android | Kotlin | Flutter | C++" 
    },
    {
      id: '9',
      ProfilePicture : placeholder,
      SpeakersName : "Harun Wangereka",
      Content : "Kenya Partner Lead at droidcon Berlin | Android | Kotlin | Flutter | C++" 
    },
    {
      id: '10',
      ProfilePicture : placeholder,
      SpeakersName : "Harun Wangereka",
      Content : "Kenya Partner Lead at droidcon Berlin | Android | Kotlin | Flutter | C++" 
    },
  ];

  const SpeakersScreen = ({navigation}: NativeStackScreenProps<ParamListBase, screen_names.SPEAKERS, undefined>) => {
    return (
        <View>
        <FlatList
          data={MOCK_DATA}
          renderItem={({item}) => <SpeakerCard SpeakersName={item.SpeakersName} id={item.id} ProfilePicture={item.ProfilePicture} Content={item.Content}/>}
          keyExtractor={(item: SpeakerCardProps) => item.id}
          numColumns = {2}
        />
        </View>
    );
  };

  export const SpeakersBackButton = (props : HeaderBackButtonProps) => (
    <View style={{marginRight : 8 , marginBottom : 8 }}>
    <BackArrowIcon color={colors.DROIDCONKE_BLACK} />
    </View>
  )
  export default SpeakersScreen