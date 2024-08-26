import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import AdminLogin from "./components/Admin/AdminLogin";
import Admin from "./components/Admin/Admin";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route
						path="/"
						element={<Landing />}
					/>
					<Route
						path="/admin/login"
						element={<AdminLogin />}
					/>
					<Route
						path="/admin"
						element={<Admin />}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
