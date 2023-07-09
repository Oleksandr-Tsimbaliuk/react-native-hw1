import React, { useState, useEffect } from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

const MapScreen = () => {
  const {
    params: {
      params: { location },
    },
  } = useRoute();
  const [photoLocation, setPhotoLocation] = useState(
    location ? location : null
  );

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("У доступі до місцезнаходження відмовлено");
      }

      let location = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setPhotoLocation(coords);
    })();
  }, []);

  return (
    <View style={styles.containerFullView}>
      <MapView
        style={styles.mapStyles}
        region={{
          ...photoLocation,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
      >
        {photoLocation && (
          <Marker
            title="Локація фотографії"
            coordinate={photoLocation}
            description="Локація"
          />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  containerFullView: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyles: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default MapScreen;
