import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { useContext } from 'react';
import { TabContext } from '../context';

export default function Header() {
    const [tab,] = useContext(TabContext)
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.logo}>WhatsApp</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <MaterialCommunityIcons name="camera-outline" size={24} color="#fff" style={styles.icon}/>
                {tab !== 'Groups' ? <MaterialIcons name="search" size={24} color="#fff"  style={styles.icon}/>: null}
                <MaterialCommunityIcons name="dots-vertical" size={24} color="#fff"  style={styles.icon}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#128C7E',
        padding: 15
    },
    logo: {
        color: "#fff",
        fontSize:20,
    },
    icon: {
        marginLeft: 20
    },
});