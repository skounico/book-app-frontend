'use client'

import * as React from 'react';
import axiosClient from '../app/services/axiosClient'
import { useEffect } from 'react';

export default function Home () {
  const [bookName, setBookName] = React.useState('')
  const [bookAuthor, setBookAuthor] = React.useState('')
  const [bookPages, setBookPages] = React.useState('')
  const [bookCurrentPage, setBookCurrentPage] = React.useState('')

  function CalculateBookReadPercentage(){
    return "Você leu " + ((parseInt(bookCurrentPage)/parseInt(bookPages)*100).toFixed(1)) + "% do livro: " + bookName + "."
  }

  return (
    <div>
      <h1>Registrar Livro</h1>
      <div className="flex flex-col m-2 border-solid border-2 w-1/2">
        <div className='m-1'>
          <input 
            type="text" 
            placeholder="Nome do Livro" 
            value={bookName} 
            onChange={(e) => {
              setBookName(e.target.value)
            }}
            className='border-solid border-2 border-gray-600 w-1/2 m-1'
          />
          <label>{bookName}</label>
        </div>
        <div className='m-1'>
          <input 
            type="text" 
            placeholder="Nome do Autor" 
            value={bookAuthor} 
            onChange={(e) => {
              setBookAuthor(e.target.value)
            }}
            className='border-solid border-2 border-gray-600 w-1/2 m-1'
          />
          <label>{bookAuthor}</label>
        </div>
        <div className='m-1'>
          <input 
            type="number" 
            placeholder="Número de páginas" 
            value={bookPages} 
            onChange={(e) => {
              setBookPages(e.target.value)
            }}
            className='border-solid border-2 border-gray-600 w-1/2 m-1'
          />
          <label>{bookPages}</label>
        </div>
        <div className='m-1'>
          <input 
            type="number" 
            placeholder="Página atual" 
            value={bookCurrentPage} 
            onChange={(e) => {
              setBookCurrentPage(e.target.value)
            }}
            className='border-solid border-2 border-gray-600 w-1/2 m-1'
          />
          <label>{bookCurrentPage}</label>
        </div>
        <div className='m-1'>
          <label>{CalculateBookReadPercentage()}</label>
        </div>
      </div>
    </div>
  )
}