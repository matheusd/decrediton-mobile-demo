import { NativeModules } from 'react-native';
console.log("gonna show");
console.log(NativeModules.DcrWallet);
console.log("done");

module.exports = NativeModules.DcrWallet;
