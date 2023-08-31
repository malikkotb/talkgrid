"use client";
// add a new post
import { useState } from "react";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Label } from "../components/ui/label";

export default function NewPost() {
  const [title, setTitle] = useState("");
  const [isDisabled, setIsDisabled] = useState(true)
  return (
    <form>
      <Card>
        <CardHeader>
          <CardTitle>Create A Post</CardTitle>
          {/* <CardDescription>What is on your mind?</CardDescription> */}
        </CardHeader>
        <CardContent className="grid gap-6">
          {/* <div className="grid gap-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" placeholder="I need help with..." />
          </div> */}
          <div className="grid gap-2">
            {/* <Label htmlFor="description">Description</Label> */}
            <Textarea
              onChange={(event) => setTitle(event.target.value)}
              value={title}
              placeholder="Type your message here."
              rows={3}
            />
          </div>
        </CardContent>
        <CardFooter className="justify-between space-x-2">
          {/* <Button variant="ghost">Cancel</Button> */}
          <p className={`${title.length > 300 ? "text-red-600" : ""} font-bold text-sm`}>{`${title.length}/300`}</p>
          <Button disabled={isDisabled}>Post</Button>
        </CardFooter>
      </Card>
    </form>
  );
}
