import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";
import { Pressable } from "@/components/ui/pressable";
import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <GluestackUIProvider>
      <Stack
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#181818" },
          headerTitleStyle: { color: "#F5F7FA" },
          headerLeft: () => (
            <Pressable style={{ marginRight: 20 }}>
              <Ionicons name="arrow-back-outline" color="#F5F7FA" size={24} />
            </Pressable>
          ),
        }}
      >
        <Stack.Screen name="swipe" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerTitle: "Sweep" }} />
      </Stack>
    </GluestackUIProvider>
  );
}
