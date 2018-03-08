package com.decreditonmobiletest;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.Collections;
import java.util.List;
import java.util.ArrayList;

/**
 * Created by user on 3/8/18.
 */

public class DcrWalletPackage implements ReactPackage {
    public List<ViewManager> createViewManagers(ReactApplicationContext ctx) {
        return Collections.emptyList();
    }

    public List<NativeModule> createNativeModules(ReactApplicationContext ctx) {
        List<NativeModule> modules = new ArrayList<>();
        modules.add(new DcrWallet(ctx));
        return modules;
    }
}
