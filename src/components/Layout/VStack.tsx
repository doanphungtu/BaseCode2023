import React from 'react';
import {StyleSheet, View, ViewProps, ViewStyle} from 'react-native';

type Props = {
  children: any;
  _props: ViewProps;
};

const VStack = (props: Partial<Props> & ViewStyle) => {
  const {children, _props, ...rest} = props;
  return (
    <View {..._props} style={[styles.container, {...rest}]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
});

export default VStack;
