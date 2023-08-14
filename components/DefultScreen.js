import { StyleSheet, Text, View } from "react-native";

export default function DefaultScreen({ content }) {
  return (
    <View style={styles.container}>
      <Text>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "balck",
    alignItems: "center",
    justifyContent: "center",
  },
});
