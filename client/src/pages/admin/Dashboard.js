import { useAuth } from "../../context/auth";
import AdminMenu from "../../components/nav/AdminMenu";

export default function AdminDashboard() {
  // context
  const [auth] = useAuth();

  return (
    <>
      {/* <pre>{JSON.stringify(auth, null, 4)}</pre> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>

          <div className="col-md-9">
            <div className="p-3 mt-2 mb-2 h4 bg-light">Admin Info</div>
            <ul className="list-group">
              <li className="list-group-item">{auth?.user?.firstName}</li>
              <li className="list-group-item">{auth?.user?.email}</li>
              <li className="list-group-item">Admin</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
