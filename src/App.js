import React from 'react';
import BasketballPlayerCard from './components/Basketballplayer';

function App() {
  const player = {
    name: "LeBron James",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReAXEKSmn0koa2-vpKwJpNeCFnzxYC6M56oA&s",
    position: "Forward",
    stats: {
      pointsPerGame: 25.4,
      assistsPerGame: 7.1,
      reboundsPerGame: 10.5
    }
  };

  return (
    <div className="App">
      <BasketballPlayerCard
        name={player.name}
        image={player.image}
        position={player.position}
        stats={player.stats}
      />
    </div>
  );
}

export default App;
