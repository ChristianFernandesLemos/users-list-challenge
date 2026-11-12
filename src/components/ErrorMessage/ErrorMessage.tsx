interface ErrorMessageProps {
  message: string
  onRetry: () => void
}

export function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div role="alert">
      <p>{message}</p>
      <button type="button" onClick={onRetry}>
        Tentar novamente
      </button>
    </div>
  )
}