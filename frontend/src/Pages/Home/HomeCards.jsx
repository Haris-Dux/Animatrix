import react, { useEffect } from 'react'
import $ from 'jquery';

function HomeCards() {
	useEffect(() => {
		$('.home-card-title').click(function() {
		  alert('You clicked the card!');
		});
	  }, []);
  return (
    <>
    <section>
			<div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
				<header className="text-center">
					<h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Iconic Anime Series</h2>
					<p className="mx-auto mt-4 max-w-md text-gray-500">
						Immerse yourself in the captivating worlds of legendary anime series, each with unique stories and
						unforgettable characters.
					</p>
				</header>

				<ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{/* <!-- Naruto --> */}
					<li>
						<div className="bg-gray-200 p-10 rounded-xl home-card-title">
							<h3 className="text-center text-xl text-gray-700 home-card-title">Naruto: A Ninja's Dream</h3>
							<p className="mt-2">
								In his early years, Naruto Uzumaki, the spirited orphan of the Hidden Leaf Village, grapples with
								loneliness and a burning desire for acknowledgment. Bearing the burden of the Nine-Tails Fox, he faces
								ostracization and misunderstanding from his peers and villagers. Despite these hardships, Young Naruto's
								unyielding spirit, endless mischief, and dream of becoming Hokage shine brightly. His journey is one of
								resilience and growth, as he transforms his pain into strength, forging his path to becoming a respected
								ninja and an emblem of hope and determination for all who know his story.
							</p>
						</div>
					</li>

					{/* <!-- Naruto's Beast (Nine-Tails Fox)--> */}
					<li>
						<div className="bg-gray-200 p-10 rounded-xl home-card-title">
							<h3 className="text-center text-xl text-gray-700 home-card-title">Naruto's Beast (Nine-Tails Fox)</h3>
							<p className="mt-2">
								The Nine-Tails Fox inside Naruto represents a dual symbol of fear and untapped power. Initially, it's a
								curse that brings him pain and isolation, but as Naruto grows, it becomes a source of immense strength.
								This theme explores the complex relationship between Naruto and the Nine-Tails, evolving from hostility
								and mistrust to an uneasy alliance. It's a testament to Naruto's ability to change hearts, including
								that of the beast within, turning a once feared entity into a crucial ally in his quest to protect his
								friends, village, and the broader ninja world.The Nine-Tails Fox transforms under Naruto's influence.
							</p>
						</div>
					</li>

					{/* <!-- Attack on Titan --> */}
					<li>
						<div className="bg-gray-200 p-10 rounded-xl home-card-title">
							<h3 className="text-center text-xl text-gray-700 home-card-title">Sasuke</h3>
							<p className="mt-2">
								Sasuke Uchiha's story is a riveting tale of loss, revenge, and redemption. Driven by the trauma of his
								clan's massacre, he embarks on a dark journey, seeking power at any cost to avenge his family. His
								complex relationship with Naruto forms the emotional core of the series, highlighting themes of rivalry,
								brotherhood, and the consequences of vengeance. Sasuke's character arc navigates through pain, betrayal,
								and redemption, as he slowly recognizes the value of friendship and the true meaning of strength,
								eventually seeking to atone for his past actions and contribute to a peaceful world.
							</p>
						</div>
					</li>
				</ul>
			</div>
		</section>
    </>
  )
}

export default HomeCards
