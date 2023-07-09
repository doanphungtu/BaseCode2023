import React from 'react';
import {ActivityIndicator, StyleSheet, View, ViewProps} from 'react-native';

interface Props extends ViewProps {
  isLoading: Boolean;
}

const Loading = (props: Props) => {
  const {isLoading, style, ...rest} = props;

  if (!isLoading) {
    return null;
  }
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
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});

export default Loading;
