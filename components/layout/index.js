import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";

const Layout = ({ children, navbarStyle = "theme-light", theme = "theme-dark", nofooter = false }) => {
	// Minimum height of the viewport
	return (
		<div className={"min-h-screen flex flex-col bg-base text-content " + theme}>
			<Navbar navbarStyle={navbarStyle} />

			{children}

			{/* Footer is always at least aligned to the bottom of the screen on smaller pages */}
			{nofooter ? <></> : <Footer />}
		</div>
	);
};

export default Layout;
