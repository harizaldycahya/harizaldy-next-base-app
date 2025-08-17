'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'

type Movie = {
  Title: string
  Year: string
  imdbID: string
  Poster: string
}

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get('https://www.omdbapi.com/', {
          params: {
            s: 'Pocong',
            apikey: '13306989',
          },
        })
        setMovies(res.data.Search || [])
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchMovies()
  }, [])

  return (
    <main className="p-6">
      
    </main>
  )
}