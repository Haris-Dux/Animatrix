import { useEffect } from 'react';
import Navbar from '../../components/Navbar'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getFavForUserAsync } from '../../../features/productsSlice';

function UserFavourites() {
	const { User } = useSelector((state) => state.auth);
	const data = useSelector((state) => state.products.Fav);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(()=>{
        if(User?.login === false){
          navigate("/")
        }
      },[User]);

	  useEffect(()=>{
		dispatch(getFavForUserAsync({userId:User?.id}))
	  },[User])

  return (
    <>
   
	<Navbar/>
    {!User ? <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="max-w-lg">
                    <h3 className="text-gray-800 text-xl font-bold sm:text-2xl underline underline-offset-1">
                        Please Login First
                    </h3>
                </div> </div>:<section>
			<div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="max-w-lg">
                    <h3 className="text-gray-800 text-xl font-bold sm:text-2xl underline underline-offset-1">
                        Your Favourite Animes
                    </h3>
                </div>
				<ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{data?.map((item)=>(
						<li>
						<a href="#" className="group block overflow-hidden">
							<img
								src={item.imageUrl}
								alt=""
								className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
							/>

							<div className="relative bg-white pt-3">
								<h3 className="text-center text-xl text-gray-700 group-hover:underline group-hover:underline-offset-4">
									{item.title}
								</h3>
							</div>
						</a>
					</li>
					))}

				</ul>
			</div>
		</section>}
    </>
  )
}

export default UserFavourites
