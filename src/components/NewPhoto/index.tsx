import React from "react";

import iconCloseRed from '~/assets/icons/closeRed.png'
import {
    NewPhotoView,
    Newphoto,
    ClosePhoto,
    Image,
} from './styles'

const NewPhoto: React.FC = ({data, Delete}) => {
    return (
        <NewPhotoView >
            <Newphoto source={data.photo} />
            <ClosePhoto onPress={Delete}>
                <Image source={iconCloseRed} />
            </ClosePhoto>
        </NewPhotoView>
    )
}

export default NewPhoto;
