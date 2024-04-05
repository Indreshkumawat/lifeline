// /** @type {import('tailwindcss').Config} */
// module.exports = {
// 	darkMode: "class",
// 	content: ["./src/**/*.{js,jsx,ts,tsx}"],
// 	theme: {
// 		colors: {
// 			transparent: "transparent",
// 			current: "currentColor",
// 			white: {
// 				100: "#ffffff69",
// 				200: "#eeeeee",
// 				300: "#7c7c7c",
// 				400: "#f6feff",
// 				900: "#FDF5E6",
// 			},
// 			purple: "#09c360",
// 			violet: { 100: "#5f43b2", 900: "#902bf5" },
// 			midnight: "#13193a",
// 			metal: "#4261f1",
// 			tahiti: "#3ab7bf",
// 			silver: "#c7c7d0",
// 			bermuda: "#78dcca",
// 			black: "#000",
// 			red: "#dd112e",
// 			blood: "#de2c2c",
// 			green: "#09c360",
// 			yellow: "#ff0",
// 			yellowX: "#e2b100",
// 			gray: {
// 				bg: "#181a1b",
// 				darkest: "#1f2d3d",
// 				dark: "#3c4858",
// 				DEFAULT: "#1a1a1a",
// 				light: "#e0e6ed",
// 				lightest: "#f9fafc",
// 			},
// 		},

// 		extend: {
// 			dropShadow: {
// 				"dark-lg": "0 0 3px #30375d",
// 				"dark-2xl": "0 0 25px #1e254a",
// 			},
// 			shadow: {
// 				"dark-lg": "0 0 25px #1e254a",
// 			},
// 		},
// 	},
// 	plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        colors: {
            gradient:"radial-gradient(circle, rgba(251,63,63,1) 0%, rgba(228,183,195,1) 100%);",
            transparent: "grey",
            current: "currentColor",
            white: {
                100: "#f0f0f0",
                200: "#d3d3d3",
                300: "#a0a0a0",
                400: "#7f7f7f",
                900: "#ffffff",
            },
			indianred: "#de1f26",
            purple: "#014375",
            violet: { 100: "#9932cc", 900: "#4b0082" },
            midnight: "#191970",
            metal: "#4682b4",
            tahiti: "#00ced1",
            silver: "#c0c0c0",
            bermuda: "#87ceeb",
            black: "#000",
            red: "#ff0000",
            blood: "#b22222",
            green: "#008000",
            yellow: "#ffff00",
            yellowX: "#ffd700",
            gray: {
                gainsboro:"#DCDCDC",
                bg: "#696969",
                darkest: "#2f4f4f",
                dark: "#808080",
                DEFAULT: "#a9a9a9",
                light: "#d3d3d3",
                lightest: "#f5f5f5",
            },
        },
        extend: {
            dropShadow: {
                "dark-lg": "0 0 3px #708090",
                "dark-2xl": "0 0 25px #778899",
            },
            shadow: {
                "dark-lg": "0 0 25px #778899",
            },
        },
    },
    plugins: [],
};
