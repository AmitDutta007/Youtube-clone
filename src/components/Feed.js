import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/FetchFromApi";

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New')

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
  }, [selectedCategory])


  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "89vh" }, px: { sx: 0, md: 2 } }}>

        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
          Copyright text
        </Typography>
      </Box>

      <Box pt={1} pl={2} sx={{ overflowY: "auto", height: "89vh", flex: 2 }}>
        <Typography variant="h4" fontWeight='bold' mb={2} sx={{ color: '#000' }}>
          New <span style={{ color: '#fff' }}>videos</span>
        </Typography>
      </Box>

      <Videos />

    </Stack>





  )
}

export default Feed