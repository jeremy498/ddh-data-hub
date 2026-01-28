import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowRight, Check, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const dataTypes = [
  'Browsing patterns',
  'Messaging flows',
  'Transaction behavior',
  'Workflow traces',
  'Other / Multiple',
];

const timelines = [
  'Exploring / No timeline',
  'This quarter',
  'Next 30 days',
  'Urgent (this week)',
];

export function RequestAccessForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    company: '',
    useCase: '',
    dataType: '',
    timeline: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-access-request-notification', {
        body: formData,
      });

      if (error) {
        throw error;
      }

      setIsSubmitted(true);
    } catch (error: any) {
      console.error('Error submitting form:', error);
      toast({
        title: 'Submission failed',
        description: 'There was an error submitting your request. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="card-elevated rounded-xl p-8 md:p-12 text-center">
        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-primary-foreground" />
        </div>
        <h3 className="text-headline-sm text-foreground mb-2">Request received</h3>
        <p className="text-body text-muted-foreground">
          We'll be in touch within 24 hours to discuss your data needs.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-elevated rounded-xl p-6 md:p-8 space-y-6">
      <div className="space-y-2">
        <Label htmlFor="company">Company</Label>
        <Input
          id="company"
          placeholder="Your company name"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="useCase">Use case</Label>
        <Input
          id="useCase"
          placeholder="e.g., Agent training, personalization"
          value={formData.useCase}
          onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="dataType">Data type interest</Label>
        <Select
          value={formData.dataType}
          onValueChange={(value) => setFormData({ ...formData, dataType: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select data type" />
          </SelectTrigger>
          <SelectContent>
            {dataTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="timeline">Timeline</Label>
        <Select
          value={formData.timeline}
          onValueChange={(value) => setFormData({ ...formData, timeline: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select timeline" />
          </SelectTrigger>
          <SelectContent>
            {timelines.map((timeline) => (
              <SelectItem key={timeline} value={timeline}>
                {timeline}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message (optional)</Label>
        <Textarea
          id="message"
          placeholder="Tell us more about your data needs..."
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            Request Access
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </Button>
    </form>
  );
}
