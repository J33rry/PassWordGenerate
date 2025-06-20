"use client";

import { Slider } from "@mui/material";

export default function AnimatedSlider({ value, onChange }) {
    return (
        <div className="">
            <Slider
                value={value}
                onChange={onChange}
                size="normal"
                aria-label="Small"
                valueLabelDisplay="auto"
                min={6}
                max={16}
            />
        </div>
    );
}
