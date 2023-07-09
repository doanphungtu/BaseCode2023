import React from 'react';
import Pressable from '../Pressable';
import {StyleSheet, TouchableOpacityProps} from 'react-native';
import {scale} from 'react-native-size-matters';
import {useTheme} from '~/hooks/useTheme';

const Button = (props: TouchableOpacityProps) => {
  const {children, style, ...rest} = props;
  const {colors} = useTheme();

  return (
    <Pressable
      style={[styles.container, {backgroundColor: colors.primary[10]}, style]}
      {...rest}>
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: scale(50),
    padding: 16,
  },
});

export default Button;
