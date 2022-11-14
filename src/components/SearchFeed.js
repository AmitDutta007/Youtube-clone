import React, { useEffect, useState } from "react";
import { Stack, Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Sidebar from './Sidebar'

import Videos from "./Videos";
import { fetchFromAPI } from "../utils/FetchFromApi";

const SearchFeed = ({ selectedCategory, setSelectedCategory }) => {

  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();


  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => setVideos(data.items))
  }, [searchTerm])


  return (
    // <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
    //   <Box sx={{ height: { sx: "auto", md: "89vh" }, px: { sx: 0, md: 0 } }}>
    //     <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

    //   </Box>
    //   <Box p={2} sx={{ overflowY: "auto", height: "89vh", flex: 2 }}>

    //     <Typography variant="h4" fontWeight='bold' mb={2} sx={{ color: '#000' }}>
    //       Search Results for: <span style={{ color: '#fff' }}>{searchTerm} </span>
    //     </Typography>

    //     <Videos videos={videos} />
    //   </Box>
    // </Stack>

    <Box p={2} sx={{ overflowY: "auto", height: "89vh", flex: 2 }}>

      <Typography variant="h4" fontWeight='bold' mb={2} sx={{ color: '#000' }}>
        Search Results for: <span style={{ color: '#fff' }}>{searchTerm} </span>
      </Typography>

      <Videos videos={videos} />
    </Box>



  )
}

export default SearchFeed