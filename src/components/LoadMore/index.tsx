import React from 'react';
import {ActivityIndicator, ActivityIndicatorProps} from 'react-native';
import {useTheme} from '~/hooks/useTheme';

const LoadMore = (props: ActivityIndicatorProps) => {
  const {colors} = useTheme();
  return (
    <ActivityIndicator size="small" color={colors.primary[10]} {...props} />
  );
};

export default LoadMore;
