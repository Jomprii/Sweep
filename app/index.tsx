import { Button, ButtonText } from "@/components/ui/button";
import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Link } from "react-navigation/native";

export default function Home() {
  return (
    <View style={styles.body}>
      <View style={styles.btncont}>
        <Button variant="solid" size="md" style={styles.button}>
          <ButtonText>Button</ButtonText>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: { flex: 1, backgroundColor: "#212121" },
  button: {
    width: 160,
  },
  btncont: { flex: 1, alignItems: "center", justifyContent: "center" },
});
