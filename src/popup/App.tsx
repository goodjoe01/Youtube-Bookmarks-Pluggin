import React, {useState, useEffect} from 'react'
import { TBookmark } from '../content/types'
import Bookmark from './Bookmark'
import { getActiveTabURL } from '../content/utils'
import './app.css'

type props = {
  videoTitle: string
  bookmarks: TBookmark[]
  setBookmarks: React.Dispatch<React.SetStateAction<TBookmark[]>>
}

const Bookmarks = ({bookmarks, setBookmarks, videoTitle}: props) => (
  <>
    <div className='bookmarks-app__title'>
    <h1 className='bookmarks-app__title-h1'> {videoTitle} </h1>
    </div>
    <div className='bookmarks-app__content'>
      { bookmarks.length>0?
        (bookmarks.map((bookmark)=>(
          <Bookmark key={bookmark.id} bookmark={bookmark} setBookmarks={setBookmarks} />
        ))) :
        (<div className='bookmarks-app__messages'>Add your bookmarks 📑😄. </div>)
      }
    </div>
  </>

)

export const App = () => {
  const [bookmarks, setBookmarks] = useState<TBookmark[]>([]);
  const [isYoutube, setIsYoutube] = useState(true); 
  const [title, setTitle] = useState('');

  const truncateTitle = (title: string) => {
    const length = 59;
    title = title.substring(3, title.length)
    if (title.length > length) {
      return title.substring(0, length) + '...';
    }
    return title;
  }

  const getCurrentBookmarks = async ()=> {
    const tab = await getActiveTabURL();
    
    if(tab.url && tab.url.includes('youtube.com/watch')){
      const title = truncateTitle(tab.title);
      setTitle(title);
      const queryParameters = tab.url.split('?')[1];
      const urlParameters = new URLSearchParams(queryParameters);
      const currentVideo = urlParameters.get('v') as string;

      chrome.storage.sync.get([currentVideo], data => {
        const currentVideoBookmarks: TBookmark[] = data[currentVideo] ? JSON.parse(data[currentVideo]) : [];
        setBookmarks(currentVideoBookmarks);
      })
    }
    else{
      setIsYoutube(false);
    }
  }

  useEffect(()=>{
    getCurrentBookmarks();
  }, [])

  return (
    <div className='bookmarks-app'>
      {
        isYoutube? <Bookmarks bookmarks={bookmarks} setBookmarks={setBookmarks} videoTitle={title} /> : <div className='bookmarks-app__messages'>Sorry, this site is not available for bookmarking 😥.</div>
      }
    </div>
  )
}
