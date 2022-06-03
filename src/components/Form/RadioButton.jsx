import React, {forwardRef, useEffect, useState} from 'react';
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import {useDispatch, useSelector} from "react-redux";
import {userAPI} from "../../actions/users";

const stylePositions = {
    fontFamily: 'Nunito',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    color: '#000000',
}

const styleFormControlLabel = {
    marginBottom: '-9px',
}

const styleRadio = {
    '&, &.MuiRadio-root':{
        color: '#D0CFCF',
    },
    '&, &.Mui-checked': {
        color: '#00BDD3',
    }
}

const RadioButton = forwardRef((props, ref) => {
    const dispatch = useDispatch()
    const positions = useSelector(state => state.users.positions)
    positions.slice(0, 1).map(p => p.id);
    const [selectPositions, setSelectPositions] = useState(1)

    const selected = (e) =>{
        setSelectPositions(e.target.value)
    }

    useEffect(() =>{
        dispatch(userAPI.getPositions())
    },[dispatch])

    return (
        <div>
            <FormLabel sx={stylePositions} id="Positions">Select your position</FormLabel>
            <RadioGroup
                value={selectPositions}
                onChange={selected}
            >

                {positions.map(p =>
                    <FormControlLabel sx={styleFormControlLabel}  {...props} inputRef={ref} key={p.id} value={p.id} control={<Radio sx={styleRadio} />} label={p.name} />
                )}
            </RadioGroup>

        </div>
    );
});

export default RadioButton;