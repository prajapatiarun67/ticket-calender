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
    // textAlign: 'left'
}));

const Label = styled('span')({
    color: '#7FFFD4',
    fontWeight: 600,
    fontSize: '1rem',
    padding: '4px 8px',
});

const SectionTitle = styled('div')({
    color: '#7FFFD4',
    fontWeight: 700,
    fontSize: '1.1rem',
    letterSpacing: '1px',
    margin: '18px 0 8px 0',
});

// Reusable field component for best practice
const TicketField = ({ label, value }) => (
    <Item>
        <Label>{label}</Label> <span>{value}</span>
    </Item>
);

export default function TrainTicketDetails({ ticketData }) {
    return (
        <>
            <Box
                sx={{
                    flexGrow: 1,
                    maxWidth: 800,
                    mx: 'auto',
                    p: 4,
                    borderRadius: 4,
                    background: 'linear-gradient(180deg, #2a1047 0%, #111111 100%)',
                    boxShadow: 3,
                }}
            >
                <div
                    style={{
                        color: 'white',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        fontSize: '1.5rem',
                        marginBottom: '1rem',
                    }}
                >
                    Train Ticket Details
                </div>
                <div>
                    <hr style={{ border: '1px solid #39FF14', marginBottom: '16px' }} />
                </div>

                {/* Journey Info */}
                <SectionTitle>Journey Information</SectionTitle>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TicketField label="PNR Number :" value={ticketData.pnrNumber} />
                    </Grid>
                    <Grid item xs={3}>
                        <TicketField label="Train Number :" value={ticketData.trainNumber} />
                    </Grid>
                    <Grid item xs={3}>
                        <TicketField label="Train Name :" value={ticketData.trainName} />
                    </Grid>
                </Grid>

                {/* Dates and Stations */}
                <SectionTitle>Travel & Stations</SectionTitle>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TicketField label="Date of Journey :" value={ticketData.dateOfJourney} />
                    </Grid>
                    <Grid item xs={6}>
                        <TicketField label="Source Station :" value={ticketData.sourceStation} />
                    </Grid>
                    <Grid item xs={6}>
                        <TicketField label="Destination Station :" value={ticketData.destinationStation} />
                    </Grid>
                    <Grid item xs={3}>
                        <TicketField label="Journey Class :" value={ticketData.journeyClass} />
                    </Grid>
                    <Grid item xs={3}>
                        <TicketField label="Chart Status :" value={ticketData.chartStatus} />
                    </Grid>
                </Grid>

                {/* Fare Info */}
                <SectionTitle>Fare Details</SectionTitle>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <TicketField label="Booking Fare :" value={ticketData.bookingFare} />
                    </Grid>
                    <Grid item xs={8}>
                        <TicketField label="Arrival Date :" value={ticketData.arrivalDate} />
                    </Grid>
                </Grid>
            </Box>
            <h2 style={{ marginTop: '24px' }}>Passenger Details</h2>
            <table style={{ border: '1px solid', margin: '0 auto', width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>S. No.</th>
                        <th>Current Status</th>
                        <th>Booking Status</th>
                        <th>Current Berth No.</th>
                        <th>Booking Berth No.</th>
                        <th>Quota</th>
                    </tr>
                </thead>
                <tbody>
                    {ticketData.passengerList.map((p) => (
                        <tr key={p.passengerSerialNumber}>
                            <td>{p.passengerSerialNumber}</td>
                            <td>{p.currentStatusDetails}</td>
                            <td>{p.bookingStatusDetails}</td>
                            <td>{p.currentBerthNo}</td>
                            <td>{p.bookingBerthNo}</td>
                            <td>{p.passengerQuota}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
