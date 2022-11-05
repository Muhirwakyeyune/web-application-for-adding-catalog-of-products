window.addEventListener('load', () => {
	const form = document.querySelector("#new-product-form");
	const input = document.querySelector("#new-product-input");
	const list_el = document.querySelector("#products");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const product = input.value;

		const product_el = document.createElement('div');
		product_el.classList.add('product');

		const product_content_el = document.createElement('div');
		product_content_el.classList.add('content');

		product_el.appendChild(product_content_el);

		const product_input_el = document.createElement('input');
		product_input_el.classList.add('text');
		product_input_el.type = 'text';
		product_input_el.value = product;
		product_input_el.setAttribute('readonly', 'readonly');

		product_content_el.appendChild(product_input_el);

		const product_actions_el = document.createElement('div');
		product_actions_el.classList.add('actions');
		
		const product_edit_el = document.createElement('button');
		product_edit_el.classList.add('edit');
		product_edit_el.innerText = 'Edit';

		const product_delete_el = document.createElement('button');
		product_delete_el.classList.add('delete');[]
		product_delete_el.innerText = 'Delete';

		product_actions_el.appendChild(product_edit_el);
		product_actions_el.appendChild(product_delete_el);

		product_el.appendChild(product_actions_el);

		list_el.appendChild(product_el);

		input.value = '';

		product_edit_el.addEventListener('click', (e) => {
			if (product_edit_el.innerText.toLowerCase() == "edit") {
				product_edit_el.innerText = "Save";
				product_input_el.removeAttribute("readonly");
				product_input_el.focus();
			} else {
				product_edit_el.innerText = "Edit";
				product_input_el.setAttribute("readonly", "readonly");
			}
		});

		product_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(product_el);
		});
	});
});