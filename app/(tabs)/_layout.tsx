import { Tabs } from "expo-router";
import React from "react";
import { Platform, Pressable } from "react-native";
import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useTextStyles } from "@/hooks/useTextStyles";
import { useScale } from "@/hooks/useScale";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const textStyles = useTextStyles();
  const scale = useScale();

  const tabBarButton = (props: BottomTabBarButtonProps) => {
    const { ref, ...rest } = props;
    const style: any = props.style ?? {};
    return (
      <Pressable
        {...rest}
        style={({ pressed, focused }) => [
          style,
          {
            opacity: pressed || focused ? 0.6 : 1.0,
          },
        ]}
      />
    );
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarStyle: {
          height: textStyles.title.lineHeight * 2,
        },
        tabBarPosition:
          Platform.isTV || Platform.OS === "web" ? "top" : "bottom",
        tabBarIconStyle: {
          height: textStyles.title.lineHeight,
          width: 30 * scale,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Bug is here",
          tabBarButton,
          tabBarLabelStyle: textStyles.default,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "tv" : "tv-outline"} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
