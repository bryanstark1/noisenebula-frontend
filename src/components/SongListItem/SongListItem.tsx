import FavoriteButton from '../FavoriteButton/FavoriteButton';
import PlayButton from "../PlayButton/PlayButton";
import OptionsButton from "../OptionsButton/OptionsButton";
import './SongListItem.css';

interface SongListItemProps {
  modalSongDetails: () => void,
  song: any,
  onOpen: () => void,
  setSelectedSong: (value: string) => void,
  user: any,
  fetchSongs: () => void,
  setNowPlaying: () => void,
};

export default function SongListItem({ song, onOpen, modalSongDetails, setSelectedSong, user, fetchSongs, setNowPlaying }: SongListItemProps) {
  return (
    // <tr className='song-list-item'>
    //   <td>
    //     {user &&
    //       <FavoriteButton user={user} song={song} fetchSongs={fetchSongs} />
    //     }
    //   </td>
    //   <td className='song-artwork'><PlayButton song={song} setNowPlaying={setNowPlaying} /><img src={song.artwork} alt={song.album} /></td>
    //   <td className='song-title'>{song.title}</td>
    //   <td className='song-artist'>{song.artist}</td>
    //   <td className='song-album'>{song.album}</td>
    //   <td className='icon-container'>
    //     <OptionsButton song={song} onOpen={onOpen} modalSongDetails={modalSongDetails} setSelectedSong={setSelectedSong} />
    //   </td>
    // </tr>
    <div className='song-list-item-new'>
      {user &&
        <FavoriteButton user={user} song={song} fetchSongs={fetchSongs} />
      }
      <div className='song-artwork'>
        <PlayButton song={song} setNowPlaying={setNowPlaying} /><img src={song.artwork} alt={song.album} />
      </div>
      <div className='song-info'>
        <p className='song-title'>{song.title}</p>
        <p className='artist-album'><span className='song-artist'>{song.artist}</span><span className='song-album'> - {song.album}</span></p>
      </div>
      <OptionsButton song={song} onOpen={onOpen} modalSongDetails={modalSongDetails} setSelectedSong={setSelectedSong} />
    </div>
  );
};