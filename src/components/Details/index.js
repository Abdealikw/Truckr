import React from 'react';
import {
    Container,
    TypeTitle,
    TypeDescription,
    TypeImage,
    RequestButton,
    RequestButtonText,
} from './styles';

import truckImage from '../../assets/truck.jpg';

const Details = () => (
    <Container>
        <TypeTitle>Popular</TypeTitle>
        <TypeDescription>Cheap day-to-day transport</TypeDescription>

        <TypeImage source={truckImage} resizeMode="contain" />
        <TypeTitle>Truck</TypeTitle>
        <TypeDescription>AED 100</TypeDescription>

        <RequestButton onPress={() => {}}>
            <RequestButtonText>Book now</RequestButtonText>
        </RequestButton>
    </Container>
);

export default Details;
