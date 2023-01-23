import { DOMMessage, DOMMessageResponse, TBookmark } from './types';
import { getTime } from './utils'; 
import './styles.css'

  
let currentVideo: string = "";
let currentVideoBookmarks: TBookmark[] = [];
let youtubeVideo: HTMLVideoElement;


const getBookmarks = async () => {
  const data = await chrome.storage.sync.get([currentVideo]);
  const bookmarks : TBookmark[] = data[currentVideo] ? JSON.parse(data[currentVideo]): [];

  return bookmarks;
}

const checkIfBookmarkExist = async (id: string) => {
  const currentBookmarks = await getBookmarks();
  console.log(currentBookmarks);
  console.log('ID', id)
  const exists = currentBookmarks.find((bookmark)=>{bookmark.id===id});
  console.log('exists: ', exists)
  if(exists) return true
  else return false;
}

const addBookmarkEventHandler = async () => {
  const currentVideoTime = youtubeVideo.currentTime;
  const existe = await checkIfBookmarkExist(currentVideoTime.toString())
  console.log('EXISTE EL BOOKMARK?: ', existe);

  if (existe===false){
    const newBookmark: TBookmark = {
      id: currentVideoTime.toString(),
      title: 'Bookmark at ' + getTime(currentVideoTime),
      time: currentVideoTime
    };
      
    chrome.storage.sync.set({
      [currentVideo]: JSON.stringify([...currentVideoBookmarks, newBookmark])
    });

    currentVideoBookmarks = await getBookmarks(); // 3
  } 
  
}

const newVideoLoaded = async () => {

  const bookmarkExists = document.querySelector('.bookmark-btn');

  currentVideoBookmarks = await getBookmarks();
 
  if(!bookmarkExists) {
    const youtubeLeftControls = document.querySelector('.ytp-left-controls');

    youtubeVideo = document.querySelector('.video-stream') as HTMLVideoElement;

    const container = document.createElement('div');
    container.className = 'bookmark-icon-container'

    const bookmarkBtn = document.createElement('img');

    bookmarkBtn.src = chrome.runtime.getURL("bookmark-icon.png");
    bookmarkBtn.className = 'ytp-button bookmark-btn'
    bookmarkBtn.style.width = '30px';
    bookmarkBtn.style.height = '30px';

    container.appendChild(bookmarkBtn);
    youtubeLeftControls?.appendChild(container);

    bookmarkBtn.addEventListener('click', addBookmarkEventHandler)

  }
}
// Function called when a new message is received
const messagesFromBackground = async (msg: DOMMessage, sender: chrome.runtime.MessageSender, sendResponse: (response: TBookmark[]) => void) => {
  
   if(msg.type === 'NEW_VIDEO') {
    
    currentVideo = msg.videoId;
    newVideoLoaded();

  } else if (msg.type === 'GO_BACK') {

    youtubeVideo.currentTime = msg.currentTime;

  } else if (msg.type === 'DELETE') {
     
    console.log('ARREGLO ANTES DEL FILTRO: ',currentVideoBookmarks)

    currentVideoBookmarks = currentVideoBookmarks.filter((bookmark)=>bookmark.id != msg.bookmarkId)

    console.log('ARREGLO DSPUES DEL FILTRO: ',currentVideoBookmarks)
    
    chrome.storage.sync.set({ [currentVideo]: JSON.stringify(currentVideoBookmarks) });

    sendResponse(currentVideoBookmarks);

  }

}



chrome.runtime.onMessage.addListener(messagesFromBackground);

