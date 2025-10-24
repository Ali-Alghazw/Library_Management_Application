# Copyright (c) 2025, Ali and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class Article(Document):
	def before_save(self):
		# Example from the tutorial context
		frappe.msgprint("Article is being saved")

	def validate(self):
		# Custom validation logic
		if self.status == "Issued" and not self.author:
			frappe.throw("Author is required for issued articles")
