import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";

const Layout = ({ children, nofooter = false }) => {
	// Minimum height of the viewport
	return (
		<div className={"min-h-screen flex flex-col bg-base text-content"}>
			<Navbar />

			<div className="relative flex flex-col">
				{children}
			</div>

			{/* Footer is always at least aligned to the bottom of the screen on smaller pages */}
			{nofooter ? <></> : <Footer />}
		</div>
	);
};

export default Layout;
