"use client";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

// Customizing the Item for styling similar to your design
const Item = styled(Paper)(({ theme }) => ({
    background: 'none',
    boxShadow: 'none',
    color: '#39FF14', // Value color
    fontWeight: 500,
    fontSize: '1rem',
    padding: theme.spacing(1),
    textAlign: 'left'
}));

const Label = styled('div')({
    color: '#7FFFD4', // Label color
    fontWeight: 600,
    fontSize: '1rem',
    padding: '4px 8px'
});

export default function TrainTicketDetails({ ticketData }) {
    return (
        <Box
            sx={{
                flexGrow: 1,
                maxWidth: 800,
                mx: 'auto',
                p: 4,
                borderRadius: 4,
                background: 'linear-gradient(180deg, #2a1047 0%, #111111 100%)',
                boxShadow: 3
            }}>
            <div
                style={{
                    color: 'white',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    fontSize: '1.5rem',
                    marginBottom: '1rem'
                }}>
                Train Ticket Details
            </div>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Label>PNR Number : </Label>
                    <Item item xs={6}>{ticketData.pnrNumber}</Item>
                </Grid>
                {/* <Grid item xs={4}></Grid> */}

                <Grid item xs={6}>
                    <Label>Train Number : </Label>
                    <Item xs={6}>{ticketData.trainNumber}</Item>
                </Grid>
                {/* <Grid item xs={4}><Item>{ticketData.trainNumber}</Item></Grid> */}

                <Grid item xs={6}><Label>Train Name</Label></Grid>
                <Grid item xs={6}><Item>{ticketData.trainName}</Item></Grid>

                <Grid item xs={6}><Label>Date of Journey</Label></Grid>
                <Grid item xs={6}><Item>{ticketData.dateOfJourney}</Item></Grid>

                <Grid item xs={6}><Label>Source Station</Label></Grid>
                <Grid item xs={6}><Item>{ticketData.sourceStation}</Item></Grid>

                <Grid item xs={6}><Label>Destination Station</Label></Grid>
                <Grid item xs={6}><Item>{ticketData.destinationStation}</Item></Grid>

                <Grid item xs={6}><Label>Journey Class</Label></Grid>
                <Grid item xs={6}><Item>{ticketData.journeyClass}</Item></Grid>

                <Grid item xs={6}><Label>Chart Status</Label></Grid>
                <Grid item xs={6}><Item>{ticketData.chartStatus}</Item></Grid>

                <Grid item xs={6}><Label>Booking Fare</Label></Grid>
                <Grid item xs={6}><Item>{ticketData.bookingFare}</Item></Grid>

                <Grid item xs={6}><Label>Arrival Date</Label></Grid>
                <Grid item xs={6}><Item>{ticketData.arrivalDate}</Item></Grid>
            </Grid>
        </Box>
    );
}
