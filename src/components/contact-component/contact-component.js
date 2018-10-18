// @flow

import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  Share
} from "react-native";
import styles from "./styles";

type Props = {
  didSave: boolean,
  isLoading: boolean,
  error: boolean,
  saveContacts: Function,
  myCode: string
};

const ContactComponent = (props: Props) => {
  const { didSave, isLoading, error, saveContacts, myCode } = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={saveContacts}>
        <Text> Hello </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          Share.share({
            message: myCode
          });
        }}
      >
        <Text> Hamada {myCode} </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContactComponent;
