
import Profile from "../components/Profile";import Tab from "components/Tab"


const TeamPage = ({ data }: { data: any }) => {
  return (<><Tab/>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }} className="wrapper">
      {data?.map((item) => (
        <Profile key={item.name} data={item} />
      ))}
    </div></>
  );
};

export const getServerSideProps = async (ctx) => {
  const data = await fetch("https://at-hackathon.herokuapp.com/profiles").then(
    (res) => res.json()
  );
  return { props: { data } };
};

export default TeamPage;
