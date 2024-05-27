import { cls } from 'common/utils'
import React from 'react'
import { createRoot, Root } from 'react-dom/client'

interface ModalOptions {
  className?: string
  onClose?: () => void
}

export class Modal {
  container: Element

  root: Root

  options: ModalOptions

  insertContainer() {
    this.container = document.createElement('div')
    this.container.id = 'modal-container'
    this.container.className = cls(
      this.options.className,
    )
    document.body.appendChild(this.container)
    this.root = createRoot(this.container)
  }

  open(el: React.ComponentType, options?: ModalOptions): void

  open(el: React.ReactNode, options?: ModalOptions): void

  open(el: React.ReactNode | React.ComponentType, options: ModalOptions = {}) {
    this.options = options
    this.insertContainer()
    document.body.style.overflow = 'hidden'

    function renderContent() {
      if (typeof el === 'function') {
        const Child = el as React.ComponentType
        return <Child />
      }
      return el
    }

    this.root.render(
      <div className="modal-wrapper" onClick={() => this.close()}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          {renderContent()}
        </div>
      </div>,
    )
  }

  // 关闭弹窗
  close() {
    document.body.style.overflow = 'auto'
    this.root.unmount()
    document.body.removeChild(this.container)
    if (this.options.onClose) {
      this.options.onClose()
    }
  }
}

export default new Modal()
