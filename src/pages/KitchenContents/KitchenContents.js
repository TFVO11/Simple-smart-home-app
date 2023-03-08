import { useParams } from "react-router-dom";
import { useState } from "react";


const dummyKitchenContentsItems = [
    {
        id: "light",
        label: "Light"
    },
    {
        id: "oven",
        label: "Oven"
    },
    {
        id: "refrigerator",
        label: "Refrigerator"
    },
    {
        id: "temperature",
        label: "Temperature"
    },
    {
        id: "water",
        label: "Water"
    },
]

const KitchenContents = () => {

    const { kitchenContentsId } = useParams();

    const kitchenContentsItem = dummyKitchenContentsItems.find(
        (item) => item.id === kitchenContentsId
    )

    if(!kitchenContentsItem) {
        return (
            <p>something is wrong!</p>
        )
    }

    return (
        <div>
            <div>
                {kitchenContentsItem.label}
            </div>
        </div>
    )
};

export default KitchenContents;