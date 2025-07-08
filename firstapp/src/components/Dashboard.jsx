import { Link, Outlet } from "react-router-dom";


export default function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <p>This is the dashboard page of your application.</p>

            {/* Links to nested routes */}
            <nav>
                <Link to="profile">Profile</Link>
                <Link to="settings">settings</Link>
            </nav>



            {/* nested Links are rendered  here  */}

            <Outlet></Outlet>

        </div>
    )
 }