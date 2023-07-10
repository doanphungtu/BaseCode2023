import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {useTheme} from '~/hooks';
import {HStack, HStackProps, Pressable, Text, TextProps, VStack} from '..';

interface Props extends HStackProps {
  title: string;
  _titleStyle: TextProps;
  hasLeftIcon: Boolean;
  customLeftIcon: any;
  customRightIcon: any;
  onPressBackIcon: any;
}

export const Header = (props: Partial<Props>) => {
  const {
    title,
    _titleStyle,
    hasLeftIcon = true,
    customLeftIcon,
    customRightIcon,
    onPressBackIcon,
    ...rest
  } = props;
  const navigation = useNavigation();
  const {colors} = useTheme();

  const getLeftIcon = () => {
    if (customLeftIcon) {
      return customLeftIcon?.();
    }
    if (!hasLeftIcon && !customLeftIcon) {
      return <VStack width={scale(60)} height={scale(40)} />;
    }
    return (
      <Pressable
        paddingHorizontal={scale(16)}
        paddingVertical={scale(4)}
        onPress={() => {
          if (!!onPressBackIcon) {
            onPressBackIcon?.();
          } else {
            navigation.goBack();
          }
        }}>
        <IonIcons
          name="chevron-back-outline"
          size={scale(22)}
          color={colors.text[10]}
        />
      </Pressable>
    );
  };

  const getRightIcon = () => {
    if (customRightIcon) {
      return customRightIcon?.();
    }
    return <VStack width={scale(60)} height={scale(40)} />;
  };

  return (
    <HStack alignItems="center" minHeight={scale(50)} {...rest}>
      {getLeftIcon()}
      <VStack flex={1} alignItems="center">
        {!!title && (
          <Text
            fontSize={scale(18)}
            medium
            color={colors.text[10]}
            {..._titleStyle}>
            {title}
          </Text>
        )}
      </VStack>
      {getRightIcon()}
    </HStack>
  );
};
