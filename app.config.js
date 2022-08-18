import "dotenv/config";

export default {
  expo: {
    name: "Cocktail Library - Recipes",
    slug: "cocktail-library",
    version: "1.0.0",
    assetBundlePatterns: ["**/*"],
    orientation: "portrait",
    icon: "./assets/icon.png",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "cover",
      backgroundColor: "#5110D4",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/icon.png",
        backgroundColor: "#ffffff",
      },
      versionCode: 1,
      package: "com.franstudios.cocktaillibrary",
    },
    "react-native-google-mobile-ads": {
      android_app_id: process.env.ADMOB_APP_KEY,
    },
  },
};
