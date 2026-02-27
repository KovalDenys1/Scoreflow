export default function Badge({ status }) {
  const getStyles = () => {
    switch (status.toLowerCase()) {
      case 'live':
        return 'bg-danger text-white';
      case 'finished':
        return 'bg-text-muted text-white';
      case 'upcoming':
        return 'bg-info text-white';
      default:
        return 'bg-card text-text-secondary';
    }
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStyles()}`}>
      {status.toLowerCase() === 'live' && (
        <span className="w-2 h-2 mr-1.5 bg-white rounded-full animate-pulse"></span>
      )}
      {status.toUpperCase()}
    </span>
  );
}
