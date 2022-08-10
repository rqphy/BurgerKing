import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect, useRef } from 'react'
import { MenuElement, Footer, Header } from '@components'

const Home: NextPage = () => {
    const [fetchedData, setFetchedData] = useState<any[]>([])
    const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(0)
    const sectionsRef = useRef<Array<HTMLDivElement | null>>([])

    const fetchData = () =>
    {
        fetch('/api/staticdata',{
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => 
        {
            const parsedData = JSON.parse(data).data
            setFetchedData(parsedData)
        })
    }

    const scrollTo = (index: number) =>
    {
        sectionsRef.current[index]?.scrollIntoView()
    }

    const getNextSectionIndex = () =>
    {
        if(currentSectionIndex < sectionsRef.current.length)
        return setCurrentSectionIndex(currentSectionIndex + 1)

    }

    const handleMainClick = ():void =>
    {
        getNextSectionIndex()
    }
    
    useEffect(() =>
    {
        fetchData()
    }, [])

    useEffect(() =>
    {
        scrollTo(currentSectionIndex)
    }, [currentSectionIndex])

    return (
        <>
            <Head>
                <title>Burger King Remastered</title>
            </Head>
            <Header />
            <main onClick={handleMainClick} >
                {
                    fetchedData?.map((product, index) =>
                    (
                        <MenuElement product={product} key={index} reff={(el: any) => sectionsRef.current[index] = el} />
                    ))
                }
            </main>
            <Footer />
        </>
    )
}

export default Home
