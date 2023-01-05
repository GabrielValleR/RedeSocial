import { TextInput, TextInputProps, View, ViewProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import theme from '~/styles/theme';

export const Container = styled.ScrollView`
    background: ${theme.colors.white};
    padding: ${RFValue(20)}px;
`;

export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: ${RFValue(10)}px;
`;

export const Form = styled.View`
    width: 100%;
`;

export const BackButton = styled.TouchableOpacity.attrs({
    hitSlop: {
        top: 20,
        bottom: 20,
        left: 20,
        right: 20,
    },
})``;

export const BackButtonIcon = styled.Image.attrs({
    resizeMode: 'contain',
})`
    width: ${RFValue(16)}px;
    height: ${RFValue(16)}px;
    padding-bottom: ${RFValue(16)}px;
`;

export const ContainerImage = styled.View`
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    padding-left: ${RFValue(107)}px;
    padding-right: ${RFValue(45)}px;
    margin-top: ${RFValue(35)}px;
`;

export const ContainerProfileImage = styled.View`
    padding-bottom: ${RFValue(18)}px;
    padding-right: ${RFValue(20)}px;
`;

export const ImageProfile = styled.Image`
    width: ${RFValue(72)}px;
    height: ${RFValue(89.43)}px;
    border-radius: ${RFValue(10)}px;
`;

export const ContainerHeaderText = styled.View`
    margin-left: ${RFValue(20)}px;
    padding-top: ${RFValue(4)}px;
`;

export const HeaderText = styled.Text`
    font-family: ${theme.fonts.inter.medium};
    font-size: ${RFValue(16)}px;
    line-height: ${RFValue(16)}px;
    color: ${theme.colors.black};
`;

export const LabelWarningContainer = styled.View`
    flex: 1;
    margin-top: ${RFValue(70)}px;
    padding-left: ${RFValue(16)}px;
    padding-right: ${RFValue(16)}px;
`;

export const LabelWarningText = styled.Text`
    font-family: ${theme.fonts.inter.regular};
    font-size: ${RFValue(14)}px;
    color: #423f557d;
    text-align: center;
`;

export const LabelReportProblemContainer = styled.View`
    flex: 1;
    margin-top: ${RFValue(35)}px;
`;

export const LabelReportProblemText = styled.Text`
    font-family: ${theme.fonts.inter.medium};
    font-size: ${RFValue(12.9)}px;
    color: #423f55;
`;

export const ContainerAccessibility = styled.View`
    justify-content: center;
    margin-top: ${RFValue(14)}px;
`;

export const ContainerTextInputEdit = styled.View`
    flex: 0.5;
    margin-top: ${RFValue(3)}px;
`;

export const Label = styled.Text`
    font-family: ${theme.fonts.inter.medium};
    font-size: ${RFValue(16)}px;
    line-height: ${RFValue(16)}px;
    color: ${theme.colors.gray[300]};
`;

export const ContainerButton = styled.View`
    margin-top: ${RFValue(60)}px;
    flex: 1;
`;

export const ErrorLabel = styled.Text`
    font-family: ${theme.fonts.roboto.regular};
    font-size: ${RFValue(13)}px;
    line-height: ${RFValue(15)}px;
    color: ${theme.colors.red[500]};
    align-self: flex-start;
    margin-top: ${RFValue(3)}px;
`;

export const Input = styled(TextInput).attrs<TextInputProps>({})`
    flex: 1;
    padding: 4px;
    font-family: ${theme.fonts.inter.medium};
    font-size: ${RFValue(16)}px;
    line-height: ${RFValue(19.36)}px;
    color: ${theme.colors.black};
`;

export const BottomLine = styled(View).attrs<ViewProps>({
    placeholderTextColor: theme.colors.black,
    borderBottomColor: '#D1D1D2',
    borderBottomWidth: 1.5,
})``;

export const ContainerInput = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
`;

export const LabelPickerSelect = styled.Text`
    margin-top: ${RFValue(16)}px;
    font-family: ${theme.fonts.inter.medium};
    font-size: ${RFValue(16)}px;
    line-height: ${RFValue(16)}px;
    color: ${theme.colors.gray[300]};
`;

export const ContainerVisibility = styled.View`
    margin-top: ${RFValue(5)}px;
    margin-bottom: ${RFValue(5)}px; ;
`;
