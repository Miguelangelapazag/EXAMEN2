import react from "react";
import { SafeAreaView,StatusBar,StyleSheet,View } from "react-native";
import HeroSection from "../components/organismos/HeroSection";
export default function HomePage() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#000"/>
            <View style={styles.content}>
                <HeroSection/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
});