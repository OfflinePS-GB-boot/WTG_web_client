import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div>
      <h2>404 Not found</h2>
      <p>Такой страницы не найдено!</p>
      <p> Погнали искать приключения!  <Link to='/'> На главную! </Link> </p>
    </div>
  )
}
