import { transform } from '@babel/core';
import React, { useMemo, useRef } from 'react';
import { Dimensions } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { RFValue } from 'react-native-responsive-fontsize';
import Svg, { Line } from 'react-native-svg';

const WIDTH = Dimensions.get('window').width - 80;
const KNOBSIZE = 20;
import {
  Container,
  Track,
  SVGContainer,
} from './styles';

interface ISlider {
  minimum: number;
  maximum: number;
  onChange?: () => void;
}

const usePanGesture = () => {
  const tx = useRef(new Animated.Value(0)).current;
  const onGesture = useMemo(() => {
    return Animated.event([
      {
        nativeEvent: ({ translationX: x, state}) => Animated.set(tx, x),
      },
    ]);
  },[tx]);
  const sc = useRef(new Animated.Value(1)).current;
  return {tx, sc, onGesture}
}

const KnobComponent = () => {
  const {tx, onGesture} = usePanGesture();
  return(
    <PanGestureHandler
      onGestureEvent={onGesture}
      onHandlerStateChange={onGesture}
      hitSlop={{
        top: 10,
        bottom: 10,
        left: 10,
        right: 10,
      }}
    >
      <Animated.View
        style={[
          {
            height: KNOBSIZE,
            width: KNOBSIZE,
            borderRadius: KNOBSIZE / 2,
            backgroundColor: '#7879F1',
            marginTop: RFValue(-16),
            marginLeft: RFValue(220),

          },
          {
            transform: [
              {
                translateX: tx,
              },
              {
                rotate: '45deg',
              }
            ]
          }
        ]}
      />
    </PanGestureHandler>
  )
}

const Slider: React.FC<ISlider> = () => {
  return(
    <Container>
      <Track />
      <SVGContainer>
        <Svg height='16' width={WIDTH}>
          <Line
            stroke="#A5A6F6"
            strokeWidth={8}
            x1={4}
            y1={8}
            x2={100}
            y2={8}
            strokeLinecap="round"
          />
        </Svg>
      </SVGContainer>
      <KnobComponent />
    </Container>
  );
}

export default Slider;
