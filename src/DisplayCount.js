import { useRecoilValue } from 'recoil';
import { numberOfClicksSelector } from './selectors/numberOfClicksSelector';

export const DisplayCount = () => {
    const clicksData = useRecoilValue(numberOfClicksSelector);
    return (
        <h2>Number of Clicks: {clicksData}</h2>
    );
};