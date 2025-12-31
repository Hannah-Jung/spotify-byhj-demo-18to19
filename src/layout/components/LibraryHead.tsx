import { Box, Button, Typography, styled } from '@mui/material'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import AddIcon from '@mui/icons-material/Add'
import useGetCurrentUserPlaylists from '../../hooks/useGetCurrentUserPlaylists'

const Head = styled("div")({
  display: "flex",
  alignItems: "center",
  padding: "8px",
  justifyContent: "space-between",
})

const LibraryHead = () => {
  const {data: playlistsData} = useGetCurrentUserPlaylists({limit:10, offset:0})
  const totalPlaylists = playlistsData?.pages[0]?.total || 0
  const handleCreatePlaylist = () => {
    
  }
  return (
    <Head>
      <Box display={"flex"} alignItems={"center"}>
        <BookmarkIcon sx={{ marginRight: "20px"}}/>
        <Typography variant='h2' fontWeight={700}>
          Your Library ({totalPlaylists})
        </Typography>
      </Box>
      <Button onClick={handleCreatePlaylist}>
        <AddIcon/>
      </Button>
    </Head>
  )
}

export default LibraryHead