import React from 'react'
import { TBookmark } from '../content/types'
import {AiFillPlayCircle, AiFillBackward} from 'react-icons/ai'
import {BsFillPlayFill} from 'react-icons/bs'
import {MdDeleteForever} from 'react-icons/md'
import { getActiveTabURL } from '../content/utils'
import './bookmark.css'

type props = {
  bookmark: TBookmark
  setBookmarks: React.Dispatch<React.SetStateAction<TBookmark[]>>
}

const Bookmark = ({bookmark, setBookmarks}: props) => {
  const size = '22px';

  const goBack = async () => {
    const activeTab = await getActiveTabURL();

    chrome.tabs.sendMessage(activeTab.id, {
      type: 'GO_BACK',
      currentTime: bookmark.time
    })
  }

  const deleteBookmark = async () => {
    const activeTab = await getActiveTabURL();

    chrome.tabs.sendMessage(activeTab.id, {
      type: 'DELETE',
      bookmarkId: bookmark.id
    }, setBookmarks);
  }

  return (
    <div className='bookmarks-contaier'>
      <div className='bookmarks-contaier__content'>
        <p> {bookmark.title} </p>
      </div>
      <div className='bookmarks-contaier__buttons'>
        <button className='back-icon' type='button' onClick={goBack}>
          <BsFillPlayFill style={{width: size, height:size}}/>
        </button>
        <button className='delete-icon' onClick={deleteBookmark} >
          <MdDeleteForever className='delete-icon' style={{width:size, height: size}}/>
        </button>
      </div>
    </div>
  )
}

export default Bookmark
