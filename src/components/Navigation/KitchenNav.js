import Wrapper from "../../layouts/ContentLayout/Wrapper.js";
import classes from './KitchenNav.module.css'


const dummyKitchenNavItem = [
    {
        id : "temperature",
        label : "Temperature"
    },
    {
        id : "light",
        label : "Light"
    },
    {
        id : "oven",
        label : "Oven"
    },
    
]

const KitchenNav = () => {
    return (
        <Wrapper>
            {dummyKitchenNavItem.map((item) => {
                return (
                    <div>
                        <a href={`/KitchenContentsBox/${item.id}`}>
                            {item.label}
                        </a>
                    </div>
                )
            })}
        </Wrapper>
    )

export default KitchenNav;
