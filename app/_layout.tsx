import { FontAwesome } from "@expo/vector-icons";
import { Stack } from "expo-router";

import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Pressable } from "@/components/ui/pressable";
import "@/global.css";

export default function RootLayout() {
  return (
    <GluestackUIProvider mode="dark">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#071F5C" },
          headerTitleStyle: { color: "#F5F7FA" },
          headerLeft: () => (
            <Pressable style={{ marginRight: 20 }}>
              <FontAwesome name="arrow-left" color="#F5F7FA" size={24} />
            </Pressable>
          ),
        }}
      />
    </GluestackUIProvider>
  );
}
