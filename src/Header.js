import Typography from '@mui/material/Typography';


const Header = () => {
    return (
        <div>
            <Typography sx={{ fontWeight: 'bold' }} variant="h4" mt={1} mb={4}>
                Password Generator
            </Typography>
        </div>
    );
};

export default Header;
