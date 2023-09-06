"use client";
// add a new post
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Textarea } from "../components/ui/textarea";
import toast from "react-hot-toast";
import { Button } from "../components/ui/button";
import axios from "axios";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

export default function NewPost() {
  const [title, setTitle] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  // create a post (make the request)
  const { mutate } = useMutation(
    async (title: string) => await axios.post("/api/posts/addPost", { title }),
    { 
      onError: (error) => {
        console.log(error);
        toast.error(error?.response?.data.message)
      },
      onSuccess: (data) => {
        console.log(data);
        setTitle('') // reset title 
        setIsDisabled(false)
      }
    }
  );

  const submitPost = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsDisabled(true);
    const response = mutate(title);
  };

  return (
    <form onSubmit={submitPost}>
      <Card>
        <CardHeader>
          <CardTitle>Create A Post</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="grid gap-2">
            <Textarea
              onChange={(event) => setTitle(event.target.value)}
              value={title}
              placeholder="Type your message here."
              rows={3}
            />
          </div>
        </CardContent>
        <CardFooter className="justify-between space-x-2">
          <p
            className={`${
              title.length > 300 ? "text-red-600" : ""
            } font-bold text-sm`}
          >{`${title.length}/300`}</p>
          <Button type="submit" disabled={isDisabled}>
            Post
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
