import React from 'react'
import { cls } from 'common/utils'
import { modal } from './index'

interface Props{
  title: string
  desc: string
  content: React.ReactNode
  okText: string
  cancelText: string
  onOk: () => void
  onCancel: () => void
  className: string
}

export default function confirm(params: Partial<Props>) {
  const {
    title,
    desc,
    content,
    okText = '确认',
    cancelText = '取消',
    onOk,
    onCancel,
    className,
  } = params
  function ok() {
    modal.close()
    if (onOk) {
      onOk()
    }
  }
  function cancel() {
    if (onCancel) {
      onCancel()
    }
    modal.close()
  }

  function renderContent() {
    if (content) {
      return content
    }
    return (
      <>
        {title && <div className="modal-title">{title}</div> }
        {desc && <div className="modal-desc">{desc}</div> }
      </>
    )
  }
  modal.open(
    <>
      {renderContent()}
      <div className="modal-actions">
        <div className="modal-btn btn-cancel" onClick={cancel}>
          {cancelText}
        </div>
        <div className="modal-btn btn-confirm primary" onClick={ok}>
          {okText}
        </div>
      </div>
    </>,
    {
      className: cls('modal-confirm', className),
    },
  )
}
