import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useState, useEffect, useRef } from 'react'
import { MenuElement, Footer, Header, Scrollbar } from '@components'

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

    const handlePaginationClick = (index: number) =>
    {
        if(currentSectionIndex === index) return
        setCurrentSectionIndex(index)
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
                <meta name="description" content="Projet de développement. Transformation du site de Burger King par Raphaël. Découvrez plus de projets sur github." />
                <meta name="keywords" content="burgerking, project, front" />
                <meta name="robots" content="noindex, nofollow" />
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="French" />
                <link rel="icon" type="image/png" sizes="64x64" href="/icon.png"></link>
            </Head>
            <Header />
            <main>
                {
                    fetchedData?.map((product, index) =>
                    (
                        <MenuElement product={product} key={index} reff={(el: any) => sectionsRef.current[index] = el} />
                    ))
                }
                <Scrollbar>
                    {
                        fetchedData?.map((product, index) =>
                        (
                            <div onClick={() => handlePaginationClick(index)} key={index} ></div>
                            // <div className={index === currentSectionIndex ? s.active : ''} onClick={() => handlePaginationClick(index)} key={index} ></div>
                        ))
                    }
                </Scrollbar>
            </main>
            <Footer />
        </>
    )
}

export default Home
