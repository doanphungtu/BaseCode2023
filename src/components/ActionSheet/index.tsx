import React from 'react';
import {useTranslation} from 'react-i18next';
import Modal, {ModalProps} from 'react-native-modal';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {scale} from 'react-native-size-matters';
import {useTheme} from '~/hooks';
import {HStack, Pressable, Text, VStack} from '..';

interface Props extends ModalProps {
  children: any;
  onBackdropPress: any;
  title: any;
  renderLeftHeader: any;
  renderRightHeader: any;
  leftLabelHeader: any;
  rightLabelHeader: any;
  onClickLeftHeader: any;
  onClickRightHeader: any;
  labelCancel: any;
  labelConfirm: any;
}

export const ActionSheet = (props: Partial<Props>) => {
  const {
    children,
    onBackdropPress,
    title,
    renderLeftHeader,
    renderRightHeader,
    leftLabelHeader,
    rightLabelHeader,
    onClickLeftHeader,
    onClickRightHeader,
    ...rest
  } = props;
  const {t} = useTranslation();
  const {bottom} = useSafeAreaInsets();
  const {colors} = useTheme();

  return (
    <Modal
      useNativeDriver={true}
      onBackdropPress={onBackdropPress}
      style={{justifyContent: 'flex-end', margin: 0}}
      {...rest}>
      <VStack
        backgroundColor={colors.white}
        maxHeight="90%"
        paddingBottom={bottom}>
        <HStack height={50}>
          {!!renderLeftHeader && renderLeftHeader?.()}
          {!renderLeftHeader && !!leftLabelHeader && (
            <Pressable
              onPress={() => {
                onBackdropPress?.();
                setTimeout(() => {
                  onClickLeftHeader?.();
                }, 200);
              }}>
              <Text color={colors.primary[10]}>
                {leftLabelHeader || t('common.cancel')}
              </Text>
            </Pressable>
          )}
          <VStack flex={1}>
            <Text
              _props={{numberOfLines: 1}}
              fontSize={scale(18)}
              medium
              alignSelf="center">
              {title || t('common.notification')}
            </Text>
          </VStack>
          {!!renderRightHeader && renderRightHeader?.()}
          {!renderRightHeader && !!rightLabelHeader && (
            <Pressable
              onPress={() => {
                onBackdropPress?.();
                setTimeout(() => {
                  onClickRightHeader?.();
                }, 200);
              }}>
              <Text color={colors.primary[10]}>
                {rightLabelHeader || t('common.ok')}
              </Text>
            </Pressable>
          )}
        </HStack>
        {children}
        {/* <HStack>
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
        </HStack> */}
      </VStack>
    </Modal>
  );
};
