const express = require('express');
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");

const app = express();
const port = 3177;

dotenv.config();

app.use(cookieParser());
app.use(express.json());
// app.use(
// 	cors({
// 		origin: [
// 			"https://lifeline-1.onrender.com",
// 			"http://localhost:3000",
// 		],
// 		credentials: true,
// 	})
// );
const allowedOrigins = [
    "http://localhost:3000",
	"https://lifeline-1.onrender.com",

];
app.use(
	(req, res, next) => {
		console.log("Credentials")
	
		const origin = req.headers.origin;
	
		if (allowedOrigins.includes(origin)) {
			console.log("allowed")
			res.header('Access-Control-Allow-Credentials', true);
		}
		next();
	}
)
app.use(cors({origin: [
				"https://lifeline-1.onrender.com",
				"http://localhost:3000",
			],
optionsSuccessStatus: 200,
preflightContinue: false,
methods: "GET,POST,OPTIONS",
credentials: true}))



mongoose.connect(process.env.CONNECT, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (e) => {
	console.log(e ? e : "Connected successfully to database");
});

app.use("/auth", require("./routers/authRouter"));
app.use("/user", require("./routers/userRouter"));
app.use("/bank", require("./routers/bankRouter"));
app.use("/camps", require("./routers/campRouter"));

app.listen(port, () =>
	console.log(`Server running at http://localhost:${port}`)
);