import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, Text, View} from 'react-native';
import Modal, {ModalProps} from 'react-native-modal';
import {scale} from 'react-native-size-matters';
import {MY_HEIGHT} from '~/constants/common';
import {useKeyboardBottomInset} from '~/hooks/useKeyboardBottomInset';
import {useTheme} from '~/hooks/useTheme';
import {commonStyles} from '~/utils/styles';
import Divider from '../Divider';
import HStack from '../Layout/HStack';
import Pressable from '../Pressable';

interface Props extends ModalProps {
  onBackdropPress: any;
  title: any;
  message: any;
  labelCancel: any;
  labelConfirm: any;
}

const ModalConfirm = (props: Partial<Props>) => {
  const {onBackdropPress, title, message, labelCancel, labelConfirm, ...rest} =
    props;
  const {t} = useTranslation();
  const {colors} = useTheme();

  const {bottom, keyboardIsShow} = useKeyboardBottomInset();

  return (
    <Modal useNativeDriver={true} onBackdropPress={onBackdropPress} {...rest}>
      <View
        style={[
          styles.container,
          {
            maxHeight: keyboardIsShow
              ? MY_HEIGHT - bottom - 32
              : 0.8 * MY_HEIGHT,
          },
        ]}>
        <View style={[commonStyles.row, styles.viewHeader]}>
          <View style={{flex: 1}}>
            <Text
              numberOfLines={1}
              style={{fontWeight: 'bold', fontSize: scale(18)}}>
              {title || t('common.notification')}
            </Text>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.messageStyle}>{message || ''}</Text>
        </View>
        <Divider />
        <HStack>
          <Pressable style={styles.button} onPress={onBackdropPress}>
            <Text numberOfLines={1} style={[styles.labelCancel]}>
              {labelCancel || t('common.cancel')}
            </Text>
          </Pressable>
          <Divider vertical />
          <Pressable style={styles.button} onPress={onBackdropPress}>
            <Text numberOfLines={1} style={[styles.labelConfirm]}>
              {labelConfirm || t('common.ok')}
            </Text>
          </Pressable>
        </HStack>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: scale(8),
  },
  viewHeader: {padding: 16, paddingRight: 0},
  content: {
    padding: scale(16),
    paddingTop: 0,
    minHeight: scale(60),
  },
  messageStyle: {},
  button: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelCancel: {},
  labelConfirm: {},
});

export default ModalConfirm;
