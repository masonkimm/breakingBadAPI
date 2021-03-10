import React from 'react';
import Spinner from '../ui/Spinner';
import CharacterItem from './CharacterItem';

export default function CharacterGrid({ items, isLoading }) {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((item) => (
        // <h1 key={item.char_id}>{item.name}</h1>
        <CharacterItem key={item.char_id} item={item} />
      ))}
    </section>
  );
}
