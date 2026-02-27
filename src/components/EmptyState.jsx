import { AlertCircle } from 'lucide-react';

export default function EmptyState({ message, icon: Icon = AlertCircle, action }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center bg-surface border border-border rounded-lg">
      <div className="w-16 h-16 bg-card rounded-full flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-text-muted" />
      </div>
      <h3 className="text-lg font-medium text-text-primary mb-2">No results found</h3>
      <p className="text-text-secondary mb-6 max-w-md">{message}</p>
      {action && (
        <button
          onClick={action.onClick}
          className="px-4 py-2 bg-primary text-white rounded-md font-medium hover:bg-orange-600 transition-colors"
        >
          {action.label}
        </button>
      )}
    </div>
  );
}
