import { useIsFocused } from '@react-navigation/native';
import DefaultScreen from '../components/DefultScreen';
import { TabContext } from '../context';
import { useContext } from 'react';

const StatusScreen = () => {
    const [,setTab] = useContext(TabContext)
    const isFocused = useIsFocused()
    if(isFocused) setTab('Status')

    return <DefaultScreen content='Status Screen'/>
}
export default StatusScreen