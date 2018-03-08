package com.decreditonmobiletest;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.Promise;

import mobilewallet.LibWallet;

public class DcrWallet extends ReactContextBaseJavaModule {

    private final LibWallet wallet;

    public DcrWallet(ReactApplicationContext ctx) {
        super(ctx);
        final String dbDir = ctx.getFilesDir().getPath() + "/walletdb";

        this.wallet = new LibWallet(dbDir);
    }

    @Override
    public String getName() {
        return "DcrWallet";
    }

    @ReactMethod
    public void test(Promise promise) {
        WritableMap map = Arguments.createMap();
        map.putString("result", "blabla :P");
        promise.resolve(map);
    }

    @ReactMethod
    public void createWallet(Promise promise) {
        try {
            this.wallet.createWallet();
            WritableMap map = Arguments.createMap();
            map.putBoolean("created", true);
            promise.resolve(map);
        } catch (Exception e) {
            promise.reject(e);
        }
    }

    @ReactMethod
    public void openWallet(Promise promise) {
        try {
            this.wallet.openWallet();
            WritableMap map = Arguments.createMap();
            map.putBoolean("opened", true);
            promise.resolve(map);
        } catch (Exception e) {
            promise.reject(e);
        }
    }

    @ReactMethod
    public void spendable(Promise promise) {
        try {
            long spendable = this.wallet.spendableForAccount();
            WritableMap map = Arguments.createMap();
            map.putDouble("spendable", spendable / 1e8);
            promise.resolve(map);
        } catch (Exception e) {
            promise.reject(e);
        }
    }

    @ReactMethod
    public void nextAddress(Promise promise) {
        try {
            String address = this.wallet.addressForAccount();
            WritableMap map = Arguments.createMap();
            map.putString("address", address);
            promise.resolve(map);
        } catch (Exception e) {
            promise.reject(e);
        }
    }
}
