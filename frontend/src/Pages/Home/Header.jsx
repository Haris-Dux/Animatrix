import react from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <section className="overflow-hidden bg-[url(Images/Naruto.jpg)] bg-cover bg-top bg-no-repeat">
			<div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-19.5 flex flex-col justify-center items-center">
				<div className="text-center ltr:sm:text-left rtl:sm:text-right">
					<h2 className="text-2xl font-bold text-black sm:text-3xl md:text-5xl">Anime World</h2>

					<p className="hidden max-w-lg text-black/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
						Embrace the World of Anime with Our Exclusive Collection. Discover the unique blend of storytelling, art,
						and cultural richness.
					</p>

					<div className="mt-4 sm:mt-8">
						<Link
							to={'/blogs'}
							className="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
						>
							Explore Now
						</Link>
					</div>
				</div>
			</div>
		</section>
    </>
  )
}

export default Header
