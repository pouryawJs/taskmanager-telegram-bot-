const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		status: {
			type: String,
			required: true,
			default: "شروع نشده ⚪️",
			enum: [
				"شروع نشده ⚪️",
				"تکمیل شده 🟢",
				"درحال انجام 🟡",
				"نیمه تمام ماند 🟤",
				"انجام نشد 🔴",
				"لغو شده ⛔️",
			],
		},
		start: { type: String, required: true },
		end: { type: String, required: true },
		dayTag: { type: String, required: true },
		user: { type: String, ref: "User", required: true },
		isSentNotification: { type: Boolean, default: false },
	},
	{ timestamp: true, versionKey: false }
);

const model = mongoose.model("Task", taskSchema);

module.exports = model;
