import React, { useState, useContext, useEffect } from "react";
import Module from "./../../../../components/Module";
import { AppContext } from "../../../../context/AppContext";
import { SaveOutlined , UserOutlined} from "@ant-design/icons";

import { Button, Divider, Input, message } from "antd";
import CommonModule2Modal from "../../../COMMONS/modules/CommonModule2/CommonModule2Modal";
import CommmonModule1 from "../../../COMMONS/modules/CommonModule1/CommonModule1";

export default function Module1() {
  const [state, dispatch] = useContext(AppContext);
  const [value, setValue] = useState(state.name);
  const [openModal, setOpenModal] = useState(false)

  function saveValue() {
    dispatch({
      type: "NAME",
      payload: value,
    });
    message.success("Saved value!")
  }

  function onClose(){
    setOpenModal(false)
  }

  useEffect(() =>{
    setValue(state.name)
  }, [state.name])

  return (
    <Module
      name={"Module One-SubModule1"}
      content={
        <div>
          <CommonModule2Modal openModal={openModal} onClose={onClose}/>
          <div>AddContent to Product 2 - Module 3</div>
          <br />
          <Button onClick={() => setOpenModal(true)}>
            <UserOutlined />
          </Button>
          <Input
            style={{ width: 120 }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></Input>
          <Button onClick={() => saveValue()}>
            <SaveOutlined />
          </Button>
          <Divider/>
          <CommmonModule1/>
        </div>
      }
    ></Module>
  );
}
