import React from 'react'
import { Stack } from '@mui/system'
import { categories } from "../utils/Constant"

// const selectedCategory = 'New'


const Sidebar = ({ selectedCategory, setSelectedCategory }) => {

    return (
        <Stack
            direction="row"
            sx={{
                overflowY: 'auto',
                height: { sx: 'auto', md: '95%' },
                flexDirection: { md: 'column' },
            }}
          
            >

            {
                categories.map((category) => {

                    return (
                        <button
                            className="category-btn"
                            onClick={() => setSelectedCategory(category.name)}
                            style={{
                                background: category.name === selectedCategory && "#fff", color: "black",
                            }}>
                            <span>{category.icon}</span>
                            <span>{category.name}</span>
                        </button>
                    )
                })
            }

        </Stack>
    )
}

export default Sidebar
// style={{ display: "flex", alignItems: "center" }}