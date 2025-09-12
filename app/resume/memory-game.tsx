'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/app/ui/button';

const getApiUrl = () => {
  if (Math.random() > 0.5) {
    return 'https://api.thedogapi.com/';
  } else {
    return 'https://api.thecatapi.com/';
  }
};

interface Card {
  id: string;
  url: string;
}

export default function MemoryGame() {
  const [cards, setCards] = useState<Card[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [currMatched, setCurrMatched] = useState<number[]>([]);
  const [matching, setMatching] = useState(false);
  const [turns, setTurns] = useState(0);
  const [status, setStatus] = useState('start');

  useEffect(() => {
    (async () => {
      const response = await fetch(`${getApiUrl()}v1/images/search?limit=8`);
      const images = await response.json();
      const cards = [...images, ...images];
      setCards(cards);
    })();
  }, []);

  const flipped = (i: number) => {
    return matched.includes(i) || currMatched.includes(i);
  };

  const onFlip = (i: number) => () => {
    if (matching) return;
    if (flipped(i)) return;

    const curr = [...currMatched];
    if (curr.length < 2) {
      curr.push(i);
      setCurrMatched(curr);
    }

    if (curr.length === 2) {
      setMatching(true);
    }
  };

  useEffect(() => {
    if (!matching) return;

    const [a, b] = currMatched;
    const imageA = cards[a];
    const imageB = cards[b];
    if (imageA.id === imageB.id) {
      const newMatched = [...matched, a, b];
      setMatched(newMatched);
      if (newMatched.length === cards.length) {
        setStatus('won');
      }
      setCurrMatched([]);
      setTurns((v) => v + 1);
      setMatching(false);
    } else {
      setTimeout(() => {
        setCurrMatched([]);
        setTurns((v) => v + 1);
        setMatching(false);
      }, 1000);
    }
  }, [matching]);

  const onReset = () => {
    setMatched([]);
    setCurrMatched([]);
    setTurns(0);
    setStatus('start');
  };

  return (
    <div className='flex flex-col gap-3 relative z-0'>
      <div className='absolute h-full w-full p-1'></div>
      <p className='text-white flex items-center justify-around'>
        <span>Turns: {turns + 1}</span>&nbsp;
        <Button onClick={onReset}>Restart</Button>
        <span>{status === 'won' && 'You Won!'}</span>
      </p>
      <div
        className={
          'p-2 grid grid-cols-4 gap-3 min-w-[320px]' +
          (status === 'won' ? ' box' : '')
        }
        style={{
          pointerEvents: matching ? 'none' : 'auto',
        }}
      >
        {cards.map((image, i) => (
          <FlipCard
            key={i}
            image={image}
            flipped={flipped(i)}
            onFlip={onFlip(i)}
          />
        ))}
      </div>
    </div>
  );
}

type CardProps = {
  image: Card;
  flipped: boolean;
  onFlip: () => void;
};

export const FlipCard = ({ image, flipped, onFlip }: CardProps) => {
  return (
    <div
      onClick={onFlip}
      className='h-16 relative cursor-pointer bg-gray-200 rounded-sm'
    >
      <div
        className='absolute w-full h-full transition-all'
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'none',
        }}
      >
        <div
          className='absolute w-full h-full '
          style={{
            backfaceVisibility: 'hidden',
          }}
        />
        <div
          className='absolute w-full h-full'
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <img className='w-full h-full object-cover' src={image.url} />
        </div>
      </div>
    </div>
  );
};
