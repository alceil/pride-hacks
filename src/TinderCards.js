import {useState,React} from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCard.css'
const TinderCards = () => {
    const [people,setPeople]=useState([
        {
            name:'Steve jobs',
            url:'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg'
        },
        {
            name:'Bill gates',
            url:'https://media.npr.org/assets/img/2021/05/16/ap21033693362332_wide-0a912c70752c3fb3ec2778ff4ba7c823dd7cf987-s800-c85.jpg'
        }
    ]);


    useEffect(()=>{
        

    },[]);
    return (
        <div>
<div className="tinderCards__cardContainer">



            {people.map(person=>
                (
<TinderCard
className="swipe"
key={person.name}
preventSwipe={['up','down']}>
    <div
    style={
        {
            backgroundImage:`url(${person.url})`
        }
    }
    className="card">
        <h3>{person.name}</h3>
    </div>
</TinderCard>
                )
                )
                }
            </div>

</div>

    )
}

export default TinderCards
