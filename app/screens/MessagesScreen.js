import React, { useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import {
  ListItem,
  ListItemSeparator,
  ListItemDeleteAction,
} from "../components/lists";

import Screen from "../components/Screen";
const intialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/person.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/person.jpg"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../assets/person.jpg"),
  },
];
function MessagesScreen(props) {
  const [messages, setMessages] = useState(intialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = (message) => {
    //Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 3,
              title: "T1(New)",
              description: "D1(New)",
              image: require("../assets/person.jpg"),
            },
            {
              id: 4,
              title: "T2(New)",
              description: "D2(New)",
              image: require("../assets/person.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({});
export default MessagesScreen;
