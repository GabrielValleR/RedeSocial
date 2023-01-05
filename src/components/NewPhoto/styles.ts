import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import theme from '~/styles/theme'

export const NewPhotosView = styled.View`
width: ${RFValue(229)}px;
align-items: center;
justify-content: center;
`
export const NewPhotoView = styled.View`
width: ${RFValue(119)}px;
height: ${RFValue(85)}px;
border: 3px solid #E5DDDD;
border-style:dashed;
border-radius:${RFValue(8)}px;
align-items: center;
justify-content: space-around;
margin: 20px;
flex-direction: row;
`

export const Newphoto = styled.Image`
width: ${RFValue(52)}px;
height: ${RFValue(64.59)}px;
border-radius: 10px;
`
export const ClosePhoto = styled.TouchableOpacity`

`
export const Image = styled.Image`

`
