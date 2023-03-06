import { Switch, Route } from 'react-router-dom';

import Light from './Light';
import Oven from './oven';
import Temperature from './temperature';
import Card from '../UI/Card';
import KitchenNav from '../Navigation/KitchenNav';
import Wrapper from '../Helpers/Wrapper';
import classes from './KitchenContentsBox.module.css';

const KitchencontentsBox = () => {

return  (
    <div className={classes.kitchencontentsbox}>
        <div>
        <KitchenNav />
        </div>
        <div>
        <Switch>
            <Route path="/KitchenContentsBox/light" component={Light} />
            <Route exact path="/KitchenContentsBox/temperature" component={Temperature}/>    
            <Route path="/KitchenContentsBox/oven" component={Oven} />
        </Switch>
        </div>
    </div>

)
}

export default KitchencontentsBox;