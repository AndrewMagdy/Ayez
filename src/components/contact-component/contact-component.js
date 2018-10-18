// @flow

import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Button,
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

const renderSaved = () => (
  <Text style={styles.greenText}>Contacts Uploaded Successfly</Text>
);
const renderError = () => (
  <Text style={styles.redText}>An Error occured while obtaining contacts</Text>
);

const shareMessage = message => {
  Share.share({
    message
  });
};
const ContactComponent = (props: Props) => {
  const { didSave, isLoading, error, saveContacts, myCode } = props;

  return (
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator /> : null}
      {error ? renderError() : null}

      <TouchableOpacity
        style={didSave ? styles.disabledRoundButton : styles.roundButton}
        onPress={saveContacts}
        disabled={didSave}
      >
        <Text style={styles.whiteText}> Upload all my contacts </Text>
      </TouchableOpacity>

      {didSave ? renderSaved() : null}

      <View style={styles.textContainer}>
        <Text> My Code: </Text>
        <Text style={styles.largeText}> {myCode} </Text>
      </View>

      <TouchableOpacity
        style={styles.roundButton}
        onPress={() => shareMessage(myCode)}
      >
        <Text style={styles.whiteText}> Share With my friends </Text>
      </TouchableOpacity>
      <View style={{ flex: 4 }} />
    </View>
  );
};

export default ContactComponent;
