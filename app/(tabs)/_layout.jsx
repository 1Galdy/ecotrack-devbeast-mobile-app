// app/(tabs)/_layout.jsx
import { Ionicons } from "@expo/vector-icons";
import { Tabs, usePathname, useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";


export default function TabsLayout() {
  const insets = useSafeAreaInsets();
  const pathname = usePathname(); // ✅ hook ici
  const router = useRouter();     // ✅ hook ici

  const isProfilActive = pathname.startsWith("/profil");

  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
        tabBarActiveTintColor: "#24D26D",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          height: 60 + insets.bottom,
          paddingBottom: insets.bottom,
          backgroundColor: "#fff",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Accueil",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="qrcode"
        options={{
          title: "Scanner",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="qr-code" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profil"
        options={{
          title: "Profil",
          tabBarIcon: ({ size }) => (
            <Ionicons
              name="person"
              size={size}
              color={isProfilActive ? "#24D26D" : "gray"}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profil/settings"
        options={{
          href: null,
          title: "Paramètres",
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={24}
              style={{ marginLeft: 15 }}
              onPress={() => router.replace("/profil")}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="signaler/formulaire"
        options={{
          href: null,
          title: "Signaler",
          headerShown: false,
        }}
      />
    </Tabs>
  );
}