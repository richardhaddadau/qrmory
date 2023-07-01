import axios from "axios";
import { useAuth, useUser } from "@clerk/clerk-react";

const DashboardMain = () => {
  const { getToken } = useAuth();
  const { user } = useUser();

  return (
    <>
      <h1 className="text-left text-xl font-bold">Dashboard</h1>
      {/*<button onClick={() => createUser(user.id)}>Try {user.id}</button>*/}
      <button
        onClick={async () => {
          axios
            .get("/api/codes", {
              params: {
                token: await getToken({ template: "fauna" }),
                user: user.id,
              },
            })
            .then((res) => {
              console.log(res.data);
            })
            .catch((err) => console.log(err));
        }}
      >
        Try {user.username}
      </button>
    </>
  );
};

export default DashboardMain;
