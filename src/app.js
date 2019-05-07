import React, {Component} from "react";
import Header from './components/header'
import {View} from 'react-native'
import AlbumList from "./components/AlbumList";
class Root extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Header headerText={'Albums!'} />
                <AlbumList/>
            </View>
        )
    }
}

export default Root