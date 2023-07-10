import React from 'react';
import {useTranslation} from 'react-i18next';
import Modal, {ModalProps} from 'react-native-modal';
import {scale} from 'react-native-size-matters';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {MY_HEIGHT} from '~/constants/common';
import {useKeyboardBottomInset} from '~/hooks/useKeyboardBottomInset';
import {useTheme} from '~/hooks';
import {
  Divider,
  HStack,
  HStackProps,
  Pressable,
  PressableProps,
  Text,
  TextProps,
  VStack,
  VStackProps,
} from '..';

interface Props extends ModalProps {
  _container: VStackProps;
  _title: TextProps;
  _footer: HStackProps;
  _labelCancelContainer: PressableProps;
  _labelCancel: TextProps;
  _labelConfirmContainer: PressableProps;
  _labelConfirm: TextProps;
  hasCloseIcon: boolean;
  onBackdropPress: any;
  title: any;
  message: any;
  labelCancel: any;
  labelConfirm: any;
  onConfirm: any;
}

export const ModalConfirm = (props: Partial<Props>) => {
  const {
    _container,
    _title,
    _footer,
    _labelCancelContainer,
    _labelCancel,
    _labelConfirm,
    _labelConfirmContainer,
    hasCloseIcon,
    onBackdropPress,
    title,
    message,
    labelCancel,
    labelConfirm,
    onConfirm,
    ...rest
  } = props;
  const {t} = useTranslation();
  const {colors} = useTheme();

  const {bottom, keyboardIsShow} = useKeyboardBottomInset();

  return (
    <Modal useNativeDriver={true} onBackdropPress={onBackdropPress} {...rest}>
      <VStack
        backgroundColor={colors.white}
        borderRadius={scale(8)}
        maxHeight={keyboardIsShow ? MY_HEIGHT - bottom - 32 : 0.8 * MY_HEIGHT}
        {..._container}>
        <HStack padding={scale(16)} paddingRight={0} alignItems="center">
          <VStack flex={1}>
            <Text _props={{numberOfLines: 1}} bold fontSize={scale(18)}>
              {title || t('common.notification')}
            </Text>
          </VStack>
          {!hasCloseIcon && (
            <Pressable paddingHorizontal={scale(16)} onPress={onBackdropPress}>
              <IonIcons name="close" color={colors.black} size={25} />
            </Pressable>
          )}
        </HStack>
        <VStack padding={scale(16)} paddingTop={0} minHeight={scale(60)}>
          <Text {..._title}>{message || ''}</Text>
        </VStack>
        <Divider />
        <HStack {..._footer}>
          <Pressable
            flex={1}
            height={scale(50)}
            justifyContent="center"
            alignItems="center"
            {..._labelCancelContainer}
            onPress={onBackdropPress}>
            <Text _props={{numberOfLines: 1}} {..._labelCancel}>
              {labelCancel || t('common.cancel')}
            </Text>
          </Pressable>
          <Divider vertical />
          <Pressable
            flex={1}
            height={scale(50)}
            justifyContent="center"
            alignItems="center"
            {..._labelConfirmContainer}
            onPress={() => {
              onBackdropPress();
              setTimeout(() => {
                onConfirm?.();
              }, 200);
            }}>
            <Text _props={{numberOfLines: 1}} {..._labelConfirm}>
              {labelConfirm || t('common.ok')}
            </Text>
          </Pressable>
        </HStack>
      </VStack>
    </Modal>
  );
};
