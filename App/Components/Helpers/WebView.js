import React from 'react';
import {View, Text, WebView, StyleSheet} from 'react-native';

let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F6EF',
        flexDirection: 'column'
    }
});

class Web extends React.Component{
    render() {
        let url = this.props.url;
        return (
            <View style={styles.container}>
                <WebView
                    source={{uri: url}}
                />
                
            </View>
        )
    }
}

export default Web