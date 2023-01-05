import React, {useState} from 'react'
import closeIcon from '~/assets/icons/close.png';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { RootStackParamList } from '~/routes/types';
import iconPlus from '~/assets/icons/plus+.png'
import {
    Container,
    ViewHeader,
    Next,
    TextNext,
    Content,
    AddFotoView,
    Title,
    AddPhoto,
    Image,


} from './styles'
import Header from '~/components/Header';
import Newphoto from '~/components/NewPhoto';
import { FlatList } from 'react-native';
import { PHOTOS } from '~/styles/Photos';

const NewAlbum: React.FC = () => {
    const { goBack } = useNavigation<NavigationProp<RootStackParamList>>();
    const [photo, setPhoto] = useState(PHOTOS)
    const deletePhoto = (id) => {
        let remove = photo.filter(item=> item.id !== id)
        setPhoto(remove);
    }
    return (
        <Container>
            <ViewHeader>
                <Header title="Novo Click" icon={closeIcon} action={() => goBack()} />
                <Next>
                    <TextNext>Avançar</TextNext>
                </Next>
            </ViewHeader>

            <Content>
                <AddFotoView>
                    <Title>
                        Adicione fotos do album
                    </Title>
                    <AddPhoto>
                        <Image source={iconPlus} />
                    </AddPhoto>
                </AddFotoView>

                <FlatList
                    data={photo}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <Newphoto
                            data={item}
                            Delete={() => deletePhoto(item.id) }
                        />
                    )}
                    numColumns={2}
                />
            </Content>
        </Container>
    )
}
export default NewAlbum;

