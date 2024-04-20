import react from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Array = [
    {
        name: 'Attack on Titan',
        watched_ratio: 1990,
      },
      {
        name: 'My Hero Academia',
        watched_ratio: 2006,
      },
      {
        name: 'One Piece',
        watched_ratio: 2009,
      },
      {
        name: 'Dragon Ball Z',
        watched_ratio: 2017,
      },
  ];

function Home() {
  return (
    <>
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 mt-20">
                <div className="w-100 text-center">
                    <h3 className="text-gray-800 text-xl font-bold sm:text-2xl underline underline-offset-1">
                        Animes Watching Ratio
                    </h3>
            </div>
            <div className='flex justify-center	items-center	'>
            <ResponsiveContainer width="100%" aspect={3}>
                <BarChart data={Array} width={400} height={400}>
                    <XAxis dataKey='name' />
                    <YAxis domain={[1970]} />
                    <Bar dataKey='watched_ratio' fill="rgb(79 70 229)"/>
                </BarChart>
            </ResponsiveContainer>
            </div>
        </div>
    </>
  )
}

export default Home
