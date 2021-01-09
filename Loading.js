import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Loading(){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Getting the fucking weather</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flex-end는 내용을 끝에서부터 하는? 그런것 인듯? 아님말고?
        justifyContent: "flex-end",
        // css에는 없는 RN의 기능
        paddingHorizontal : 30,
        paddingVertical : 100,
        backgroundColor: "#FDF6AA"
    },
    text: {
        color: "#2c2c2c",
        // px로 하면 "" 안에 작성해야한다.
        fontSize: 30
    }
});