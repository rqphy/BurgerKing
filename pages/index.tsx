import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useState, useEffect, useRef } from 'react'
import { MenuElement, Footer, Header } from '@components'

const Home: NextPage = () => {
    const [fetchedData, setFetchedData] = useState<any[]>([])
    const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(0)
    const sectionsRef = useRef<Array<HTMLDivElement | null>>([])
    const timerRef = useRef<any>(null)

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
        if(currentSectionIndex > sectionsRef.current.length - 1) return
        return setCurrentSectionIndex(currentSectionIndex + 1)
    }

    const getPrevSectionIndex = () =>
    {
        if(currentSectionIndex < 1) return
        return setCurrentSectionIndex(currentSectionIndex - 1)
    }

    const handlePageScroll = (_event: any):void =>
    {
        const scrollYDelta = _event.deltaY
        const deltaSensitivity = 60

        if(scrollYDelta > deltaSensitivity)
        {
            getNextSectionIndex()
        } else if(scrollYDelta < -deltaSensitivity)
        {
            getPrevSectionIndex()
        }
    }
    
    useEffect(() =>
    {
        fetchData()
        window.addEventListener('wheel', handlePageScroll)
        return () => clearTimeout(timerRef.current)
    }, [])

    useEffect(() =>
    {
        scrollTo(currentSectionIndex)

        window.removeEventListener('wheel', handlePageScroll)
        timerRef.current = setTimeout(() => {
            window.addEventListener('wheel', handlePageScroll)
        }, 1000);
    }, [currentSectionIndex])

    return (
        <>
            <Head>
                <title>Burger King Remastered</title>
            </Head>
            <Header />
            <main>
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
