import './RandomGif.css'
import { render } from '@testing-library/react'

const url = 'https://api.giphy.com/v1/gifs/random?api_key=VA20uPaisSRbESBRe0XsXychT0UpYCMo&tag=cat&rating=g'

const RandomGif = () => {
	fetch(url)
		.then((res) => res.json())
		.then((res) => mostrarDatos(res))
		.catch(console.log('Oh, there is some type of hacker that does not let us access!'))

	const mostrarDatos = async (res) => {
		try {
			const info = await res.data
			const gifUrl = info.images.downsized.url
			render(
				<div className='first-look'>
					<h1 className='title'>¡Bienvenido a tu random gif generator!</h1>
					<button className='btn btn-orange' onClick={reload}>
						Gif random
					</button>
					<img src={gifUrl} alt='img' />
				</div>
			)
		} catch (error) {
			console.log('Something goes wrong!');
			render(<h1 color='white'>Something goes wrong! :( </h1>)
		}
	}

	const reload = () => {
		window.location.reload('')
	}

	return (
		<section className='main'>
			<div className='space'></div>
		</section>
	)
}

export { RandomGif }
