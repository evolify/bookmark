import { cls } from "common/utils"
import "./style.scss"

interface Props extends React.ComponentPropsWithoutRef<"svg"> {}

export function Search() {
  return (
    <svg
      className="icon icon-search"
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
    >
      <path
        d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
        fill="currentColor"
      ></path>
    </svg>
  )
}

export function Sidebar() {
  return (
    <svg
      className="icon icon-sidebar"
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
    >
      <rect
        className="bg-layer"
        x={2}
        y={4}
        width={20}
        height={16}
        rx={2}
        ry={2}
        stroke="currentColor"
        fill="none"
      />
      <line x1={8} y1={4} x2={8} y2={20} stroke="currentColor" />
      <line x1={3} y1={7} x2={6} y2={7} stroke="currentColor" />
      <line x1={3} y1={10} x2={6} y2={10} stroke="currentColor" />
      <line x1={3} y1={13} x2={6} y2={13} stroke="currentColor" />
      <rect
        className="fg-layer"
        x={2}
        y={4}
        width={6}
        height={16}
        rx={2}
        ry={2}
        fill="currentColor"
      />
    </svg>
  )
}

export function Edit() {
  return (
    <svg
      className="icon icon-edit"
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
    >
      <path
        d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"
        fill="currentColor"
      ></path>
    </svg>
  )
}

export function Check({ className }: Props) {
  return (
    <svg
      className={cls("icon icon-check", className)}
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
    >
      <path
        d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
        stroke="currentColor"
      ></path>
    </svg>
  )
}

export function Close() {
  return (
    <svg
      className="icon icon-close"
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
    >
      <path
        d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
        fill="currentColor"
      ></path>
    </svg>
  )
}

export function Delete() {
  return (
    <svg
      className="icon icon-delete"
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
    >
      <path
        d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
        fill="currentColor"
      ></path>
    </svg>
  )
}

export function Copy() {
  return (
    <svg
      className="icon icon-copy"
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="ContentCopyRoundedIcon"
    >
      <path
        d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1m5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2m-2 0H9V4h9z"
        stroke="currentColor"
      ></path>
    </svg>
  )
}

export function ArrowTopRight() {
  return (
    <svg
      className="icon icon-arrow-top-right"
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
    >
      <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z" stroke="currentColor"></path>
    </svg>
  )
}
