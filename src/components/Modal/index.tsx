import React from 'react';
import Modal from 'react-native-modal';

import okAnimation from '~/assets/animations/ok.json';
import LottieView from 'lottie-react-native';

import { ModalBody, ModalTitle } from './styles';

interface ModalProps {
  title: string;
  visible: boolean;
  hide: () => void;
  modalVisible: () => void;
}

const ModalComponent: React.FC<ModalProps> = ({ title, visible, hide, modalVisible }) => {
  return(
    <Modal
        backdropColor="#fff"
        isVisible={visible}
        backdropOpacity={0.9}
        onModalHide={hide}
        onBackdropPress={modalVisible}>
        <ModalBody>
          <LottieView
            style={{ width: 146 }}
            source={okAnimation}
            autoPlay
            loop={false}
          />
          <ModalTitle>{title}</ModalTitle>
        </ModalBody>
      </Modal>
  );
}

export default ModalComponent;
