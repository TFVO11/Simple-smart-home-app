import Wrapper from "../Helpers/Wrapper";

const powerNavItems = [
    {
        id: "january",
        label: "January",
    },
    {
        id: "feburary",
        label: "Feburary",
    },
    {
        id: "march",
        label: "March",
    },
    {
        id: "april",
        label: "April",
    },
];

const PowerNav = () => {
    return (
        <Wrapper>
            {powerNavItems.map((item) => {
                return (
                    <div>
                        <a href={`/PowerContentsBox/${item.id}`}>
                            {item.label}
                        </a>
                    </div>
                );
            })}
        </Wrapper>
    );
};

export default PowerNav;
