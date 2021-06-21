import React, { Component } from "react";
import { Dimensions, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Text from "../../components/CustomText";
import CustomStatusBar from "../../components/CustomStatusBar";
import AppHeader from "../../appComponents/AppHeader";
import MapView, { Marker } from "react-native-maps";
import FakeData from "../../helper/FakeData";
import FastImage from "react-native-fast-image";
import LocalAssets from "../../constants/LocalAssets";
import { maps } from "../../../assets";
import colors from "../../constants/colors";
import SearchComponent from "./SearchComponent";

//end of IMPORT's

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      show: false,
      markers: [],
    }; //end of INITIALIZING STATE's
  } //end of CONSTRUCTOR

  componentDidMount = async () => {
    this.load();
  }; //end of COMPONENT_DID_MOUNT

  componentWillUnmount = async () => {}; //end of COMPONENT_WILL_UNMOUNT

  load = () => {
    const markers = FakeData.userDataWithLocation();
    markers.map((e) => {
      e.region.latitudeDelta = LATITUDE_DELTA;
      e.region.longitudeDelta = LONGITUDE_DELTA;
      return e;
    });
    this.setState({
      markers,
    });
  }; //end of LOAD FUNCTION

  backPress = () => {
    this.props.navigation.pop() && this.props.navigation.goBack();
  }; //end of BACK PRESS

  render = () => {
    const { region, markers, show } = this.state;
    return (
      <View style={styles.primaryContainer}>
        <CustomStatusBar />
        <AppHeader />

        {!show ? (
          <View style={styles.searchComponentContainer}>
            <SearchComponent navigation={this.props.navigation} />
          </View>
        ) : null}
        {show ? (
          <View style={{ flex: 1 }}>
            <View>
              <SearchComponent style={[styles.searchComponentContainer]} />
            </View>
            <MapView
              style={styles.mapView}
              zoomControlEnabled
              zoomEnabled
              zoomTapEnabled
              initialRegion={region}
            >
              {markers.map((marker, index) => (
                <Marker
                  key={index}
                  coordinate={marker.region}
                  title={marker.name}
                >
                  <View>
                    <FastImage
                      source={LocalAssets.ICON.mapMarkerHollow}
                      style={styles.mapMarmarkerHollow}
                      resizeMode={FastImage.resizeMode.contain}
                      tintColor={colors.primary}
                    />
                    <FastImage
                      source={marker.image}
                      style={styles.mapMarkerImage}
                      resizeMode={FastImage.resizeMode.contain}
                    />
                  </View>
                </Marker>
              ))}
            </MapView>
            <TouchableOpacity
              onPress={() => this.setState({ show: !show })}
              style={{
                position: "absolute",
                bottom: 0,
                alignItems: "flex-end",
                width: "95%",
                marginBottom: 5,
              }}
            >
              <Image
                source={maps}
                style={{
                  height: 30,
                  width: 30,
                }}
                //   resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => this.setState({ show: !show })}
            style={{
              position: "absolute",
              bottom: 0,
              alignItems: "flex-end",
              width: "95%",
              marginBottom: 5,
            }}
          >
            <Image
              source={maps}
              style={{
                height: 30,
                width: 30,
              }}
              //   resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    );
  }; //end of RENDER
} //end of CLASSS index
