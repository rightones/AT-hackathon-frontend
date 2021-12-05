import Tab from "components/Tab";
import { useEffect, useState } from "react";
import Team from "../components/Team";

const TeamPage = () => {
    const [tab, setTab] = useState(1);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://at-hackathon.herokuapp.com/teams?category=${tab}`)
            .then(async (res) => {
              const json = await res.json();

              setData(json);
            })
    }, [tab]);

    return (
        <>
            <Tab state={tab} setState={setTab} />
            <div
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}
                className="wrapper"
            >
                {data?.map((item) => (
                    <Team key={item.name} data={item} />
                ))}
            </div>
        </>
    );
};

export default TeamPage;
