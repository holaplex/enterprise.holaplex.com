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
				brandPurple: {
					DEFAULT: '#000929',
					900: "#966db7",
				},
				red: {
					DEFAULT: "#cd3f45",
					100: "#F597D4",
				},
				highlight: {
					DEFAULT: '#528AD5',
				}
			},
			fontSize: {
				'sm': '20px',
				'base': '25px',
				'lg': ['36px', '35px'],
				'xl': ['60px', '60px'],
				'2xl': ['70px', '64px'],
				'3xl': ['90px', '82px'],
				'4xl': '140px',
				'5xl': '150px',
			}
		},
	},
	plugins: [],
};
