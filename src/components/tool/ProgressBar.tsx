interface ProgressBarProps {
  visible: boolean
  color?: string
  label?: string
}

export default function ProgressBar({ visible, color, label = 'Processing' }: ProgressBarProps) {
  if (!visible) return null

  return (
    <div role="status" aria-label={label} className="w-full">
      <div className="w-full h-1.5 bg-border rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full animate-pulse-slow origin-left w-full ${color ?? 'bg-primary'}`}
        />
      </div>
      <p className="sr-only">{label}, please wait...</p>
    </div>
  )
}
