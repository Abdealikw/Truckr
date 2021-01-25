import PropTypes from 'prop-types';
import React from 'react';
import MapViewDirections from 'react-native-maps-directions';
import { MAPS_API_KEY } from '../../config';

const Directions = ({ destination, origin, onReady }) => (
    <MapViewDirections
        origin={origin}
        destination={destination}
        onReady={onReady}
        apikey={MAPS_API_KEY}
        strokeWidth={4}
        strokeColor="#002171"
    />
);

Directions.propTypes = {
    destination: PropTypes.shape({
        latitude: PropTypes.number,
        longitude: PropTypes.number,
    }),
    origin: PropTypes.object,
    onReady: PropTypes.func,
};

Directions.defaultProps = {
    destination: {
        latitude: 0,
        longitude: 0,
    },
    origin: {},
    onReady: () => undefined,
};

export default Directions;
