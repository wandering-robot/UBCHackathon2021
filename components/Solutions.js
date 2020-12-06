import React, { Component } from 'react';
import { Text, View } from 'react-native';

var ProblemInfo = "What should we do to increase customer satisfaction?"
var Solution1 = "We should give them discounts"
var Solution2 = "We should interview them and find out what they like and do more of that, and what they dislike and do less of that"
var Solution3 = "We should lower our prices"
var Solution4 = "We should tweak foo1 and fix bar3 and that will improve the product"

const arr = [Solution1,Solution2,Solution3,Solution4];

const ViewSolutions = () => {
return (
    <View>
        <Text style={{padding:10, fontsize:30}}> 
        {ProblemInfo}
        </Text>

        {arr.map(item => (
        <Text style={{padding:5, fontsize:12}}>
        {item.name}</Text>
        ))}

    </View>
    );
};

export default ViewSolutions;