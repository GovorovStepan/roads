import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'mapbox-gl/dist/mapbox-gl.css';

// const Map = ReactMapboxGl({
//   accessToken:
//     'pk.eyJ1IjoiZ3NwbCIsImEiOiJjbGdpN3JvY20wN2Z1M2pvMDR4YzdsM3EyIn0.pAVCVAzvMdsVV4NuWjkxsA',
// });


const test_geo = {
  type: 'geojson',
  data: {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'LineString',
      coordinates: [
        [-122.483696, 37.833818],
        [-122.483482, 37.833174],
        [-122.483396, 37.8327],
        [-122.483568, 37.832056],
        [-122.48404, 37.831141],
        [-122.48404, 37.830497],
        [-122.483482, 37.82992],
        [-122.483568, 37.829548],
        [-122.48507, 37.829446],
        [-122.4861, 37.828802],
        [-122.486958, 37.82931],
        [-122.487001, 37.830802],
        [-122.487516, 37.831683],
        [-122.488031, 37.832158],
        [-122.488889, 37.832971],
        [-122.489876, 37.832632],
        [-122.490434, 37.832937],
        [-122.49125, 37.832429],
        [-122.491636, 37.832564],
        [-122.492237, 37.833378],
        [-122.493782, 37.833683],
      ],
    },
  },
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

export default function MainMap() {
  return (
    <View style={styles.container}>
      TEST
      {/* <Map
        style='mapbox://styles/mapbox/streets-v12'
        containerStyle={{
          height: '100vh',
          width: '100vw',
        }}
        center={[-122.486052, 37.830348]} // заменить на текущую локацию пользователя
      >
        <Source
          id='source_id'
          tileJsonSource={test_geo}
        />
        <Layer
          type='line'
          id='route'
          sourceId='source_id'
          layout={{
            'line-join': 'round',
            'line-cap': 'round',
          }}
          paint={{
            'line-blur': 2,
            'line-color': '#f00',
            'line-width': 10,
          }}
        >
        </Layer>
      </Map> */}
      <StatusBar style='auto' />
    </View>
  );
}