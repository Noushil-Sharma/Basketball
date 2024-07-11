import React from 'react';
import BasketballPlayerCard from './BasketballPlayerCard';

function App() {
    const player = {
        name: "LeBron James",
        image: "data:image/jpeg;base64,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",
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