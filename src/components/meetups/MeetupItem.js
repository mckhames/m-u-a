import { Link } from 'react-router-dom'
import Card from '../ui/Card';

import classes from './MeetupItem.module.css'

function MeetupItem(props) {
    return(

        <li className={classes.item}>
            <Card>
            <div>
                <img className={classes.image} src={props.image} alt={props.title} />
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button><Link to='/favorites'>To Favorites</Link></button>
            </div>
            </Card>
        </li>
    )
}
export default MeetupItem;
