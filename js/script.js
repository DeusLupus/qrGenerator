const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');

//button submit
const onGenerateSubmit = (e) => {
	e.preventDefault();

	clearUI();

	const url = document.getElementById('url').value;
	const size = document.getElementById('size').value;

	//validate url
	if (url === '') {
		alert('Please enter a URL');
	} else {
		showSpinner();
		//show spinner for 1 sec
		setTimeout(() => {
			hideSpinner();
			generateQRCode(url, size);

			//generate the save button after the qr code image
			setTimeout(() => {
				//get save url
				const saveUrl = qr.querySelector('img').src;
				//create save button
				createSaveBtn(saveUrl);
			}, 50);
		}, 1000);
	}
};

//clear qr code and save button
const clearUI = () => {
	qr.innerHTML = '';
	const saveBtn = document.getElementById('save-link');
	if (saveBtn) {
		saveBtn.remove();
	}
};

//show spinner
const showSpinner = () => {
	const spinner = document.getElementById('spinner');
	spinner.style.display = 'block';
};

//hide spinner
const hideSpinner = () => {
	document.getElementById('spinner');
	spinner.style.display = 'none';
};

//create save button to download qr code
const createSaveBtn = (saveUrl) => {
	const link = document.createElement('a');
	link.id = 'save-link';
	//link.classList = '';
	link.href = saveUrl;
	link.download = 'qrcode';
	link.innerHTML = 'Save Image';
	document.getElementById('generated').appendChild(link);
};

hideSpinner();

form.addEventListener('submit', onGenerateSubmit);