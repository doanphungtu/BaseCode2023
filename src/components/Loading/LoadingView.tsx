import React from 'react';
import {ActivityIndicator} from 'react-native';
import {useTheme} from '~/hooks';
import {VStack, VStackProps} from '..';

export const LoadingView = (props: VStackProps) => {
  const {colors} = useTheme();
  return (
    <VStack
      flex={1}
      justifyContent="center"
      alignItems="center"
      backgroundColor={colors.white}
      {...props}>
      <ActivityIndicator size="large" color="white" />
    </VStack>
  );
};
