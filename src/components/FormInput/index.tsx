import React, {useState} from 'react';
import {Controller} from 'react-hook-form';
import {StyleSheet, TextInput, TextInputProps, ViewStyle} from 'react-native';
import {scale} from 'react-native-size-matters';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {useTheme} from '~/hooks/useTheme';
import {fonts} from '~/themes';
import HStack from '../Layout/HStack';
import VStack from '../Layout/VStack';
import Pressable from '../Pressable';
import Text from '../Text';

interface Props extends TextInputProps {
  _container?: ViewStyle;
  isPassword?: boolean;
  name?: any;
  control?: any;
  errorMessage?: any;
  renderLeftElement?: any;
  renderRightElement?: any;
}

const FormInput = ({
  _container,
  isPassword,
  name,
  control,
  errorMessage,
  renderLeftElement,
  renderRightElement,
  ...props
}: Props) => {
  const [showText, setShowText] = useState(isPassword ? false : true);
  const {colors} = useTheme();

  if (control) {
    return (
      <VStack>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <HStack
              width="100%"
              height={scale(45)}
              borderRadius={scale(8)}
              backgroundColor={colors.gray[20]}
              borderColor={colors.red[10]}
              borderWidth={!!errorMessage ? 1 : 0}
              {..._container}>
              {renderLeftElement && renderLeftElement?.()}
              <TextInput
                style={[
                  styles.input,
                  {
                    color: colors.text[10],
                  },
                ]}
                secureTextEntry={!showText}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholderTextColor={colors.text[20]}
                {...props}
              />
              {!!renderRightElement && renderRightElement()}
              {!renderRightElement && !!isPassword && (
                <Pressable
                  onPress={() => setShowText(!showText)}
                  style={styles.btnEye}>
                  <IonIcons
                    name={!showText ? 'eye' : 'eye-off'}
                    size={20}
                    color={'gray'}
                  />
                </Pressable>
              )}
            </HStack>
          )}
          name={name}
        />
        {!!errorMessage && (
          <>
            <VStack height={scale(4)} />
            <Text color={colors.red[10]}>{errorMessage}</Text>
          </>
        )}
      </VStack>
    );
  }
  return (
    <HStack
      width="100%"
      height={scale(45)}
      borderRadius={scale(8)}
      backgroundColor={colors.gray[20]}
      {..._container}>
      {renderLeftElement && renderLeftElement?.()}
      <TextInput
        style={[
          styles.input,
          {
            color: colors.text[10],
          },
        ]}
        secureTextEntry={!showText}
        {...props}
      />
      {!!renderRightElement && renderRightElement()}
      {!renderRightElement && !!isPassword && (
        <Pressable onPress={() => setShowText(!showText)} style={styles.btnEye}>
          <IonIcons
            name={!showText ? 'eye' : 'eye-off'}
            size={20}
            color={'gray'}
          />
        </Pressable>
      )}
    </HStack>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: scale(45),
    borderRadius: scale(8),
  },
  input: {
    flex: 1,
    fontSize: 14,
    fontFamily: fonts.roboto.normal,
    paddingHorizontal: scale(16),
    borderRadius: scale(8),
  },
  btnEye: {
    paddingRight: scale(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FormInput;
