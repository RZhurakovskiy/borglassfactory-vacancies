export default function tabsFilter() {
	const buttons = document.querySelectorAll('.tab-button')
	const contents = document.querySelectorAll('.vacancy-card')

	function normalizeString(str) {
		return str
			?.replace(/\s+/g, ' ')
			.trim()
			.toLowerCase()
	}

	if (buttons.length > 0 && contents.length > 0) {
		buttons[0].classList.add('active')
		contents[0].classList.add('active')
	}

	buttons.forEach(button => {
		button.addEventListener('click', () => {
			const selectedJob = normalizeString(button.getAttribute('data-job'))

			buttons.forEach(btn => btn.classList.remove('active'))
			button.classList.add('active')

			contents.forEach(content => {
				const contentJob = normalizeString(content.getAttribute('data-job'))
				if (contentJob === selectedJob) {
					content.classList.add('active')
				} else {
					content.classList.remove('active')
				}
			})
		})
	})

	const select = document.getElementById('vacancy-select')
	select.addEventListener('change', () => {
		const selectedJob = normalizeString(
			select.options[select.selectedIndex].getAttribute('data-job')
		)

		buttons.forEach(btn => {
			const buttonJob = normalizeString(btn.getAttribute('data-job')) //
			if (buttonJob === selectedJob) {
				btn.classList.add('active')
			} else {
				btn.classList.remove('active')
			}
		})

		contents.forEach(content => {
			const contentJob = normalizeString(content.getAttribute('data-job'))
			if (contentJob === selectedJob) {
				content.classList.add('active')
			} else {
				content.classList.remove('active')
			}
		})
	})
}
