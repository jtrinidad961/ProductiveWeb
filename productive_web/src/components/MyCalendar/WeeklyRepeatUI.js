import React, { useState } from "react";
import { dltDoc } from "../../db/db-actions";
import { Button, ButtonGroup, Form } from "react-bootstrap";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

const WeeklyRepeatUI = (props) => {
  const [value, setValue] = useState(
    props.repeatDoc !== null ? props.repeatDoc.data().repeatVal : []
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    props.passRepeatData(value);
  };

  const handleChange = (val) => {
    setValue(val);
  };

  const handleEndRepeat = () => {
    setValue([]);
    dltDoc(props.repeatDoc.ref);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Label>Repeat every week on:</Form.Label>
      <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
        <ToggleButton variant="outline-primary" size="sm" id="Su" value={1}>
          S
        </ToggleButton>
        <ToggleButton variant="outline-primary" size="sm" id="Mo" value={2}>
          M
        </ToggleButton>
        <ToggleButton variant="outline-primary" size="sm" id="Tu" value={3}>
          T
        </ToggleButton>
        <ToggleButton variant="outline-primary" size="sm" id="We" value={4}>
          W
        </ToggleButton>
        <ToggleButton variant="outline-primary" size="sm" id="Th" value={5}>
          T
        </ToggleButton>
        <ToggleButton variant="outline-primary" size="sm" id="Fr" value={6}>
          F
        </ToggleButton>
        <ToggleButton variant="outline-primary" size="sm" id="Sa" value={7}>
          S
        </ToggleButton>
      </ToggleButtonGroup>
      <ButtonGroup>
        <Button variant="primary mr-1" size="sm" type="submit">
          Create
        </Button>
        {props.repeatDoc !== null ? (
          <Button variant="primary mr-1" size="sm" onClick={handleEndRepeat}>
            End Repeat
          </Button>
        ) : null}
      </ButtonGroup>
    </Form>
  );
};

export default WeeklyRepeatUI;
