'use client'
import * as React from "react";

import { Textarea } from "@/components/ui/textarea";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ContactForm() {
  return (
    <Card className="w-[350px] bg-inherit">
      <CardHeader>
        <CardTitle>Email Us</CardTitle>
        <CardDescription>
          Have A Query or Require Assistance? Kindly Fill out these details!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex gap-6">
              <div className="">
                <Label htmlFor="name">First Name</Label>
                <Input id="firstname" placeholder="John" />
              </div>
              <div>
                <Label htmlFor="name">Last Name</Label>
                <Input id="lastname" placeholder="Doe" />
              </div>
            </div>
            <div>
              <Label htmlFor="name">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="someone@example.com"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="message-2">Your Message</Label>
              <Textarea placeholder="Type your message here." id="message-2" />
              <p className="text-sm text-muted-foreground">
                Your message will be shared with the Technical Committee.
              </p>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="w-full">Message Us!</Button>
      </CardFooter>
    </Card>
  );
}
