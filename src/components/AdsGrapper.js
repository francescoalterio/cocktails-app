import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useInterstitialAd, TestIds } from "react-native-google-mobile-ads";

export const ads = React.createContext();

const AdsGrapper = ({ children }) => {
  const adOptions = useInterstitialAd(TestIds.INTERSTITIAL, {
    requestNonPersonalizedAdsOnly: true,
  });

  React.useEffect(() => {
    // Start loading the interstitial straight away
    load();
  }, [load]);

  return <ads.Provider value={adOptions}>{children}</ads.Provider>;
};

export default AdsGrapper;
