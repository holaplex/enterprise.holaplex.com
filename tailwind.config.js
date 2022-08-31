module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			// look here to add more colors later https://www.figma.com/file/8WjVJW9fa2rwGctm7ZVaCT/Design-System?node-id=1023%3A36350
			colors: {
				transparent: "transparent",
				gray: {
					25: "#FEFEFE",
					50: "#F4F4F4",
					100: "#E0E0E0",
					200: "#C6C6C6",
					300: "#A8A8A8",
					400: "#8D8D8D",
					500: "#6F6F6F",
					600: "#525252",
					700: "#393939",
					800: "#262626",
					900: "#171717",
				},
				sharable: {
					nftCard: "#F1C1AA",
					divider: "#EAB196",
				},
				"hola-black": "#262626",
				"gradient-blue": {
					100: "#132878",
					200: "#000a2c",
					700: "#8384FA",
					900: "#6BE2F8",
				},
				green: "#9fca56",
				purple: "#966db7",
				red: {
					default: "#cd3f45",
					100: "#F597D4",
				},
			},
		},
	},
	plugins: [],
};
