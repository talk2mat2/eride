import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "../helpers/colors";

export default function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: "row" }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const icons = (isFocused) => {
          return route?.name == "Home" ? (
            <MaterialCommunityIcons
              name="home-variant"
              size={24}
              color={isFocused ? colors.primary : colors.grey2}
            />
          ) : route?.name == "Logs" ? (
            <MaterialIcons
              name="view-list"
              size={24}
              color={isFocused ? colors.primary : colors.grey2}
            />
          ) : route?.name == "Profile" ? (
            <FontAwesome name="user-circle-o" size={24}  color={isFocused ? colors.primary : colors.grey2}/>
          ) : (
            ""
          );
        };
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, ...styles.container }}
          >
            {icons(isFocused)}
            <Text style={{ color: isFocused ? colors.primary: "#222" }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
