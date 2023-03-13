import { Switch, Route } from 'react-router-dom';

import KitchenContents from './KitchenContentsBox/KitchenContents/KitchenContents.js';
import KitchenNav from '../components/Navigation/KitchenNav';
import classes from './KitchenContentsBox.module.css';

const KitchencontentsBox = () => {

    return (
        <div className={classes.kitchencontentsbox}>
            <div>
                <KitchenNav />
            </div>
            <div>
                <Switch>
                    <Route exact path="/KitchenContentsBox/:kitchenContentsId" component={KitchenContents} />
                </Switch>
            </div>
        </div>

    )
}

export default KitchencontentsBox;