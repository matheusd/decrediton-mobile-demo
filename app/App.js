/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import DcrWallet from "./wallet/client";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor (props) {
    super(props);
    this.state = { msg: "not yet" }
    this.createWallet = this.createWallet.bind(this);
    this.openWallet = this.openWallet.bind(this);
    this.nextAddress = this.nextAddress.bind(this);
    this.update = this.update.bind(this);
  }

  // async createWallet() {
  //   res = await DcrWallet.test();
  //   console.log(res);
  //   this.setState({msg: res.result});
  // }
  createWallet() {
    this.setState({msg: "going"});
    (async function () {
      try {
        res = await DcrWallet.createWallet();
        console.log(res);
        this.setState({msg: "created"});
      } catch (e) {
        this.setState({msg: e.toString()});
      }
      
    }).bind(this)();
  }

  openWallet () {
    this.setState({msg: "opening"});
    (async function () {
      try {
        res = await DcrWallet.openWallet();
        console.log(res);
        this.setState({msg: "opened"});
      } catch (e) {
        this.setState({msg: e.toString()});
      }
      
    }).bind(this)();
  }

  nextAddress () {
    (async function () {
      try {
        res = await DcrWallet.nextAddress();
        this.setState({msg: res.address});
      } catch (e) {
        this.setState({msg: e.toString()});
      }
      
    }).bind(this)();
  }

  update () {
    (async function () {
      try {
        res = await DcrWallet.spendable();
        this.setState({msg: res.spendable});
      } catch (e) {
        this.setState({msg: e.toString()});
      }
      
    }).bind(this)();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.state.msg}
        </Text>        
        <Button onPress={this.createWallet} title="Create Wallet" />
        <Button onPress={this.openWallet} title="Open Wallet" />
        <Button onPress={this.update} title="update" />
        <Button onPress={this.nextAddress} title="Next Address" />
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
