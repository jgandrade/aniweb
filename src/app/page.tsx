import { Box, Typography } from "@mui/material";
import Popular from "@/components/Popular/Popular";
import Trending from "@/components/Trending/Trending";

const Home = async () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Typography variant="h4">Aniweb</Typography>
      <Box>
        <Popular />
        <Trending />
      </Box>
    </main>
  );
};

export default Home;
