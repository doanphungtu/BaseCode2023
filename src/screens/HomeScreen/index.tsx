import React, {useCallback, useMemo, useState} from 'react';
import {FlatList} from 'react-native';
import {scale} from 'react-native-size-matters';
import IonIcons from 'react-native-vector-icons/Ionicons';
import ActionSheet from '~/components/ActionSheet';
import MainLayout from '~/components/Layout/MainLayout';
import VStack from '~/components/Layout/VStack';
import ModalConfirm from '~/components/Modal/ModalConfirm';
import Pressable from '~/components/Pressable';
import Text from '~/components/Text';
import {ANIMATED_FLATLIST_SCREEN, LOGIN_SCREEN} from '~/constants/ScreenName';
import {navigate} from '~/services/navigationServices';

export const HomeScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [showActionSheet, setShowActionSheet] = useState(false);

  const DATA = useMemo(() => {
    return [
      {
        name: 'Login',
        onPress: () => {
          navigate(LOGIN_SCREEN);
        },
      },
      {
        name: 'Modal confirm',
        onPress: () => {
          setShowModal(true);
        },
      },
      {
        name: 'Animated Flatlist',
        onPress: () => {
          navigate(ANIMATED_FLATLIST_SCREEN);
        },
      },
      {
        name: 'ActionSheet',
        onPress: () => {
          setShowActionSheet(true);
        },
      },
    ];
  }, []);

  const renderItem = useCallback(({item}) => {
    return (
      <Pressable onPress={item?.onPress}>
        <VStack height={scale(50)} padding={scale(16)}>
          <Text fontSize={scale(16)}>{item?.name || ''}</Text>
        </VStack>
      </Pressable>
    );
  }, []);

  return (
    <MainLayout>
      <IonIcons name="home" size={30} />
      <FlatList
        data={DATA}
        keyExtractor={(_, index) => String(index)}
        renderItem={renderItem}
      />
      {/* {!!showModal && ( */}
      <ModalConfirm
        isVisible={showModal}
        message={'Modal test confirm nha'}
        onBackdropPress={() => {
          setShowModal(false);
        }}
      />
      {/* )} */}
      <ActionSheet
        isVisible={showActionSheet}
        onBackdropPress={() => {
          setShowActionSheet(false);
        }}
      />
    </MainLayout>
  );
};
