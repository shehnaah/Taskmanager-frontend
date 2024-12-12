import React, { useState } from "react";
import "./statistic.css";
import { Box, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { motion } from "framer-motion";

// Enum-like object for Switch Options
const SwitchOptions = {
  NEWBIE: "Newbie",
  OVER_2_YEARS: "Over 2 Years",
};

export default function App() {
  // State initialization with "Newbie" option by default
  const [activeOption, setActiveOption] = useState(SwitchOptions.NEWBIE);

  // State for Year and Month combined selection
  const [selectedYearMonth, setSelectedYearMonth] = useState("2023 - January");

  // Data for Newbie and Over 2 Years (for demonstration purposes)
  const newbieData = [70, 40, 60, 35, 86]; // Newbie stats as percentages
  const over2YearsData = [80, 70, 90, 75, 60]; // Over 2 Years stats as percentages

  // Function to handle the switch click
  const handleSwitchClick = (option) => {
    setActiveOption(option); // Update the active option when clicked
  };

  // Function to render vertical bars based on active option
  const renderBars = () => {
    const data = activeOption === SwitchOptions.NEWBIE ? newbieData : over2YearsData;

    return data.map((value, index) => (
      <div
        key={index}
        className="Bar"
        style={{
          height: `${value}%`,
          backgroundColor: "rgb(87, 123, 200)",
          width: "25px",
          margin: "0 10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          borderRadius: "20px",
        }}
      >
        <div className="BarValue" style={{ color: "white", paddingBottom: "5px" }}>
          {value}%
        </div>
      </div>
    ));
  };

  // Generate year-month options
  const yearMonthOptions = [];
  const years = ['2020', '2021', '2022', '2023', '2024'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  years.forEach(year => {
    months.forEach(month => {
      yearMonthOptions.push(`${year} - ${month}`);
    });
  });

  return (
    <div className="background" style={{ width: "30%", height: "39vh", marginTop: "8px", marginLeft: "8px", borderRadius: "25px",minWidth:"250px" }}>
      <div className="SwitchContainer">
        {/* Newbie Switch Option */}
        <div
          className="ToggleItem"
          style={{
            backgroundColor: activeOption === SwitchOptions.NEWBIE ? "#4067e6" : "transparent",
            color: activeOption === SwitchOptions.NEWBIE ? "white" : "gray"
          }}
          onClick={() => handleSwitchClick(SwitchOptions.NEWBIE)}
        >
          <div className="Text">Newbie</div>
        </div>

        {/* Over 2 Years Switch Option */}
        <div
          className="ToggleItem"
          style={{
            backgroundColor: activeOption === SwitchOptions.OVER_2_YEARS ? "#4067e6" : "transparent",
            color: activeOption === SwitchOptions.OVER_2_YEARS ? "white" : "gray"
          }}
          onClick={() => handleSwitchClick(SwitchOptions.OVER_2_YEARS)}
        >
          <div className="Text">Over 2 Years</div>
        </div>
      </div>

      <Box sx={{ mt: "0", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h6" sx={{ marginRight: 2 ,fontSize:".9rem"}}>Monthly statistics</Typography>

        {/* Combined Year-Month Dropdown */}
        <FormControl sx={{ minWidth: 80 }}>
        <Select
            value={selectedYearMonth}
            onChange={(e) => setSelectedYearMonth(e.target.value)}
            label="Year - Month"
            sx={{
              fontSize: "0.875rem",  // Reduced font size for Select dropdown
              border: "none",         // No border for the Select dropdown
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",       // Remove the outline
              },
              "& .MuiSelect-icon": {
                color: "gray",        // Optionally, change the color of the dropdown arrow
              }
            }}
          >
            {yearMonthOptions.map((option) => (
              <MenuItem key={option} value={option} sx={{ fontSize: "0.875rem", border: "none" }}> {/* Reduced font size for MenuItem */}
                {option}
              </MenuItem>
            ))}
          </Select>
                  </FormControl>
      </Box>

      {/* Display the corresponding bars */}
      <div className="BarsContainer">{renderBars()}</div>
    </div>
  );
}
