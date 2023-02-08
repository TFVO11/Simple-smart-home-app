import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Light from './Light';
import Oven from './oven';
import Refrigerator from './refrigerator';
import Temperature from './temperature';
import Water from './water';

const contentsBox = () => {

return  (
    <BrowserRouter>
        <Routes>
            <Route className="light" exact path="/Light" element={<Light/>} />
            <Route className="temperature" path="/temperature" element={<Oven/>}/>
            <Route className="refrigerator" path="/refrigerator" element={<Refrigerator />}/>
            <Route className="oven" path="/oven" element={<Temperature />} />
            <Route className="water" path="/water" element={<Water />}/>
        </Routes>
    </BrowserRouter>
)
}

export default contentsBox;