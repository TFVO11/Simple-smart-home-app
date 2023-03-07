import { useParams } from "react-router-dom";

const dummyMonthlyUsageData = [
    {
        id: "january",
        label: "January",
        usageWatts: 1000,
        startedKwhMilage: 1000,
        endedKwhMilage: 2000,
    },
    {
        id: "feburary",
        label: "Feburary",
        usageWatts: 1000,
        startedKwhMilage: 1000,
        endedKwhMilage: 2000,
    },
    {
        id: "march",
        label: "March",
        usageWatts: 1000,
        startedKwhMilage: 1000,
        endedKwhMilage: 2000,
    },
    {
        id: "april",
        label: "April",
        usageWatts: 1000,
        startedKwhMilage: 1000,
        endedKwhMilage: 2000,
    },
];

const MonthlyUsage = () => {
    const { monthId } = useParams();

    const monthlyUsage = dummyMonthlyUsageData.find(
        (item) => item.id === monthId
    );

    if (!monthlyUsage) {
        return <div>something is wrong </div>;
    }

    return (
        <div>
            <div>{monthlyUsage.label} Power</div>
            <div>
                <p>Usage: {monthlyUsage.usageWatts} kW</p>
            </div>
        </div>
    );
};

export default MonthlyUsage;
