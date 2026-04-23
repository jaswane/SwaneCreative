'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { submitContactForm, type ContactFormState } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, Send, Mail, Linkedin, Twitter, Github, CheckCircle } from 'lucide-react';
import { useEffect, useRef } from 'react';

const initialState: ContactFormState = {
  message: '',
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
      Send Message
    </Button>
  );
}

export default function ContactSection() {
  const [formState, formAction] = useFormState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (formState.success) {
      formRef.current?.reset();
    }
  }, [formState.success]);

  return (
    <section id="contact" className="py-16 sm:py-24 bg-background/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary mb-4">Get In Touch</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <Card className="bg-card border-border/50 shadow-xl">
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
              <CardDescription>Fill out the form and we'll get back to you shortly.</CardDescription>
            </CardHeader>
            <CardContent>
              <form ref={formRef} action={formAction} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground/90">Full Name</Label>
                  <Input id="name" name="name" type="text" placeholder="John Doe" required className="mt-1 bg-input border-border/70" />
                  {formState.errors?.name && <p className="text-sm text-destructive mt-1">{formState.errors.name[0]}</p>}
                </div>
                <div>
                  <Label htmlFor="email" className="text-foreground/90">Email Address</Label>
                  <Input id="email" name="email" type="email" placeholder="you@example.com" required className="mt-1 bg-input border-border/70" />
                  {formState.errors?.email && <p className="text-sm text-destructive mt-1">{formState.errors.email[0]}</p>}
                </div>
                <div>
                  <Label htmlFor="message" className="text-foreground/90">Message</Label>
                  <Textarea id="message" name="message" placeholder="Your project details or inquiry..." required rows={5} className="mt-1 bg-input border-border/70" />
                  {formState.errors?.message && <p className="text-sm text-destructive mt-1">{formState.errors.message[0]}</p>}
                </div>
                <SubmitButton />
                {formState.message && !formState.success && (
                  <Alert variant="destructive" className="mt-4">
                    <AlertDescription>{formState.message}</AlertDescription>
                  </Alert>
                )}
                {formState.message && formState.success && (
                  <Alert variant="default" className="mt-4 border-green-500 bg-green-500/10 text-green-700 dark:text-green-400">
                     <CheckCircle className="h-4 w-4 !text-green-500" />
                    <AlertTitle className="!text-green-600 dark:!text-green-300">Success!</AlertTitle>
                    <AlertDescription className="!text-green-700 dark:!text-green-400">{formState.message}</AlertDescription>
                  </Alert>
                )}
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8 md:pt-8">
            <div>
              <h3 className="text-xl font-semibold text-accent mb-3">Contact Information</h3>
              <div className="space-y-2 text-foreground/90">
                <p className="flex items-center">
                  <Mail className="mr-3 h-5 w-5 text-accent" />
                  <a href="mailto:hello@swanecreative.com" className="hover:text-primary transition-colors">hello@swanecreative.com</a>
                </p>
                {/* Add phone number if available
                <p className="flex items-center">
                  <Phone className="mr-3 h-5 w-5 text-accent" />
                  <span>+1 (555) 123-4567</span>
                </p>
                */}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-accent mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" asChild className="border-accent text-accent hover:bg-accent/10">
                  <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild className="border-accent text-accent hover:bg-accent/10">
                  <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <Twitter className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild className="border-accent text-accent hover:bg-accent/10">
                  <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
             <div className="bg-card p-6 rounded-lg shadow-md border border-border/50">
                <h4 className="text-lg font-medium text-primary mb-2">Our Mission</h4>
                <p className="text-sm text-foreground/80">
                    To empower businesses with innovative and impactful digital solutions that drive growth and inspire audiences. We value creativity, collaboration, and client success above all.
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
