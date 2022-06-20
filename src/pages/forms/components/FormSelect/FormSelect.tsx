import React, {useState} from 'react';
import s from "../../Form.module.scss";

import {
    FormControl,
    makeStyles,
    MenuItem,
    OutlinedInput,
    Select,
    SelectChangeEvent,
    selectClasses
} from "@mui/material";

type PropsType = {
    caption: string
    placeholder?: string
}

const FormSelect: React.FC<PropsType> = (props) => {
    const {
        caption,
        placeholder,
    } = props



    const state = [
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'},
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'},
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'},
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'},
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'},
    ];

    const [options, setOptions]= useState<string[]>([])

    const handleChange = (event: SelectChangeEvent<typeof options>) => {
        const {
            target: { value },
        } = event;
        setOptions(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div className={s.wrap}>
            <div className={s.caption}>{caption}</div>
            <FormControl fullWidth>
                <Select

                    displayEmpty
                    onChange={handleChange}
                    value={options}
                    renderValue={(selected) => {
                        if (selected.length === 0) {
                            return <em>{placeholder}</em>;
                        }
                        return selected.join(', ');
                    }}>
                    {state.map(el => {
                        return (
                            <MenuItem key={el.value} value={el.value}>{el.label}</MenuItem>
                        )
                    })}
                </Select>


            </FormControl>
        </div>

    );
};

export default FormSelect;
