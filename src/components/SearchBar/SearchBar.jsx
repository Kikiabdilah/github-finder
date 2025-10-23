import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '../common/Input';
import { Button } from '../common/Button';

export const SearchBar = ({ onSearch, loading }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="mb-8">
      <div className="flex gap-2">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e)}
          placeholder="Enter your GitHub username..."
          icon={Search}
        />
        <Button onClick={handleSubmit} disabled={loading}>
          {loading ? 'Searching for...' : 'Search'}
        </Button>
      </div>
    </div>
  );
};