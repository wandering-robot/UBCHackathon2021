import React, { Component } from 'react';
import { Text, View } from 'react-native';

var ProblemInfo = "What should we do to increase customer satisfaction?"
var Solution1 = "We should give them discounts"
var Solution2 = "We should interview them and find out what they like and do more of that, and what they dislike and do less of that"
var Solution3 = "We should lower our prices"
var Solution4 = "We should tweak foo1 and fix bar3 and that will improve the product"

const arr =[Solution1,Solution4,Solution2,Solution3,Solution4];

const ViewSolutions = () => {
    const [arr1, UpdateArray] = React.useState([]);

    React.useEffect(() => {
        fetch('https://vast-ocean-93287.herokuapp.com/evanCompany/2/4', {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        //   // 'Content-Type': 'application/x-www-form-urlencoded',
        // },
        // redirect: 'follow', // manual, *follow, error
        // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        // body: JSON.stringify({"userName": text2, "userSolution": text}) // body data type must match "Content-Type" header
        })
        .then(response => response.json())
        .then(response => {
            console.log(response);
            arr.push(response.Company_Name);
            UpdateArray(arr);
        })
     }, []);


    return (
    <View>
        <Text style={{padding:10, fontsize:30}}> 
        {ProblemInfo}
        </Text>

        {arr1.map(item => (
        <Text key={item} style={{padding:5, fontsize:12}}>
        {item}</Text>
        ))}

    </View>
    );
};

export default ViewSolutions;