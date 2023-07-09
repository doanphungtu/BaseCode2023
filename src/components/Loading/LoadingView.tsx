import React from 'react';
import {ActivityIndicator, StyleSheet, View, ViewProps} from 'react-native';

const LoadingView = (props: ViewProps) => {
  const {style, ...rest} = props;
  return (
    <View style={[styles.container, style]} {...rest}>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default LoadingView;
