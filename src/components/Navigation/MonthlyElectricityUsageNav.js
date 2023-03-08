import Wrapper from "../../layouts/ContentLayout/Wrapper.js";

    const dummyPowerNavItem = [
        {
            id : "january",
            label : "January"
        },
        {
            id : "febuary",
            label : "Febuary"
        },
        {
            id : "may",
            label : "May"
        },
        {
            id : "aprill",
            label : "Aprill"
        },
        {
            id : "march",
            label : "March"
        },
        {
            id : "june",
            label : "June"
        },
        {
            id : "july",
            label : "July"
        },
        {
            id : "august",
            label : "August"
        },
        {
            id : "september",
            label : "September"
        },
        {
            id : "november",
            label : "November"
        },
        {
            id : "october",
            label : "October"
        },
        {
            id : "december",
            label : "December"
        },
    ]

const PowerNav = () => {
    return(
        <Wrapper>
            {dummyPowerNavItem.map((item) => {
                return (
                    <div>
                        <a href={`/PowerContentsBox/${item.id}`}>
                            {item.label}
                        </a>
                    </div>
                )
            }
            )}
        </Wrapper>
    )
}

export default PowerNav;