package com.shopping_cart;

import com.facebook.react.ReactActivity;
import android.os.Bundle; // required for onCreate parameter
import org.devio.rn.splashscreen.SplashScreen; // required for react-native-splash-screen >= 0.3.1
import com.BV.LinearGradient.LinearGradientPackage; // <--- This!


public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
protected void onCreate(Bundle savedInstanceState) {
    SplashScreen.show(this);  // here
    super.onCreate(savedInstanceState);
}
  @Override
  protected String getMainComponentName() {
    return "shopping_cart";
  }
}
