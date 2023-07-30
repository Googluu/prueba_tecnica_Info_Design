import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import DateFnsAdapter from "@date-io/date-fns";
// import { Grid } from "@material-ui/core";
import { DatePicker } from "@mui/x-date-pickers";
import { Grid } from "@mui/material";

const DateRangePicker = ({
  fechaInicial,
  fechaFinal,
  onFechaInicialChange,
  onFechaFinalChange,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Grid container justify="space-around">
        <DatePicker
          label="Fecha Inicial"
          format="yyyy-MM-dd"
          value={fechaInicial}
          onChange={onFechaInicialChange}
        />
        <DatePicker
          label="Fecha Final"
          format="yyyy-MM-dd"
          value={fechaFinal}
          onChange={onFechaFinalChange}
        />
      </Grid>
    </LocalizationProvider>
  );
};

export default DateRangePicker;
