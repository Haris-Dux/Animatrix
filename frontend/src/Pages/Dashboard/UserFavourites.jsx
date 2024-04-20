import react from 'react'
import HeaderDashboard from './Header'

function UserFavourites() {
  return (
    <>
    <HeaderDashboard/>
    <section>
			<div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="max-w-lg">
                    <h3 className="text-gray-800 text-xl font-bold sm:text-2xl underline underline-offset-1">
                        Your Favourite Animes
                    </h3>
                </div>
				<ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					<li>
						<a href="#" className="group block overflow-hidden">
							<img
								src="/Images/Naruto3.jpg"
								alt=""
								className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
							/>

							<div className="relative bg-white pt-3">
								<h3 className="text-center text-xl text-gray-700 group-hover:underline group-hover:underline-offset-4">
									Young Naruto
								</h3>
							</div>
						</a>
					</li>

					<li>
						<a href="#" className="group block overflow-hidden">
							<img
								src="/Images/Naruto2.jpg"
								alt=""
								className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
							/>

							<div className="relative bg-white pt-3">
								<h3 className="text-center text-xl text-gray-700 group-hover:underline group-hover:underline-offset-4">
									Naruto's Beast
								</h3>
							</div>
						</a>
					</li>

					<li>
						<a href="#" className="group block overflow-hidden">
							<img
								src="/Images/Naruto.jpg"
								alt=""
								className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
							/>

							<div className="relative bg-white pt-3">
								<h3 className="text-center text-xl text-gray-700 group-hover:underline group-hover:underline-offset-4">
									Sasuke
								</h3>
							</div>
						</a>
					</li>
				</ul>
			</div>
		</section>
    </>
  )
}

export default UserFavourites
