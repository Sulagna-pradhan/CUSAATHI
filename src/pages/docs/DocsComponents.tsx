import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Button, Badge, Card, Input, SectionTitle } from '../../components/common';
import { Mail, Search, ArrowRight } from 'lucide-react';

const DocsComponents = () => {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Components
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          A library of reusable UI components used throughout the application.
        </p>
      </div>

      {/* Button */}
      <section className="space-y-6">
        <SectionTitle title="Button" align="left" className="!mb-6" />
        <p className="text-gray-600 dark:text-gray-300">
          Versatile button component with multiple variants and sizes.
        </p>
        
        <div className="p-6 bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl space-y-4">
          <div className="flex flex-wrap gap-4 items-center">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <Button icon={Mail} iconPosition="left">Left Icon</Button>
            <Button icon={ArrowRight} iconPosition="right">Right Icon</Button>
            <Button loading>Loading</Button>
          </div>
        </div>

        <SyntaxHighlighter language="tsx" style={vscDarkPlus} className="rounded-xl !bg-gray-900">
          {`<Button variant="primary" size="md" onClick={handleClick}>
  Click Me
</Button>

<Button icon={Mail} iconPosition="left">
  Contact Us
</Button>`}
        </SyntaxHighlighter>
      </section>

      {/* Badge */}
      <section className="space-y-6">
        <SectionTitle title="Badge" align="left" className="!mb-6" />
        <p className="text-gray-600 dark:text-gray-300">
          Used to display status, tags, or small pieces of information.
        </p>
        
        <div className="p-6 bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl">
          <div className="flex flex-wrap gap-4">
            <Badge variant="primary">Primary</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="gray">Gray</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
          </div>
        </div>

        <SyntaxHighlighter language="tsx" style={vscDarkPlus} className="rounded-xl !bg-gray-900">
          {`<Badge variant="success">Active</Badge>
<Badge variant="warning">Pending</Badge>`}
        </SyntaxHighlighter>
      </section>

      {/* Input */}
      <section className="space-y-6">
        <SectionTitle title="Input" align="left" className="!mb-6" />
        <p className="text-gray-600 dark:text-gray-300">
          Form input field with support for labels, errors, and icons.
        </p>
        
        <div className="p-6 bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl space-y-4 max-w-md">
          <Input label="Username" placeholder="Enter username" />
          <Input label="Email" type="email" icon={Mail} placeholder="john@example.com" />
          <Input label="Search" icon={Search} iconPosition="right" placeholder="Search..." />
          <Input label="Error State" error="This field is required" />
        </div>

        <SyntaxHighlighter language="tsx" style={vscDarkPlus} className="rounded-xl !bg-gray-900">
          {`<Input 
  label="Email" 
  type="email" 
  icon={Mail} 
  placeholder="john@example.com" 
/>`}
        </SyntaxHighlighter>
      </section>

      {/* Card */}
      <section className="space-y-6">
        <SectionTitle title="Card" align="left" className="!mb-6" />
        <p className="text-gray-600 dark:text-gray-300">
          Flexible container component with hover effects.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-bold mb-2">Basic Card</h3>
            <p className="text-gray-600 dark:text-gray-400">This is a simple card component.</p>
          </Card>
          
          <Card hover className="p-6 cursor-pointer">
            <h3 className="text-lg font-bold mb-2">Hover Card</h3>
            <p className="text-gray-600 dark:text-gray-400">Hover over me to see the effect!</p>
          </Card>
        </div>

        <SyntaxHighlighter language="tsx" style={vscDarkPlus} className="rounded-xl !bg-gray-900">
          {`<Card hover className="p-6">
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</Card>`}
        </SyntaxHighlighter>
      </section>
    </div>
  );
};

export default DocsComponents;
