frappe.ui.form.on("Article", {
	refresh: function (frm) {
		// Add custom buttons based on status
		if (frm.doc.status === "Available") {
			frm.add_custom_button(
				"Issue",
				() => {
					frm.set_value("status", "Issued");
					frm.save();
				},
				"Actions"
			);
		}

		if (frm.doc.status === "Issued") {
			frm.add_custom_button(
				"Return",
				() => {
					frm.set_value("status", "Available");
					frm.save();
				},
				"Actions"
			);
		}
	},

	// This runs when the article_name field changes
	article_name: function (frm) {
		if (frm.doc.article_name) {
			frappe.msgprint(`Article name set to: ${frm.doc.article_name}`);
		}
	},

	// Validate before save
	validate: function (frm) {
		if (frm.doc.status === "Issued" && !frm.doc.author) {
			frappe.msgprint("Please set an author before issuing", "Warning");
		}
	},
});
