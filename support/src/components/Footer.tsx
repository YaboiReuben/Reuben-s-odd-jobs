import { Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex justify-center space-x-6 md:order-2">
            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-700 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4 mb-4">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">About</a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">FAQ</a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Privacy</a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Terms</a>
            </div>
            <p className="text-center md:text-left text-sm text-gray-400">
              &copy; 2026 Reubens Odd Jobs. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
