import {debounce} from 'lodash';
import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

interface Props extends TouchableOpacityProps {
  onPress?: any;
}

const Pressable = (props: Props) => {
  const {children, onPress, ...rest} = props;

  const debounced = debounce(
    () => {
      onPress?.();
    },
    1000,
    {leading: true, trailing: false},
  );

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={debounced} {...rest}>
      {children}
    </TouchableOpacity>
  );
};

export default Pressable;
