export default function tabsFilter() { 
	const buttons = document.querySelectorAll('.tab-button');
	const contents = document.querySelectorAll('.vacancy-card'); 

	if (buttons.length > 0 && contents.length > 0) {
		 buttons[0].classList.add("active");
		 contents[0].classList.add("active");
	}

	buttons.forEach(button => { 
		 button.addEventListener('click', () => { 
			  const selectedJob = button.getAttribute('data-job');

			  buttons.forEach(btn => btn.classList.remove('active'));
			  button.classList.add('active');

			  contents.forEach(content => {
					if(content.getAttribute('data-job') === selectedJob) {
						 content.classList.add('active'); 
					} else { 
						 content.classList.remove('active'); 
					} 
			  });
		 });
	});

	const select = document.getElementById('vacancy-select');
	select.addEventListener('change', () => {
		 const selectedJob = select.options[select.selectedIndex].getAttribute('data-job');
		 
		 buttons.forEach(btn => {
			  if(btn.getAttribute('data-job') === selectedJob) {
					btn.classList.add('active');
			  } else {
					btn.classList.remove('active');
			  }
		 });

		 contents.forEach(content => {
			  if(content.getAttribute('data-job') === selectedJob) {
					content.classList.add('active'); 
			  } else { 
					content.classList.remove('active'); 
			  } 
		 });
	});
}
