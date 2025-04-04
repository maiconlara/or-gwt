"use client";
import React from "react";

interface ColorPickerProps {
    color: string;
    setColor: (value: string) => void;
    name: string;
}

export const ColorPicker = ({ color = "#ffffff", setColor, name }: ColorPickerProps) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setColor(event.target.value);
    };

    return (
        <div>
            <label
                htmlFor={name}
                className="flex h-[25px] w-[25px] cursor-pointer rounded-md border border-lines"
                style={{ backgroundColor: color }}
            >
                <input
                    type="color"
                    id={name}
                    name={name}
                    className="invisible h-[25px] w-[25px]"
                    value={color}
                    onChange={handleChange}
                />
            </label>
        </div>
    );
};
