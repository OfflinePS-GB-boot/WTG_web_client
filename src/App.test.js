import { render, screen } from '@testing-library/react';
import {Router} from 'react-router-dom';
import App from './App';
import Header from '../src/components/Header/Header';
import {BrowserRouter} from 'react-router-dom';
import userEvent from '@testing-library/user-event'

test('Показывается плейсхолдер в инпут', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const inputNode = screen.getByPlaceholderText('введи место или дату');
  expect(inputNode).toBeInTheDocument();
});

test('Показываются ссылки', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const headerLinks = screen.getByText('События')
  expect(headerLinks).toBeInTheDocument();
});

//!данный тест актуален только с тестовым набором данных
//!TODO поменять тест, когда будут данные
test('Подгрузились карточки рекомендации', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const Links = screen.getByText('place4')
  expect(Links).toBeInTheDocument();
});

test('рендер стартового экрана, клик на ссылку о нас, отображение страницы о нас', () => {
  render(
    <BrowserRouter>
    <App />
  </BrowserRouter>
  )
  expect(screen.getByText('Рекомендации')).toBeInTheDocument()
  
  userEvent.click(screen.getByRole('aboutUs_btn'))

  expect(screen.getByText('Про нас')).toBeInTheDocument()
})