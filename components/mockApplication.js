import styled from "@emotion/styled";


const MockWindow = (props) => {
	const { children, className, titleColor } = props;
	return <div
		className={"mx-auto overflow-hidden rounded-lg bg-white shadow-md " + className}>
		<div className="bg-black flex gap-1 p-1 lg:p-2" style={{ backgroundColor: titleColor || '#D9E0E8' }}>
			<div className="p-1 rounded-full bg-white" />
			<div className="p-1 rounded-full bg-white" />
			<div className="p-1 rounded-full bg-white" />
		</div>
		<div className="text-black">
			{children}
		</div>
	</div>
};

export default MockWindow;
