import { useEffect, useId, useRef } from 'react'
import type { User } from '../../types/user'

interface UserDetailsModalProps {
  user: User
  onClose: () => void
}

export function UserDetailsModal({ user, onClose }: UserDetailsModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const titleId = useId()

  useEffect(() => {
    const dialog = dialogRef.current
    if (dialog && !dialog.open) {
      dialog.showModal()
    }
  }, [])

  const closeDialog = () => dialogRef.current?.close()

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) closeDialog()
      }}
    >
      <div>
        <h2 id={titleId}>{user.name}</h2>
        <dl>
          <dt>Email</dt>
          <dd>{user.email}</dd>
          <dt>Telefone</dt>
          <dd>{user.phone}</dd>
          <dt>Empresa</dt>
          <dd>{user.company.name}</dd>
          <dt>Cidade</dt>
          <dd>{user.address.city}</dd>
        </dl>
        <button type="button" onClick={closeDialog}>
          Fechar
        </button>
      </div>
    </dialog>
  )
}
