import { useIsFocused } from '@react-navigation/native';
import DefaultScreen from '../components/DefultScreen';
import { TabContext } from '../context';
import { useContext } from 'react';

const ChatsScreen = () => {
    const [,setTab] = useContext(TabContext)
    const isFocused = useIsFocused()
    if(isFocused) setTab('Chats')

    return <DefaultScreen content='Chats Screen'/>
}
export default ChatsScreen