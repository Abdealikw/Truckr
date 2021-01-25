import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import Map from '../../components/Map';
import { MAPS_API_KEY } from '../../config';

Geocoder.init(MAPS_API_KEY);

const Main = () => {
    const regionFrom = (lat, lon, distance) => {
        distance = distance / 2;
        const circumference = 40075;
        const oneDegreeOfLatitudeInMeters = 111.32 * 1000;
        const angularDistance = distance / circumference;

        const latitudeDelta = distance / oneDegreeOfLatitudeInMeters;
        const longitudeDelta = Math.abs(
            Math.atan2(
                Math.sin(angularDistance) * Math.cos(lat),
                Math.cos(angularDistance) - Math.sin(lat) * Math.sin(lat),
            ),
        );

        return {
            latitude: lat,
            longitude: lon,
            latitudeDelta,
            longitudeDelta,
        };
    };

    const [region, setRegion] = useState(regionFrom(25.2048, 55.2708, 500));
    const [destination, setDestination] = useState(null);
    const [location, setLocation] = useState(null);

    useEffect(() => {
        const options = {
            timeout: 20000,
            enableHighAccuracy: true,
        };

        Geolocation.getCurrentPosition(
            async ({ coords: { latitude, longitude } }) => {
                const response = await Geocoder.from({ latitude, longitude });
                const address = response.results[0].formatted_address;
                const shortAddress = address.substring(0, address.indexOf(','));
                setRegion(regionFrom(latitude, longitude, 500));
                setLocation(shortAddress);
            },
            (error) => Alert.alert(error.message),
            options,
        );
    }, []);

    const handleOnLocationSelected = (data, { geometry }) => {
        const {
            location: { lat: latitude, lng: longitude },
        } = geometry;
        setDestination({
            latitude,
            longitude,
            title: data.structured_formatting.main_text,
        });
    };

    const handleOnBackPress = () => {
        setDestination(null);
    };

    return (
        <Map
            region={region}
            destination={destination}
            location={location}
            onPressBackButton={handleOnBackPress}
            onLocationSelected={handleOnLocationSelected}
        />
    );
};

export default Main;
