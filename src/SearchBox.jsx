import TextField from '@mui/material/TextField';

export default function SearchBox (){
    return (
        <div>
            <h1>Search for a weather</h1>
            <form action="">
                <TextField id="city" label="City Name" variant="outlined" />
            </form>
        </div>
    )
}