import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';


// import SearchIcon from '@mui/icons-material/Search';


const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handelsubmit = (e) => {
        e.preventDefault();
        if (searchTerm) {
            navigate(`/search/${searchTerm}`);

            setSearchTerm('');
        }


    }

    return (
        <Paper
            component="form"
            onSubmit={handelsubmit}
            sx={{
                border: "1px solid none",
                borderRadius: 20,
                boxShadow: 'none',
                pl: 2,
                mr: { sm: 5 }
            }}
        >
            <input
                className='search-bar'
                placeholder="search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <IconButton type='submit' sx={{ p: '10px', color: 'black' }}>
                <Search />
            </IconButton>

        </Paper>
    )
}

export default SearchBar