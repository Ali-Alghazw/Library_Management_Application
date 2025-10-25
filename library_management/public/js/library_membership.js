frappe.ui.form.on("Library Membership", {
	refresh: function (frm) {
		if (frm.doc.member) {
			frm.set_df_property("full_name", "read_only", 1);
		}

		// Add button to add transactions (only if document is saved)
		if (!frm.doc.__islocal) {
			frm.add_custom_button("Add Transaction", () => {
				let row = frm.add_child("transactions");
				row.date = frappe.datetime.nowdate();
				frm.refresh_field("transactions");
			});
		}
	},
});
