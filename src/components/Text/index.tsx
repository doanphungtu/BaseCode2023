import React, {useMemo} from 'react';
import {TextProps, Text as TextRN, TextStyle} from 'react-native';
import {useTheme} from '~/hooks/useTheme';

interface Props {
  children: any;
  _props: TextProps;
  light: boolean;
  lightItalic: boolean;
  italic: boolean;
  medium: boolean;
  mediumItalic: boolean;
  bold: boolean;
  boldItalic: boolean;
}

const Text = (props: Partial<Props> & TextStyle) => {
  const {
    children,
    _props,
    light,
    lightItalic,
    italic,
    medium,
    mediumItalic,
    bold,
    boldItalic,
    ...rest
  } = props;

  const {fonts} = useTheme();

  const FontFamily = useMemo(() => {
    if (!!light) {
      return fonts.roboto.light;
    }
    if (!!lightItalic) {
      return fonts.roboto.lightItalic;
    }
    if (!!italic) {
      return fonts.roboto.italic;
    }
    if (!!medium) {
      return fonts.roboto.medium;
    }
    if (!!mediumItalic) {
      return fonts.roboto.mediumItalic;
    }
    if (!!bold) {
      return fonts.roboto.bold;
    }
    if (!!boldItalic) {
      return fonts.roboto.boldItalic;
    }
    return fonts.roboto.normal;
  }, [
    bold,
    boldItalic,
    fonts.roboto.bold,
    fonts.roboto.boldItalic,
    fonts.roboto.italic,
    fonts.roboto.light,
    fonts.roboto.lightItalic,
    fonts.roboto.medium,
    fonts.roboto.mediumItalic,
    fonts.roboto.normal,
    italic,
    light,
    lightItalic,
    medium,
    mediumItalic,
  ]);

  return (
    <TextRN {..._props} style={[{fontFamily: FontFamily}, {...rest}]}>
      {children}
    </TextRN>
  );
};

export default Text;
