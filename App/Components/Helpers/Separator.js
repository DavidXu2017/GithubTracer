import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

let styles = StyleSheet.create({
    separator: {
        height: 1,
        backgroundColor:'#E4E4E4',
        flex: 1,
        marginLeft: 15,
    }
});

class Separator extends React.Component{
    render() {
        return (
            <View style={styles.separator}></View>
        )
    }
}

export default Separator;