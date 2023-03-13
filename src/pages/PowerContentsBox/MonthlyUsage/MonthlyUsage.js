import { useParams } from "react-router-dom";

const dummyMonthlyUsageData = [
    {
        id : "january",
        label : "January",
        usageWatts : 1000,
        startedWatts : 2000,
        endedWatts : 1000,
    },
    {
        id : "febuary",
        label : "Febuary",
        usageWatts : 2000,
        startedWatts : 3000,
        endedWatts : 1000,
    },{
        id : "march",
        label : "March",
        usageWatts : 4000,
        startedWatts : 6000,
        endedWatts : 2000,
    },{
        id : "aprill",
        label : "Aprill",
        usageWatts : 800,
        startedWatts : 2000,
        endedWatts : 1200,
    },{
        id : "may",
        label : "May",
        usageWatts : 1000,
        startedWatts : 2000,
        endedWatts : 1000,
    },{
        id : "june",
        label : "June",
        usageWatts : 1000,
        startedWatts : 2000,
        endedWatts : 1000,
    },{
        id : "july",
        label : "July",
        usageWatts : 1000,
        startedWatts : 2000,
        endedWatts : 1000,
    },{
        id : "august",
        label : "August",
        usageWatts : 1000,
        startedWatts : 2000,
        endedWatts : 1000,
    },{
        id : "november",
        label : "November",
        usageWatts : 1000,
        startedWatts : 2000,
        endedWatts : 1000,
    },{
        id : "september",
        label : "September",
        usageWatts : 1000,
        startedWatts : 2000,
        endedWatts : 1000,
    },{
        id : "october",
        label : "October",
        usageWatts : 1000,
        startedWatts : 2000,
        endedWatts : 1000,
    },{
        id : "december",
        label : "December",
        usageWatts : 1000,
        startedWatts : 2000,
        endedWatts : 1000,
    },
]



const MonthlyUsage = () => {
    const { monthlyId } = useParams();

    const monthlyUsage = dummyMonthlyUsageData.find(
            (item) => item.id === monthlyId
    )
    
    if(!monthlyUsage) {
        return (
            <p>something is wrong!</p>
        )
    }

    return (
        <div>
            <div />
            <div>{monthlyUsage.label} Power</div>
            <div>
                <p>{monthlyUsage.startedWatts} Kw - {monthlyUsage.endedWatts} Kw = {monthlyUsage.usageWatts} Kw</p>
            </div>
        </div>
        
    )
}

export default MonthlyUsage;