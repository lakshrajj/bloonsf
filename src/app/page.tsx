'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [currentScreen, setCurrentScreen] = useState('map');
  const [loveNotes] = useState([
    "Your smile lights up my entire world! 🌟",
    "Every day with you is a new adventure 🎈",
    "You make everything better just by being you 💕",
    "Your laugh is my favorite sound in the universe 🎵",
    "You're not just my girlfriend, you're my best friend 👫",
    "Being with you feels like coming home 🏠",
    "You inspire me to be the best version of myself ✨",
    "Your kindness touches everyone around you 🌸",
    "I love how passionate you are about everything 🔥",
    "You make ordinary moments feel magical 🪄"
  ]);
  const [currentLoveNote, setCurrentLoveNote] = useState(0);
  const [score, setScore] = useState(0);
  const [balloons, setBalloons] = useState<Array<{id: number, x: number, y: number, popped: boolean}>>([]);
  const [openedGifts, setOpenedGifts] = useState<Set<number>>(new Set());
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [musicEnabled, setMusicEnabled] = useState(false);

  const startAdventure = () => {
    setShowSplash(false);
  };

  const goBack = () => {
    setCurrentScreen('map');
  };

  const initBalloonGame = () => {
    const newBalloons = Array.from({length: 10}, (_, i) => ({
      id: i,
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
      popped: false
    }));
    setBalloons(newBalloons);
    setScore(0);
  };

  const popBalloon = (id: number) => {
    setBalloons(prev => prev.map(balloon => 
      balloon.id === id ? {...balloon, popped: true} : balloon
    ));
    setScore(prev => prev + 100);
  };

  const openGift = (id: number) => {
    setOpenedGifts(prev => new Set([...prev, id]));
  };

  const toggleMusic = () => {
    setMusicEnabled(prev => !prev);
  };

  useEffect(() => {
    if (currentScreen === 'minigames') {
      initBalloonGame();
    }
  }, [currentScreen]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (showSplash) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-900 via-pink-900 to-blue-900 relative overflow-hidden">
        {/* Animated stars background */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Main splash content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl text-white rpg-text-glow mb-4 float">
              Welcome to
            </h1>
            <h2 className="text-6xl md:text-8xl text-pink-400 rpg-text-glow mb-8 sparkle">
              BLOONSLAND!
            </h2>
            
            {/* Pixel art style Bloons character */}
            <div className="mb-8 float">
              <div className="inline-block bg-pink-400 w-24 h-24 rounded-full relative border-4 border-white shadow-lg">
                <div className="absolute top-4 left-6 w-3 h-3 bg-white rounded-full"></div>
                <div className="absolute top-4 right-6 w-3 h-3 bg-white rounded-full"></div>
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-pink-600 rounded-full"></div>
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-2 h-8 bg-pink-500"></div>
              </div>
            </div>

            <p className="text-lg md:text-xl text-white mb-12 max-w-2xl">
              A magical pixel world dedicated to the most amazing person in the universe! ✨
            </p>
          </div>

          <button
            onClick={startAdventure}
            className="rpg-button text-lg md:text-xl px-8 py-4 glow"
          >
            🚀 Start Adventure
          </button>

          <div className="mt-8 text-center">
            <p className="text-sm text-pink-200">
              Press the button to enter the magical realm...
            </p>
          </div>
        </div>

        {/* Floating hearts */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute text-2xl text-pink-400 float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            >
              💖
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Castle of Love Screen
  if (currentScreen === 'castle') {
    return (
      <>
        <div 
          className="cursor-pet"
          style={{
            left: mousePos.x + 10,
            top: mousePos.y - 30,
          }}
        >
          💖
        </div>
        <div className="min-h-screen bg-gradient-to-br from-pink-900 via-purple-900 to-red-900 relative">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-pink-300 sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            >
              💖
            </div>
          ))}
        </div>

        <div className="relative z-10 p-4">
          <header className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl text-white rpg-text-glow mb-4">
              🏰 Castle of Love 🏰
            </h1>
            <p className="text-pink-300">Why Bloons is absolutely amazing!</p>
          </header>

          <div className="max-w-4xl mx-auto">
            <div className="rpg-panel mb-8">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">💝</div>
                <h2 className="text-2xl text-pink-400 mb-6">Love Note #{currentLoveNote + 1}</h2>
                <p className="text-lg text-white mb-8 leading-relaxed">
                  {loveNotes[currentLoveNote]}
                </p>
                <div className="flex gap-4 justify-center">
                  <button 
                    onClick={() => setCurrentLoveNote((prev) => prev > 0 ? prev - 1 : loveNotes.length - 1)}
                    className="rpg-button"
                  >
                    ← Previous
                  </button>
                  <button 
                    onClick={() => setCurrentLoveNote((prev) => (prev + 1) % loveNotes.length)}
                    className="rpg-button"
                  >
                    Next →
                  </button>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="rpg-panel text-center">
                <div className="text-3xl mb-2">😍</div>
                <h3 className="text-pink-400 mb-2">Beautiful Soul</h3>
                <p className="text-sm text-gray-300">Inside and out!</p>
              </div>
              <div className="rpg-panel text-center">
                <div className="text-3xl mb-2">🧠</div>
                <h3 className="text-blue-400 mb-2">Brilliant Mind</h3>
                <p className="text-sm text-gray-300">So smart and wise!</p>
              </div>
              <div className="rpg-panel text-center">
                <div className="text-3xl mb-2">❤️</div>
                <h3 className="text-red-400 mb-2">Kind Heart</h3>
                <p className="text-sm text-gray-300">Pure love and care!</p>
              </div>
            </div>

            <div className="text-center">
              <button onClick={goBack} className="rpg-button">
                🏠 Back to Map
              </button>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }

  // Gift Garden Screen
  if (currentScreen === 'garden') {
    const gifts = [
      { id: 1, title: "Virtual Hug", desc: "A warm digital embrace! 🤗", emoji: "🌺", gift: "Sending you the biggest virtual hug! You're amazing!" },
      { id: 2, title: "Love Poem", desc: "Words from the heart 💝", emoji: "🌸", gift: "Roses are red, violets are blue, nobody's as perfect as you! 💕" },
      { id: 3, title: "Future Plans", desc: "Dreams we'll share 🌟", emoji: "🌻", gift: "Can't wait for all our future adventures together! ✈️🗺️" },
      { id: 4, title: "Compliment Bouquet", desc: "Beautiful words for you 💐", emoji: "🌷", gift: "You're brilliant, kind, funny, and absolutely wonderful!" },
      { id: 5, title: "Memory Box", desc: "Special moments 📦", emoji: "🌼", gift: "Every moment with you becomes a treasured memory! 💫" },
      { id: 6, title: "Surprise Date", desc: "Adventure awaits! 🎭", emoji: "🌹", gift: "Let's plan something magical together soon! 🎪✨" }
    ];

    return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 relative">
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute text-green-300 sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            >
              🌟
            </div>
          ))}
        </div>

        <div className="relative z-10 p-4">
          <header className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl text-white rpg-text-glow mb-4">
              🌸 Gift Garden 🌸
            </h1>
            <p className="text-green-300">Click the flowers to reveal special surprises!</p>
          </header>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {gifts.map(gift => (
                <div key={gift.id} className="rpg-panel text-center hover:glow transition-all duration-300">
                  <div 
                    className={`cursor-pointer ${openedGifts.has(gift.id) ? 'opacity-50' : 'hover:scale-110'} transition-transform`}
                    onClick={() => openGift(gift.id)}
                  >
                    <div className="text-6xl mb-4 sparkle">{gift.emoji}</div>
                    <h3 className="text-lg text-green-400 mb-2">{gift.title}</h3>
                    <p className="text-sm text-gray-300 mb-4">{gift.desc}</p>
                    
                    {openedGifts.has(gift.id) ? (
                      <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-4 rounded-lg border-4 border-yellow-600 mb-4">
                        <p className="text-purple-900 font-bold">{gift.gift}</p>
                      </div>
                    ) : (
                      <button className="rpg-button text-xs">Pick Flower</button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mb-8">
              <div className="rpg-panel inline-block">
                <p className="text-lg text-white">
                  🌺 Flowers Picked: <span className="text-pink-400">{openedGifts.size}</span> / {gifts.length}
                </p>
                {openedGifts.size === gifts.length && (
                  <p className="text-yellow-400 mt-2">🎉 Garden Complete! You found all the surprises! 🎉</p>
                )}
              </div>
            </div>

            <div className="text-center">
              <button onClick={goBack} className="rpg-button">
                🏠 Back to Map
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Mini-Games Screen
  if (currentScreen === 'minigames') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
        <div className="relative z-10 p-4">
          <header className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl text-white rpg-text-glow mb-4">
              🎮 Mini-Games Den 🎮
            </h1>
            <p className="text-blue-300">Pop the balloons to show your love!</p>
          </header>

          <div className="max-w-4xl mx-auto">
            <div className="rpg-panel mb-8">
              <div className="text-center mb-4">
                <h2 className="text-xl text-yellow-400 mb-2">Bloon Popper</h2>
                <p className="text-lg text-white">Score: <span className="text-pink-400">{score}</span></p>
              </div>
              
              <div className="relative bg-gradient-to-br from-sky-400 to-blue-500 rounded-lg h-96 overflow-hidden">
                {balloons.map(balloon => (
                  !balloon.popped && (
                    <div
                      key={balloon.id}
                      className="absolute cursor-pointer hover:scale-110 transition-transform"
                      style={{
                        left: `${balloon.x}%`,
                        top: `${balloon.y}%`,
                      }}
                      onClick={() => popBalloon(balloon.id)}
                    >
                      <div className="w-8 h-10 bg-pink-400 rounded-full relative border-2 border-pink-600 float">
                        <div className="absolute top-1 left-2 w-1 h-1 bg-white rounded-full"></div>
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0.5 h-3 bg-pink-600"></div>
                      </div>
                    </div>
                  )
                ))}
                
                {balloons.every(b => b.popped) && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-4">🎉</div>
                      <p className="text-white text-xl mb-4">All balloons popped!</p>
                      <button onClick={initBalloonGame} className="rpg-button">
                        Play Again
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="text-center">
              <button onClick={goBack} className="rpg-button">
                🏠 Back to Map
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Gallery Screen
  if (currentScreen === 'gallery') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900 relative">
        <div className="relative z-10 p-4">
          <header className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl text-white rpg-text-glow mb-4">
              📸 Gallery of Moments 📸
            </h1>
            <p className="text-yellow-300">Beautiful memories we&apos;ve shared!</p>
          </header>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              { title: "First Date", desc: "When everything started ✨", emoji: "💫" },
              { title: "Movie Night", desc: "Cozy times together 🍿", emoji: "🎬" },
              { title: "Adventure Day", desc: "Exploring the world 🗺️", emoji: "🎒" },
              { title: "Lazy Sunday", desc: "Perfect peaceful moments 😌", emoji: "☀️" },
              { title: "Birthday Celebration", desc: "Special day together 🎂", emoji: "🎉" },
              { title: "Future Dreams", desc: "All the plans we make 💭", emoji: "🌟" }
            ].map((memory, i) => (
              <div key={i} className="rpg-panel text-center hover:glow transition-all duration-300">
                <div className="pixel-border p-4 bg-gradient-to-br from-gray-800 to-gray-900 mb-4">
                  <div className="text-6xl mb-2">{memory.emoji}</div>
                </div>
                <h3 className="text-lg text-pink-400 mb-2">{memory.title}</h3>
                <p className="text-sm text-gray-300">{memory.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button onClick={goBack} className="rpg-button">
              🏠 Back to Map
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Diary Screen
  if (currentScreen === 'diary') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative">
        <div className="relative z-10 p-4">
          <header className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl text-white rpg-text-glow mb-4">
              📖 Bloon&apos;s Diary 📖
            </h1>
            <p className="text-purple-300">Sweet messages from the heart</p>
          </header>

          <div className="max-w-4xl mx-auto">
            <div className="rpg-panel mb-8">
              <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-8 rounded-lg border-4 border-yellow-600">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">💌</div>
                  <h2 className="text-2xl text-purple-800">Dear Bloons,</h2>
                </div>
                
                <div className="text-purple-900 leading-relaxed space-y-4">
                  <p>
                    Every single day with you feels like a gift. You bring so much joy, laughter, 
                    and love into my life that I sometimes can&apos;t believe how lucky I am.
                  </p>
                  <p>
                    Your beautiful mind, your kind heart, and your amazing spirit make you 
                    the most incredible person I&apos;ve ever known. I love how you see the world, 
                    how you care about others, and how you make everything better just by being you.
                  </p>
                  <p>
                    Thank you for being my partner, my best friend, and my greatest adventure. 
                    I can&apos;t wait to create more magical moments together! 💕
                  </p>
                  <div className="text-right mt-6">
                    <p className="text-lg">With all my love,</p>
                    <p className="text-xl text-pink-600">Your devoted admirer 💖</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button onClick={goBack} className="rpg-button">
                🏠 Back to Map
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Secret Chest Screen
  if (currentScreen === 'chest') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-900 via-orange-900 to-red-900 relative">
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute text-yellow-300 sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            >
              ✨
            </div>
          ))}
        </div>

        <div className="relative z-10 p-4">
          <header className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl text-white rpg-text-glow mb-4">
              🎁 Secret Treasure 🎁
            </h1>
            <p className="text-yellow-300">A special surprise just for you!</p>
          </header>

          <div className="max-w-4xl mx-auto">
            <div className="rpg-panel mb-8 text-center">
              <div className="p-8">
                <div className="text-8xl mb-6 sparkle">💎</div>
                <h2 className="text-3xl text-yellow-400 mb-6">The Ultimate Treasure</h2>
                <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-6 rounded-lg border-4 border-yellow-600 mb-6">
                  <p className="text-2xl text-purple-900 mb-4">
                    <strong>YOU ARE THE TREASURE! 💖</strong>
                  </p>
                  <p className="text-lg text-purple-800">
                    No gem, no gold, no magical artifact could ever compare to having you in my life. 
                    You are the most precious treasure in my universe! ✨
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-4xl sparkle">💎</div>
                  <div className="text-4xl sparkle">👑</div>
                  <div className="text-4xl sparkle">🌟</div>
                  <div className="text-4xl sparkle">💝</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button onClick={goBack} className="rpg-button">
                🏠 Back to Map
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main RPG Map Interface
  return (
    <>
      {/* Pixel Pet Cursor Follower */}
      <div 
        className="cursor-pet"
        style={{
          left: mousePos.x + 10,
          top: mousePos.y - 30,
        }}
      >
        🎈
      </div>

      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative">
        {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-300 sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 p-4">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl text-white rpg-text-glow mb-2">
            🏰 Bloonsland Explorer 🏰
          </h1>
          <p className="text-pink-300 text-sm md:text-base">
            Choose your destination, brave adventurer!
          </p>
        </header>

        {/* RPG Map Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Castle of Love */}
          <div 
            className="rpg-panel hover:glow transition-all duration-300 cursor-pointer float"
            onClick={() => setCurrentScreen('castle')}
          >
            <div className="text-center">
              <div className="text-4xl mb-4">🏰</div>
              <h3 className="text-lg text-pink-400 mb-2">Castle of Love</h3>
              <p className="text-sm text-gray-300 mb-4">
                Discover why Bloons is so amazing
              </p>
              <button className="rpg-button text-xs">Enter Castle</button>
            </div>
          </div>

          {/* Gift Garden */}
          <div 
            className="rpg-panel hover:glow transition-all duration-300 cursor-pointer float" 
            style={{animationDelay: '0.5s'}}
            onClick={() => setCurrentScreen('garden')}
          >
            <div className="text-center">
              <div className="text-4xl mb-4">🌸</div>
              <h3 className="text-lg text-green-400 mb-2">Gift Garden</h3>
              <p className="text-sm text-gray-300 mb-4">
                Special presents and surprises
              </p>
              <button className="rpg-button text-xs">Explore Garden</button>
            </div>
          </div>

          {/* Mini-Games Den */}
          <div 
            className="rpg-panel hover:glow transition-all duration-300 cursor-pointer float" 
            style={{animationDelay: '1s'}}
            onClick={() => setCurrentScreen('minigames')}
          >
            <div className="text-center">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-lg text-blue-400 mb-2">Mini-Games Den</h3>
              <p className="text-sm text-gray-300 mb-4">
                Fun games to play together
              </p>
              <button className="rpg-button text-xs">Play Games</button>
            </div>
          </div>

          {/* Gallery of Moments */}
          <div 
            className="rpg-panel hover:glow transition-all duration-300 cursor-pointer float" 
            style={{animationDelay: '1.5s'}}
            onClick={() => setCurrentScreen('gallery')}
          >
            <div className="text-center">
              <div className="text-4xl mb-4">📸</div>
              <h3 className="text-lg text-yellow-400 mb-2">Gallery of Moments</h3>
              <p className="text-sm text-gray-300 mb-4">
                Beautiful memories together
              </p>
              <button className="rpg-button text-xs">View Gallery</button>
            </div>
          </div>

          {/* Bloon's Diary */}
          <div 
            className="rpg-panel hover:glow transition-all duration-300 cursor-pointer float" 
            style={{animationDelay: '2s'}}
            onClick={() => setCurrentScreen('diary')}
          >
            <div className="text-center">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-lg text-purple-400 mb-2">Bloon&apos;s Diary</h3>
              <p className="text-sm text-gray-300 mb-4">
                Sweet messages and thoughts
              </p>
              <button className="rpg-button text-xs">Read Diary</button>
            </div>
          </div>

          {/* Secret Chest */}
          <div 
            className="rpg-panel hover:glow transition-all duration-300 cursor-pointer float sparkle" 
            style={{animationDelay: '2.5s'}}
            onClick={() => setCurrentScreen('chest')}
          >
            <div className="text-center">
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="text-lg text-yellow-400 mb-2">Secret Chest</h3>
              <p className="text-sm text-gray-300 mb-4">
                Something special awaits...
              </p>
              <button className="rpg-button text-xs">Open Chest</button>
            </div>
          </div>
        </div>

        {/* Bottom stats/info */}
        <div className="mt-12 text-center">
          <div className="rpg-panel inline-block mb-4">
            <p className="text-sm text-gray-300">
              💕 Days Together: <span className="text-pink-400">∞</span> • 
              🏆 Love Level: <span className="text-yellow-400">MAX</span> • 
              ✨ Magic Points: <span className="text-blue-400">9999</span>
            </p>
          </div>
          <div>
            <button 
              onClick={toggleMusic}
              className="rpg-button text-xs"
            >
              {musicEnabled ? '🔊 Music ON' : '🔇 Music OFF'}
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}