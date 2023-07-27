import React , {useContext, useState}from 'react'
import CommonModulePeople from './CommonModulePeople';
import { SaveOutlined } from "@ant-design/icons";
import { Modal, message, Button } from 'antd';
import { AppContext } from '../../../../context/AppContext';


export default function CommonModule2Modal({openModal, onClose}) {
  const [state, dispatch] = useContext(AppContext)

  const [value, setValue] = useState(state.name !== null ? state.name : "");

  function saveValue() {
    dispatch({
      type: "NAME",
      payload: value,
    });
    message.success("Saved value!")
    onClose()
  }

  return (
    <Modal open={openModal} onClose={onClose} title={"CommonModule2 - Select Guest "} footer={<Button onClick={()=>saveValue()}><SaveOutlined/></Button>}>
      <CommonModulePeople setValue={setValue}/>
    </Modal>
  )
}
