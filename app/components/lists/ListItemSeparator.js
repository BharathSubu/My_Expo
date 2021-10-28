import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../../config/colors";
function ListItemSeparator(props) {
  return <View style={styles.separator} />;
}
const styles = StyleSheet.create({
  separator: {
    width: "95%",
    height: 3,
    backgroundColor: colors.light,
    borderRadius: 30,
    left: 10,
  },
});
export default ListItemSeparator;
