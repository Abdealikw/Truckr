import styled from 'styled-components/native';

export const Container = styled.View`
    background: #fff;
    height: 300px;
    width: 100%;
    position: absolute;
    bottom: 0;
    shadow-color: #000;
    shadow-offset: 0 0;
    shadow-opacity: 0.2;
    shadow-radius: 10;
    elevation: 3;
    border: 1px solid #ddd;
    align-items: center;
    padding: 20px;
`;

export const TypeTitle = styled.Text`
    font-size: 20px;
    color: #002171;
`;

export const TypeDescription = styled.Text`
    font-size: 14px;
    color: #002171;
`;

export const TypeImage = styled.Image`
    height: 80px;
    margin: 10px 0;
`;

export const RequestButton = styled.TouchableOpacity`
    background: #002171;
    justify-content: center;
    align-items: center;
    height: 44px;
    align-self: stretch;
    margin-top: 10px;
`;

export const RequestButtonText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #fff;
`;
