import { Switch, Route } from 'react-router-dom';

import Light from './Light';
import Oven from './oven';
import Refrigerator from './refrigerator';
import Temperature from './temperature';
import Water from './water';
import Card from '../UI/Card';

const KitchencontentsBox = () => {

return  (
    <Card>
        <Switch>
            <Route className="light" exact path="/Light" element={<Light/>} />
            <Route className="temperature" path="/temperature" element={<Temperature/>}/>
            <Route className="refrigerator" path="/refrigerator" element={<Refrigerator />}/>
            <Route className="oven" path="/oven" element={<Oven />} />
            <Route className="water" path="/water" element={<Water />}/>
        </Switch>
    </Card>

)
}

export default KitchencontentsBox;