import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, Button, FlatList, View } from 'react-native';

export default function ManagementQuestion() {
  return (
    <View style = {styles.header}>
    <Text style={styles.title}>The company is lossing money and we need to down size so effective immdeiately john from accounting is fired pack up your shit </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
      height: 'auto',
      width: '100%',
      padding: 36,
      backgroundColor: 'coral',
  },
  title: {
      textAlign: 'center',
      textAlignVertical: 'auto',
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',

  }
});