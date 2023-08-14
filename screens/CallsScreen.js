import { useIsFocused } from '@react-navigation/native';
import DefaultScreen from '../components/DefultScreen';
import { TabContext } from '../context';
import { useContext } from 'react';

const CallsScreen = () => {
    const [,setTab] = useContext(TabContext)
    const isFocused = useIsFocused()
    if(isFocused) setTab('Calls')

    return <DefaultScreen content='Calls Screen'/>
}
export default CallsScreen