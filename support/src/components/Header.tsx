import { useState, useRef, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { categories } from '../data/categories';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<typeof categories[0][]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }
    const lowerQuery = searchQuery.toLowerCase();
    const results = categories.filter(cat => 
      cat.title.toLowerCase().includes(lowerQuery) || 
      cat.options.some(opt => opt.toLowerCase().includes(lowerQuery))
    );
    setSearchResults(results);
  }, [searchQuery]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchResults([]);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <span className="font-bold text-xl text-blue-600 tracking-tight">Reubens Odd Jobs</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
            <a href="#support" className="text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Support</a>
            <a href="#faq" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">FAQ</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
          </nav>

          {/* Desktop Search */}
          <div className="hidden md:flex items-center relative" ref={searchRef}>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all"
                placeholder="What do you need help with?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => {
                  if (searchQuery.trim() !== '') {
                    const lowerQuery = searchQuery.toLowerCase();
                    setSearchResults(categories.filter(cat => 
                      cat.title.toLowerCase().includes(lowerQuery) || 
                      cat.options.some(opt => opt.toLowerCase().includes(lowerQuery))
                    ));
                  }
                }}
              />
            </div>
            
            {/* Search Dropdown */}
            {searchResults.length > 0 && (
              <div className="absolute top-full mt-1 w-full bg-white rounded-md shadow-lg border border-gray-100 max-h-60 overflow-y-auto z-50">
                {searchResults.map(result => (
                  <a 
                    key={result.id} 
                    href={`#category-${result.id}`}
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 border-b border-gray-50 last:border-0"
                    onClick={() => {
                      setSearchResults([]);
                      setSearchQuery('');
                    }}
                  >
                    <div className="font-medium">{result.title}</div>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Home</a>
            <a href="#support" className="block px-3 py-2 rounded-md text-base font-medium text-blue-600 bg-blue-50">Support</a>
            <a href="#faq" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">FAQ</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Contact</a>
          </div>
          <div className="px-4 pt-4 pb-4 border-t border-gray-100">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="What do you need help with?"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
