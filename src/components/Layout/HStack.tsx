import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';

interface Props {
  children: any;
}

const HStack = (props: Props & ViewStyle) => {
  const {children, ...rest} = props;
  return <View style={[styles.container, {...rest}]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default HStack;
