import React, { useEffect, useState } from 'react'
import BooksComponent from '../../Component/BooksComponent';
import PodcastsComponent from '../../Component/PodcastsComponent';
import Dashnav from '../../Component/Dashnav';
import Sidebar from '../../Component/SideNavbar';
import BooksData from '../../Component/Data/BooksData'
import PodcastsData from '../../Component/Data/PodcastsData';
import DocumnetsData from '../../Component/Data/DocumentsData';
import DownloadsComponent from '../../Component/DownloadsComponent';
import GetData from '../../Api/GetData';


export default function Resources() {
    const [booksvisible, setbooksvisible] = useState(6)
    const [podcastsvisible, setpodcastsvisible] = useState(6)
    const [data, setData] = useState([]);

    const [documenrtsvisible, setdocumenrtsvisible] = useState(6)
    const [state, setState] = useState({
        PodcastsData: PodcastsData,
        BooksData: BooksData,
        DocumnetsData: DocumnetsData,
        // booksvisible: 6,
        // podcastsvisible: 6,
        // documenrtsvisible: 6,
    })
    // const loadMore = (name) => {
    //     setState(old => old[name] + 4)
    // }
    // const loadMore = (name) => {
    //     setState((old) => {
    //         return { [name]: old[name] + 6 }
    //     });
    // }
    // const loadLess = (name) => {
    //     setState(() => {
    //         return { [name]: 6 };
    //     })
    // }
    // const loadLess = (name) => {
    //     setState(() => {
    //         return { [name]: 6 };
    //     });
    // }
    useEffect(() => {
        const response = GetData.Resource();
        console.log(response)
        response.then(value => {
            console.log(value)
            if(value){
                setData(value.data.resources);
                console.log(value.data.resources)

            }
     
        //   setLoading(false);
        })
      }, [])

    const RenderingBooks = data.slice(0, booksvisible).map((books, index) => {
        return (
            <BooksComponent
            key={index}
                Imgsrc={books.imageUrl}
                title={books.title}
                authur={books.authur}
                cost={books.cost}
            />
        )
    });
    const RenderingPodcasts = PodcastsData.slice(0, podcastsvisible).map((podcasts, index) => {
        return (
            <PodcastsComponent
            key={index}
                Imgsrc={podcasts.imgSrc}
                title={podcasts.title}
                showBy={podcasts.showBy}
            />
        )
    });
    const RenderingDownloads = DocumnetsData.slice(0, documenrtsvisible).map((pdf, index) => {
        return (
            <DownloadsComponent
            key={index}
                Imgsrc={pdf.imgSrc}
                fileName={pdf.fileName}
            />
        )
    })
    return <>
        <div className="d-inline-flex w-100">
            <Sidebar />
            <div style={{ width: "inherit" }}>
                <Dashnav />
                <div className='container mx-auto mt-3 px-md-5 Table' >
                    <p className='fs-40 Gothic_3D'>Resources</p>
                    <div className='bg-dash brdr p-4 my-3'>
                        <p className='fs-20'>Books</p>
                        <div className='row my-4 g-4'>
                            {RenderingBooks}
                        </div>
                        <div className="text-center mt-5">
                            {BooksData.length > 3 && (
                                booksvisible < BooksData.length ? (
                                    <button className="bg_theme brdr text-white no_brdr" onClick={(() => setbooksvisible(booksvisible + 4))} style={{ cursor: "pointer" }}>
                                        load More
                                    </button>
                                ) : (
                                    <button className="bg_theme brdr text-white no_brdr" onClick={(() => setbooksvisible(booksvisible - 4))} style={{ cursor: "pointer" }}>
                                        Show Less
                                    </button>
                                )
                            )}
                        </div>
                    </div>
                    <div className='bg-dash brdr p-4 my-3'>
                        <p className='fs-20'>Podcasts</p>
                        <div className='row my-4 g-4'>
                            {RenderingPodcasts}
                        </div>
                        <div className="text-center mt-5">
                            {PodcastsData.length > 3 && (
                                podcastsvisible < PodcastsData.length ? (
                                    <button className="bg_theme brdr text-white no_brdr" onClick={(() => setpodcastsvisible(podcastsvisible + 4))} style={{ cursor: "pointer" }}>
                                        load More
                                    </button>
                                ) : (
                                    <button className="bg_theme brdr text-white no_brdr" onClick={(() => setpodcastsvisible(podcastsvisible - 4))} style={{ cursor: "pointer" }}>
                                        Show Less
                                    </button>
                                )
                            )}
                        </div>
                    </div>
                    <div className='bg-dash brdr p-4 my-3'>
                        <p className='fs-20'>Downloads</p>
                        <div className='row my-4 g-4'>
                            {RenderingDownloads}
                        </div>
                        <div className="text-center mt-5">
                            {DocumnetsData.length > 3 && (
                                documenrtsvisible < DocumnetsData.length ? (
                                    <button className="bg_theme brdr text-white no_brdr" onClick={(() => setdocumenrtsvisible(documenrtsvisible + 4))} style={{ cursor: "pointer" }}>
                                        load More
                                    </button>
                                ) : (
                                    <button className="bg_theme brdr text-white no_brdr" onClick={(() => setdocumenrtsvisible(documenrtsvisible - 4))} style={{ cursor: "pointer" }}>
                                        Show Less
                                    </button>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
}
