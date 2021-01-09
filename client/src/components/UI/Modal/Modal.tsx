import React from 'react'
import styles from './modal.module.scss'
import { Modal, Button } from 'antd';


const ModalComponent: React.FC<any> = ({ children, isModalVisible, handleOk, handleCancel }) => {
  return (
    <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      {children}
    </Modal>
  )
}

export default ModalComponent
