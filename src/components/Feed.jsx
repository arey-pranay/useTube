// import React, { useState, useEffect } from "react";
// import { Box, Stack, Typography } from "@mui/material";
// import { Sidebar, Videos } from "./";
// import { fetchFromAPI } from "../utils/fetchFromAPI";

// const Feed = () => {
//   const [selectedCategory, setSelectedCategory] = useState("New");
//   useEffect(() => {
//     fetchFromAPI(`search?part=snippet&q=${selectedCategory}`);
//   }, [selectedCategory]);
//   return (
//     <Stack sx={{ flexDirection: { sm: "column", md: "row" } }}>
//       <Box
//         sx={{
//           height: { sm: "auto", md: "92vh" },
//           borderRight: "1px solid #3d3d3d",
//           px: { sm: 0, md: 2 },
//         }}
//       >
//         <Sidebar
//           selectedCategory={selectedCategory}
//           setSelectedCategory={setSelectedCategory}
//         ></Sidebar>{" "}
//         <Typography
//           className="copyright"
//           variant="body2"
//           sx={{ mt: 1.5, color: "#fff" }}
//         >
//           Copyright 2023 Pranay Parikh
//         </Typography>
//       </Box>
//       <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
//         <Typography
//           variant="h4"
//           fontWeight="bold"
//           mb={2}
//           sx={{ color: "white" }}
//         >
//           {selectedCategory}
//           <span style={{ color: "#3A2EFE" }}>Videos</span>
//         </Typography>
//         <Videos videos={[]} />
//       </Box>
//     </Stack>
//   );
// };

// export default Feed;

import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, Sidebar } from "./";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright © 2022 JSM Media
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#3A2EFE" }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
