import { MapPin, ExternalLink } from 'lucide-react';

export const UserInfo = ({ location, blog }) => {
  return (
    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
      {location && (
        <div className="flex items-center gap-1">
          <MapPin className="w-4 h-4" />
          {location}
        </div>
      )}
      {blog && (
        <a
          href={blog.startsWith('http') ? blog : `https://${blog}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-blue-400"
        >
          <ExternalLink className="w-4 h-4" />
          Website
        </a>
      )}
    </div>
  );
};