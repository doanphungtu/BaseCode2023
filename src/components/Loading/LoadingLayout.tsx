import React from 'react';
import {LoadingView} from './LoadingView';
import {VStackProps} from '..';

interface Props extends VStackProps {
  isLoading: boolean;
}

export const LoadingLayout = (props: Partial<Props>) => {
  const {isLoading, ...rest} = props;
  if (isLoading) {
    return <LoadingView {...rest} />;
  }
  return props.children;
};
