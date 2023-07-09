import {useNavigation} from '@react-navigation/native';
import React, {memo} from 'react';
import {StyleProp, StyleSheet, Text, TextStyle, ViewStyle} from 'react-native';
import {scale} from 'react-native-size-matters';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {useTheme} from '~/hooks/useTheme';
import {fonts} from '~/themes';
import HStack from '../Layout/HStack';
import VStack from '../Layout/VStack';
import Pressable from '../Pressable';

interface Props {
  title: string;
  _titleStyle: StyleProp<TextStyle>;
  hasLeftIcon: Boolean;
  customLeftIcon: any;
  customRightIcon: any;
  onPressBackIcon: any;
}

const HeaderComponent = (props: Partial<Props> & ViewStyle) => {
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
        style={styles.backIcon}
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
          <Text style={[styles.titleStyle, {color: 'black'}, _titleStyle]}>
            {title}
          </Text>
        )}
      </VStack>
      {getRightIcon()}
    </HStack>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: scale(18),
    fontFamily: fonts.roboto.medium,
  },
  backIcon: {
    paddingHorizontal: scale(16),
    paddingVertical: scale(4),
  },
});

export default memo(HeaderComponent);
