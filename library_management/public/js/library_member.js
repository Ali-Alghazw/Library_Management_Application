frappe.ui.form.on("Library Member", {
	refresh: function (frm) {
		frm.add_custom_button("Create Membership", () => {
			frappe.new_doc("Library Membership", {
				member: frm.doc.name,
				full_name: frm.doc.full_name,
			});
		});
	},
});
