import React from 'react';
import {scale} from 'react-native-size-matters';
import {useTheme} from '~/hooks';
import {Pressable, PressableProps} from '..';

export const Button = (props: Partial<PressableProps>) => {
  const {children, ...rest} = props;
  const {colors} = useTheme();

  return (
    <Pressable
      minHeight={scale(50)}
      padding={scale(16)}
      backgroundColor={colors.primary[10]}
      {...rest}>
      {children}
    </Pressable>
  );
};
