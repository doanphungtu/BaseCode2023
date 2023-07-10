import React, {useMemo} from 'react';
import {
  TextProps as TextPropsRN,
  Text as TextRN,
  TextStyle,
} from 'react-native';
import {useTheme} from '~/hooks';

export interface TextProps {
  children: any;
  _props: TextPropsRN;
  light: boolean;
  lightItalic: boolean;
  italic: boolean;
  medium: boolean;
  mediumItalic: boolean;
  bold: boolean;
  boldItalic: boolean;
  font: 'roboto';
}

export const Text = (props: Partial<TextProps> & TextStyle) => {
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
    font = 'roboto',
    ...rest
  } = props;

  const {fonts} = useTheme();

  const FontFamily = useMemo(() => {
    if (!!light) {
      return fonts[font].light;
    }
    if (!!lightItalic) {
      return fonts[font].lightItalic;
    }
    if (!!italic) {
      return fonts[font].italic;
    }
    if (!!medium) {
      return fonts[font].medium;
    }
    if (!!mediumItalic) {
      return fonts[font].mediumItalic;
    }
    if (!!bold) {
      return fonts[font].bold;
    }
    if (!!boldItalic) {
      return fonts[font].boldItalic;
    }
    return fonts[font].normal;
  }, [
    bold,
    boldItalic,
    font,
    fonts,
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
