'use client';

import { useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { generateIdeasAction, type IdeaSparkState } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, Sparkles, Lightbulb } from 'lucide-react';

const initialState: IdeaSparkState = {
  isLoading: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
      Spark Ideas
    </Button>
  );
}

export default function IdeaSparkSection() {
  const [formState, formAction] = useFormState(generateIdeasAction, initialState);
  const [themeInput, setThemeInput] = useState(''); // Controlled input

  // This effect handles the loading state before the formAction is called.
  // And resets the ideas/error when input changes
  const handleSubmitDecorator = async (formData: FormData) => {
    // Manually trigger loading state if desired, though useFormStatus handles it for the button
    formAction(formData);
  };

  return (
    <section id="idea-spark" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary mb-4 inline-flex items-center">
            <Lightbulb className="mr-3 h-8 w-8 text-primary" />
            AI Idea Spark
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Feeling stuck? Enter a theme or keyword and let our AI generate creative project ideas for you!
          </p>
        </div>

        <Card className="max-w-2xl mx-auto bg-card border-border/50 shadow-xl">
          <CardHeader>
            <CardTitle>Creative Idea Generator</CardTitle>
            <CardDescription>Fuel your next project with AI-powered inspiration.</CardDescription>
          </CardHeader>
          <form action={handleSubmitDecorator}>
            <CardContent className="space-y-4">
              <Input
                name="theme"
                placeholder="e.g., 'sustainable technology', 'fantasy art', 'community app'"
                value={themeInput}
                onChange={(e) => setThemeInput(e.target.value)}
                className="text-base"
                required
                minLength={3}
              />
              {formState.error && (
                <Alert variant="destructive" className="mt-2">
                  <AlertDescription>{formState.error}</AlertDescription>
                </Alert>
              )}
            </CardContent>
            <CardFooter>
              <SubmitButton />
            </CardFooter>
          </form>
        </Card>

        {formState.ideas && formState.ideas.length > 0 && (
          <div className="mt-12 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-center text-accent mb-6">Generated Ideas:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {formState.ideas.map((idea, index) => (
                <Card key={index} className="bg-card border-border/30 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <p className="text-foreground">{idea}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
