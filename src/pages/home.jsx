import '../App.css'


import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import Top_Ten from '../components/top_ten';
import FavoritesCompact from '../components/header/favoriteCompact';
import RecentCompact from '../components/recent';

ChartJS.register(ArcElement, Tooltip, Legend);

function Home() {

  return (
      <>
        <div className="main_container">
          <Top_Ten/>
        </div>
      </>
  )
}

export default Home
