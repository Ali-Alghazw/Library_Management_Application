frappe.ui.form.on("Library Membership", {
	refresh: function (frm) {
		// Display a message when form loads
		if (frm.doc.member) {
			frm.set_df_property("full_name", "read_only", 1);
		}
	},

	member: function (frm) {
		// This runs when member is selected
		if (frm.doc.member) {
			frappe.msgprint(`Selected member: ${frm.doc.full_name}`);
		}
	},	
});
