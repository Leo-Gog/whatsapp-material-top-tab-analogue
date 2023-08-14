import { useContext } from 'react';
import DefaultScreen from '../components/DefultScreen';
import { useIsFocused } from '@react-navigation/native'
import { TabContext } from '../context';

const GroupsScreen = () => {
    const [,setTab] = useContext(TabContext)
    const isFocused = useIsFocused()
    if(isFocused) setTab('Groups')

    return <DefaultScreen content='Groups Screen'/>
}
export default GroupsScreen