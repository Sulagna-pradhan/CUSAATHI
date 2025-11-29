import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search as SearchIcon, Filter, BookOpen, Users, Bell, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';
import { SearchBar, Button, Badge, Card } from '../components/common';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);
  const [activeTab, setActiveTab] = useState('all');

  // Update URL when query changes
  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    if (newQuery) {
      setSearchParams({ q: newQuery });
    } else {
      setSearchParams({});
    }
  };

  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'notices', label: 'Notices', icon: Bell },
    { id: 'resources', label: 'Resources', icon: BookOpen },
    { id: 'people', label: 'People', icon: Users },
    { id: 'tools', label: 'Tools', icon: Wrench },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-900 text-white py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-10 w-80 h-80 bg-white/10 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-900/60 blur-3xl rounded-full" />
        </div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="primary" size="lg" className="mb-6 bg-white/20 text-white border-white/30">
              <SearchIcon className="w-4 h-4" />
              Search
            </Badge>
            
            <h1 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
              Search CUSAATHI
            </h1>
            
            <p className="text-base md:text-xl text-emerald-100 mb-8 leading-relaxed">
              Find resources, notices, people, and tools across the platform
            </p>

            {/* Search Input */}
            <div className="relative max-w-2xl mx-auto">
              <SearchBar
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="What are you looking for?"
                className="w-full shadow-2xl"
                variant="glass"
                size="lg"
                autoFocus
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container-custom py-12 min-h-[60vh]">
        <div className="max-w-4xl mx-auto space-y-8">

        {/* Filters/Tabs */}
        <div className="flex flex-wrap gap-2 justify-center">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/25'
                    : 'bg-white dark:bg-dark-card text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-border border border-gray-200 dark:border-dark-border'
                }`}
              >
                {Icon && <Icon className="w-4 h-4" />}
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Results Area (Placeholder) */}
        <div className="space-y-6">
          {query ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 dark:bg-dark-card rounded-full flex items-center justify-center mx-auto mb-4">
                <SearchIcon className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Searching for "{query}"
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Search functionality will be implemented here.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary-500/5 to-secondary-500/5 border border-primary-100 dark:border-primary-900/30">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Popular Searches
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Exam Schedule', 'Library', 'Hostel', 'Placement'].map((tag) => (
                    <button
                      key={tag}
                      onClick={() => handleSearch(tag)}
                      className="text-sm px-3 py-1 rounded-lg bg-white dark:bg-dark-card text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="p-6 rounded-2xl bg-gradient-to-br from-secondary-500/5 to-primary-500/5 border border-secondary-100 dark:border-secondary-900/30">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Recent Resources
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  No recent resources viewed
                </p>
              </div>
            </div>
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
