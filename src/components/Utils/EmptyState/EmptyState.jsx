const EmptyState = ({ msg }) => {
  return (
    <div className="d-flex justify-content-center h-100 border border-3 rounded">
      <div className="d-flex align-items-center">
        <span><strong role="status">{msg}</strong></span>
      </div>
    </div>
  )
}

export default EmptyState