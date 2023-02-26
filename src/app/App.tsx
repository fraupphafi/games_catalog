import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Provider as PaperProvider} from 'react-native-paper';

import {RootNavigator} from '../processes/navigation';
import {ReactQueryProvider} from '../shared/api';

export const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ReactQueryProvider>
        <PaperProvider>
          <RootNavigator />
        </PaperProvider>
      </ReactQueryProvider>
    </>
  );
};
