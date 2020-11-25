import React from 'react'
import HeroSelect from '../heroselect/HeroSelect'
import {useEffect} from 'react'

function ChooseYourHero() {

    useEffect(() => {
        window.scrollTo(0, 0)
      });

    return (
        <div>
            <HeroSelect />
        </div>
    )
}

export default ChooseYourHero;