import {useEffect} from 'react'
import CentralCard from '../centralCards/CentralCards'
import Rules from '../Rules/Rules';

function Game() {

    useEffect(() => {
        window.scrollTo(0, 0)
      });

    return (
        <div>
            <CentralCard />
            <Rules />
        </div>
    )
}

export default Game