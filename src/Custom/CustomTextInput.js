import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native';

const CustomTextInput = ({ value, onChangeText, placeholder, icon, type }) => {
    return (

        <View
            style={{
                width: '80%',
                height: 50,
                borderRadius: 10,
                borderWidth: 0.5,
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 20,
                marginLeft: 20,
                alignSelf: 'center',
                // marginTop: 30
            }}
        >
            <Image
                source={icon}
                style={{ width: 25, height: 25, marginRight: 10, tintColor: '000', marginLeft: 5, }}
                resizeMode="contain"
            />
        </View>
    )
}

export default CustomTextInput