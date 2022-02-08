let speed = 500;

// box shadow
setInterval(()=>{
		let first = document.getElementById('first').value
		let second = document.getElementById('second').value
		let last = document.getElementById('last').value
		let color = document.getElementById('color').value
		let ctext = document.getElementById('color-text').value
		document.getElementById('f').innerText=` ${first}px `;
		document.getElementById('s').innerText=` ${second}px `;
		document.getElementById('l').innerText=` ${last}px `;
		document.getElementById('c').innerText=` ${color};`;
		document.getElementById('ct').innerText=` ${ctext}; `;
		document.getElementById('box-shadow').style.boxShadow=`${first}px ${second}px ${last}px ${color}`;
		document.getElementById('box-shadow').style.backgroundColor=ctext;

	},speed)

// text shadow
setInterval(()=>{
		let first = document.getElementById('first').value
		let second = document.getElementById('second').value
		let last = document.getElementById('last').value
		let color = document.getElementById('color').value
		let ctext = document.getElementById('color-text').value
		document.getElementById('f').innerText=` ${first}px `;
		document.getElementById('s').innerText=` ${second}px `;
		document.getElementById('l').innerText=` ${last}px `;
		document.getElementById('c').innerText=` ${color};`;
		document.getElementById('ct').innerText=` ${ctext}; `;
		document.getElementById('span').style.textShadow=`${first}px ${second}px ${last}px ${color}`;
		document.getElementById('span').style.color=ctext;

	},speed)
// border


	setInterval(()=>{
		let width = document.getElementById('width').value
		let sape = document.getElementById('sape').value
		let color = document.getElementById('color').value
		let colorBox = document.getElementById('color-box').value
		document.getElementById('w').innerText=` ${width}px `;
		document.getElementById('s').innerText=` ${sape}`;
		document.getElementById('c').innerText=` ${color};`;
		document.getElementById("span").style.border=` ${width}px  ${sape}  ${color}`
		document.getElementById('span').style.backgroundColor=colorBox;
	},speed)

// border radius
	setInterval(()=>{
		let tl= document.getElementById('tl').value
		let tr = document.getElementById('tr').value
		let br = document.getElementById('br').value
		let bl = document.getElementById('bl').value
		let color = document.getElementById('color').value

		document.getElementById('t').innerText=` ${tl}% `;
		document.getElementById('l').innerText=` ${tr}% `;
		document.getElementById('r').innerText=` ${br}%; `;
		document.getElementById('b').innerText=` ${bl}%`;

		document.getElementById('span').style.borderRadius=`${tl}% ${tr}% ${br}% ${bl}% `;
		document.getElementById('span').style.backgroundColor=color;

	},speed)

	// font size
	setInterval(()=>{
		let color = document.getElementById('color').value;
		let range = document.getElementById('number').value;
		
		document.getElementById('font').style.fontSize=`${range}px`;
		document.getElementById('font').style.color=`${color}`;
		document.getElementById('c').innerText=`${range}px`
	},500)
	// filter
	