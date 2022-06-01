import React, {forwardRef, useEffect, useState} from 'react';
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import {useDispatch, useSelector} from "react-redux";
import {userAPI} from "../../actions/users";

const RadioButton = forwardRef((props, ref) => {
    const dispatch = useDispatch()
    const positions = useSelector(state => state.users.positions)
    positions.slice(0, 1).map(p => p.id);
    const [selectPositions, setSelectPositions] = useState(1)

    const selected = (e) =>{
        console.log(e.target.value)
        setSelectPositions(e.target.value)
    }

    useEffect(() =>{
        dispatch(userAPI.getPositions())
    },[dispatch])

    return (
        <div>
            <FormLabel id="Positions">Gender</FormLabel>
            <RadioGroup
                value={selectPositions}
                onChange={selected}
            >

                {positions.map(p =>
                    <FormControlLabel {...props} inputRef={ref} key={p.id} value={p.id} control={<Radio />} label={p.name} />
                )}
            </RadioGroup>

        </div>
    );
});

export default RadioButton;