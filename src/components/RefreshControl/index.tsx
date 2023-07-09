import React from 'react';
import {RefreshControl, RefreshControlProps} from 'react-native';
import {useTheme} from '~/hooks/useTheme';

const RefreshControlComponent = (props: RefreshControlProps) => {
  const {colors} = useTheme();
  return <RefreshControl tintColor={colors.primary[10]} {...props} />;
};

export default RefreshControlComponent;
