import React from 'react';
import LoadingView from './LoadingView';
import {ViewProps} from 'react-native';

interface Props extends ViewProps {
  isLoading: boolean;
}

const LoadingLayout = (props: Props) => {
  const {isLoading, ...rest} = props;
  if (isLoading) {
    return <LoadingView {...rest} />;
  }
  return props.children;
};

export default LoadingLayout;
