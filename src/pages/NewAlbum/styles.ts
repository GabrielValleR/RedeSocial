import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import theme from '~/styles/theme'
import { StyleSheet } from 'react-native'

export const Container = styled.SafeAreaView`
flex:1;
background-color: ${theme.colors.white};
padding: ${RFValue(10)}px;
`
export const ViewHeader = styled.View`
width: 100%;
align-items: center;
flex-direction: row;
justify-content: space-between;

`
export const Next = styled.TouchableOpacity`
margin-right: ${RFValue(16)}px;

`
export const TextNext = styled.Text`
font-size: ${RFValue(16)}px;
font-family: ${theme.fonts.inter.medium};
color: ${theme.colors.purple[800]};
`

export const Content = styled.View`
flex:1;
align-items:center;
justify-content: center;

`
export const AddFotoView = styled.View`
width: ${RFValue(268)}px;
align-items: center;
justify-content: center;
margin-bottom: ${RFValue(25)}px;
`
export const Title = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${theme.fonts.inter.medium};
  text-align: center;
  margin-bottom: 15px;
`;

export const AddPhoto = styled.TouchableOpacity`
width: ${RFValue(229)}px;
height: ${RFValue(118)}px;;
border: 3px solid #E5DDDD;
border-style:dashed;
border-radius:${RFValue(8)}px;
align-items: center;
justify-content: center;
`

export const NewPhotosView = styled.View`
width: ${RFValue(229)}px;
align-items: center;
justify-content: center;
`
export const styles = StyleSheet.create({
    FlatStyles: {
        width: 229,
        alignItems: 'center',
        justifyContent: 'center',
    }

    })

export const NewPhoto = styled.Image`
width: ${RFValue(52)} px;
height: ${RFValue(64.59)} px;
border-radius: 10px;
`
export const ClosePhoto = styled.TouchableOpacity`

    `
export const Image = styled.Image`

    `
export const View = styled.View`
width: ${RFValue(268)} px;
flex-direction: row;
align-items: center;
justify-content: center;

`

