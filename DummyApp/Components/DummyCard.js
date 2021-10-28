import React from "react";
import {
  View,
  StyleSheet,
  Image,
  IconComponent,
  TouchableHighlight,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import AppText from "../../app/components/AppText";
import colors from "../../app/config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function DummyCard({
  expense,
  amount,
  time,
  date,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.card}>
          {IconComponent}
          <View style={styles.detailsContainer}>
            <AppText numberOfLines={10} style={styles.expense}>
              {expense}
            </AppText>
            <AppText numberOfLines={1} style={styles.amount}>
              {"₹" + amount}
            </AppText>
            <View style={styles.timeContainer}>
              <AppText>{date}</AppText>
              <AppText>{time}</AppText>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}
const styles = StyleSheet.create({
  card: {
    width: 300,
    margin: 10,
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: colors.white,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  amount: {
    color: colors.secondary,
  },
  expense: {
    marginBottom: 7,
  },
  timeContainer: {
    marginTop: 3,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default DummyCard;
