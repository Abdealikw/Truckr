import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import RootScreen from './src/containers/Root/RootScreen';
import SplashScreen from './src/containers/SplashScreen/SplashScreen';
import rootReducer from './src/redux/reducers';
import rootSaga from './src/redux/sagas';
import configureStore from './src/store/configureStore';

const { store, persistor } = configureStore(rootReducer, rootSaga);

// eslint-disable-next-line no-console
console.disableYellowBox = true; // Debug Only - yellow box

// react-native-paper theme configuration
const DefaultTheme = {};
const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'tomato',
        accent: 'yellow',
    },
};

const App = () => (
    <Provider store={store}>
        <PaperProvider theme={theme}>
            {/**
             *
             * PersisteGate atrasa o rendering do app ateh que o estado salvo na AsyncStorage seja salvo no Redux
             * prop `loading` pode ser null ou qualquer outro component React
             * por exemplo loading={<SplashScreen />}
             * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
             */}
            <PersistGate loading={<SplashScreen />} persistor={persistor}>
                <RootScreen />
            </PersistGate>
        </PaperProvider>
    </Provider>
);

export default App;
