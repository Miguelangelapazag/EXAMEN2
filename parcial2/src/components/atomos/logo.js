import react from "react";
import { View, Text ,StyleSheet} from "react-native";

export default function logo() {
    return 
        <View style={styles.container}>
            <Text style={styles.text}> 
                Crypt<Text style={styles.purple}>X</Text> 
            </Text> 
            
        </View>
    
};

const styles =stylesheet.create({
    container: {
        alingnSelf: 'flex-start',
        
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    purple: {
        color: '#6847ff',
    },
});