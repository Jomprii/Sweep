import { Feather } from "@react-native-vector-icons/feather";
import React from "react";
import {
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Index() {
  return (
    <>
      <StatusBar barStyle="default" />
      <View style={styles.main}>
        <View style={styles.imgcont}>
          <Image
            source={require("./assets/images/Splash.jpg")}
            style={styles.card}
          />
        </View>
        <View style={styles.swipe}>
          \
          <View style={styles.delete}>
            <Pressable
              style={{ borderRadius: "50%", backgroundColor: "#E63946" }}
            >
              <Feather name="x" color="#000" size={55} />
            </Pressable>
            <Text style={{ color: "#F5F7FA", alignSelf: "center" }}>
              Delete
            </Text>
          </View>
          <View style={styles.save}>
            <Pressable
              style={{ borderRadius: "50%", backgroundColor: "#2ECC71" }}
            >
              <Feather name="check" color="#000" size={55} />
            </Pressable>
            <Text style={{ color: "#F5F7FA", alignSelf: "center" }}>Save</Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#1E1E1E",
  },
  imgcont: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    position: "absolute",
    top: 90,
    width: 290,
    height: 490,
    borderRadius: 12,
  },
  swipe: {
    flexDirection: "row",
    justifyContent: "space-around",
    position: "relative",
    bottom: 50,
  },
  delete: {},
  save: {},
});
