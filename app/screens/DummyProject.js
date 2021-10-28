// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   Modal,
//   Keyboard,
// } from "react-native";
// import {
//   AppForm,
//   AppFormField,
//   AppFormPicker,
//   SubmitButton,
// } from "../components/forms";
// import * as Yup from "yup";
// import AppTextInput from "../components/AppTextInput";
// import defaultStyle from "../config/styles";
// import Screen from "../components/Screen";
// import AppButton from "../components/AppButton";
// import {
//   ListItem,
//   ListItemSeparator,
//   ListItemDeleteAction,
// } from "../components/lists";
// import AppLoading from "expo-app-loading";
// import { useFonts } from "expo-font";
// import AppText from "../components/AppText";
// import DummyCard from "../../DummyApp/Components/DummyCard";
// const validationSchema = Yup.object().shape({
//   valExpense: Yup.string().required().min(1).label("Expenses"),
//   valAmount: Yup.number().required().min(1).max(10000).label("amount"),
// });
// function DummyProject(props) {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [listItems, setListItems] = useState([]);
//   const [id, setid] = useState();
//   const [expenses, setExpenses] = useState();
//   const [amount, setAmount] = useState();
//   const [date, setDate] = useState();
//   const [time, setTime] = useState();
//   const handleAddlist = () => {
//     Keyboard.dismiss();
//     setListItems([
//       ...listItems,
//       {
//         id: Math.random().toString(),
//         addAmount: value.valAmount,
//         addExpenses: value.valExpense,
//         addDate: date,
//         addTime: time,
//       },
//     ]);
//     setExpenses(null);
//     setAmount(null);
//     setid(null);
//   };
//   const handleDelete = (item) => {
//     //Delete the expense from expenses
//     setListItems(listItems.filter((e) => e.id !== item.id));
//   };

//   ShowCurrentDate = () => {
//     var date = new Date().getDate();
//     var month = new Date().getMonth() + 1;
//     var year = new Date().getFullYear();
//     setDate(date + "/" + month + "/" + year);
//   };
//   ShowCurrentTime = () => {
//     var hours = new Date().getHours();
//     var minutes = new Date().getMinutes();
//     var ampm = hours >= 12 ? "PM" : "AM";
//     hours = hours % 12;
//     hours = hours ? hours : 12; // the hour '0' should be '12'
//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     setTime(hours + ":" + minutes + " " + ampm);
//   };
//   let [fontsLoaded] = useFonts({
//     Yellowtail: require("../assets/fonts/Yellowtail-Regular.ttf"),
//   });
//   if (!fontsLoaded) {
//     return <AppLoading />;
//   }
//   return (
//     <Screen style={styles.container}>
//       <>
//         <Text style={styles.tagline}>Daily Expenses</Text>
//         <Modal
//           visible={modalVisible}
//           animationType="slide"
//           onRequestClose={() => {
//             setModalVisible(false);
//             setExpenses(null);
//             setAmount(null);
//             setid(null);
//           }}
//         >
//           <Screen style={styles.container}>
//             <AppForm
//               initialValues={{
//                 valExpense: "",
//                 valAmount: "",
//               }}
//               onSubmit={(values) => {
//                 ShowCurrentTime();
//                 ShowCurrentDate();
//                 handleAddlist();
//                 setModalVisible(false);
//               }}
//               validationSchema={validationSchema}
//             >
//               <View style={styles.textinput}>
//                 <AppFormField
//                   name="valExpense"
//                   icon="account-circle-outline"
//                   placeholder="Expense"
//                   value={valExpense}
//                   // onChangeText={(text) => setExpenses(text)}
//                 />

//                 <AppFormField
//                   name="valAmount"
//                   icon="cash-usd-outline"
//                   placeholder="money"
//                   keyboardType="numeric"
//                   value={valAmount}
//                   // onChangeText={(text) => setAmount(text)}
//                 />
//               </View>
//               <View style={styles.buttonsContainer}>
//                 <SubmitButton
//                   title="add"
//                   // onPress={() => {
//                   //   {
//                   //     setModalVisible(false);
//                   //     ShowCurrentTime();
//                   //     ShowCurrentDate();
//                   //     handleAddlist();
//                   //   }
//                   // }}
//                 />
//               </View>
//             </AppForm>
//           </Screen>
//         </Modal>
//         <View style={styles.scrollview}>
//           <FlatList
//             data={listItems}
//             keyExtractor={(item, index) => item.id}
//             renderItem={({ item }) => (
//               <DummyCard
//                 expense={item.addExpenses}
//                 amount={item.addAmount}
//                 time={item.addTime}
//                 date={item.addDate}
//                 onPress={() => console.log("selected", item)}
//                 renderRightActions={() => (
//                   <ListItemDeleteAction
//                     onPress={() => {
//                       handleDelete(item);
//                     }}
//                   />
//                 )}
//               />
//             )}
//             ItemSeparatorComponent={ListItemSeparator}
//           />
//         </View>
//         <View style={styles.addTaskContainer}>
//           <AppButton
//             title="Add Task"
//             onPress={() => {
//               ShowCurrentTime();
//               ShowCurrentDate();
//               setModalVisible(true);
//             }}
//           />
//         </View>
//       </>
//     </Screen>
//   );
// }
// const styles = StyleSheet.create({
//   addTaskContainer: {
//     top: 10,
//     width: "90%",
//   },

//   tagline: {
//     fontSize: 45,
//     fontWeight: "600",
//     fontFamily: "Yellowtail",
//   },
//   buttonsContainer: {
//     position: "absolute",
//     padding: 20,
//     width: "100%",
//     top: 150,
//   },
//   container: {
//     width: "100%",
//     alignItems: "center",
//     backgroundColor: defaultStyle.colors.lightGreen,
//   },
//   textinput: {
//     top: 10,
//     alignItems: "center",
//     width: "90%",
//   },
//   scrollview: {
//     width: "90%",
//     borderWidth: 2,
//     borderRadius: 15,
//     alignItems: "center",
//     height: 620,
//     top: 10,
//     backgroundColor: defaultStyle.colors.white,
//     overflow: "hidden",
//   },
// });
// export default DummyProject;

import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Modal,
  Keyboard,
} from "react-native";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import * as Yup from "yup";
import AppTextInput from "../components/AppTextInput";
import defaultStyle from "../config/styles";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import {
  ListItem,
  ListItemSeparator,
  ListItemDeleteAction,
} from "../components/lists";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import AppText from "../components/AppText";
import DummyCard from "../../DummyApp/Components/DummyCard";
const validationSchema = Yup.object().shape({
  valExpense: Yup.string().required().min(1).label("Expenses"),
  valAmount: Yup.number().required().min(1).max(10000).label("amount"),
});
function DummyProject(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [listItems, setListItems] = useState([]);
  const [id, setid] = useState();
  const [expenses, setExpenses] = useState();
  const [amount, setAmount] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const storeData = async () => {
    try {
      const jsonValue = JSON.stringify({
        id: id,
        addAmount: amount,
        addExpenses: expenses,
        addDate: date,
        addTime: time,
      });
      await AsyncStorage.setItem("task", jsonValue);
    } catch (e) {
      // saving error
    }
  };
  const handleAddlist = () => {
    Keyboard.dismiss();
    if (expenses && amount) {
      setListItems([
        ...listItems,
        {
          id: Math.random().toString(),
          addAmount: amount,
          addExpenses: expenses,
          addDate: date,
          addTime: time,
        },
      ]);
    }

    setExpenses(null);
    setAmount(null);
    setid(null);
  };
  const handleDelete = (item) => {
    //Delete the expense from expenses
    setListItems(listItems.filter((e) => e.id !== item.id));
  };

  ShowCurrentDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    setDate(date + "/" + month + "/" + year);
  };
  ShowCurrentTime = () => {
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    setTime(hours + ":" + minutes + " " + ampm);
  };
  let [fontsLoaded] = useFonts({
    Yellowtail: require("../assets/fonts/Yellowtail-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Screen style={styles.container}>
      <>
        <Text style={styles.tagline}>Daily Expenses</Text>
        <Modal
          visible={modalVisible}
          animationType="slide"
          onRequestClose={() => {
            setModalVisible(false);
            setExpenses(null);
            setAmount(null);
            setid(null);
          }}
        >
          <Screen style={styles.container}>
            <View style={styles.textinput}>
              <AppTextInput
                name="valExpense"
                icon="account-circle-outline"
                placeholder="Expense"
                value={expenses}
                onChangeText={(text) => setExpenses(text)}
              />

              <AppTextInput
                name="valAmount"
                icon="cash-usd-outline"
                placeholder="money"
                keyboardType="numeric"
                value={amount}
                onChangeText={(text) => setAmount(text)}
              />
            </View>

            <View style={styles.buttonsContainer}>
              <AppButton
                title="add"
                onPress={() => {
                  {
                    setModalVisible(false);
                    ShowCurrentTime();
                    ShowCurrentDate();
                    handleAddlist();
                  }
                }}
              />
            </View>
          </Screen>
        </Modal>
        <View style={styles.scrollview}>
          <FlatList
            data={listItems}
            keyExtractor={(item, index) => item.id}
            renderItem={({ item }) => (
              <DummyCard
                expense={item.addExpenses}
                amount={item.addAmount}
                time={item.addTime}
                date={item.addDate}
                onPress={() => console.log("selected", item)}
                renderRightActions={() => (
                  <ListItemDeleteAction
                    onPress={() => {
                      handleDelete(item);
                    }}
                  />
                )}
              />
            )}
            ItemSeparatorComponent={ListItemSeparator}
          />
        </View>
        <View style={styles.addTaskContainer}>
          <AppButton
            title="Add Task"
            onPress={() => {
              ShowCurrentTime();
              ShowCurrentDate();
              setModalVisible(true);
            }}
          />
        </View>
      </>
    </Screen>
  );
}
const styles = StyleSheet.create({
  addTaskContainer: {
    top: 10,
    width: "90%",
  },

  tagline: {
    fontSize: 45,
    fontWeight: "600",
    fontFamily: "Yellowtail",
  },
  buttonsContainer: {
    position: "absolute",
    padding: 20,
    width: "100%",
    top: 150,
  },
  container: {
    width: "100%",
    alignItems: "center",
    backgroundColor: defaultStyle.colors.lightGreen,
  },
  textinput: {
    top: 10,
    alignItems: "center",
    width: "90%",
  },
  scrollview: {
    width: "90%",
    borderWidth: 2,
    borderRadius: 15,
    alignItems: "center",
    height: 620,
    top: 10,
    backgroundColor: defaultStyle.colors.white,
    overflow: "hidden",
  },
});
export default DummyProject;
