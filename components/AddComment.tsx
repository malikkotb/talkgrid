"use client";

import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { error } from "console";

export default function AddComment({ id }) {
  const [title, setTitle] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const queryClient = useQueryClient();
  let commentToastId: string = "hello"

  const { mutate } = useMutation(
    async (data) => axios.post("/api/posts/addComment", { data }),
    {
      onSuccess: (data) => {
        setTitle("")
        setIsDisabled(false);
        toast.success("Added your comment 💡", { id: commentToastId })
      },
      onError: (error) => {
        setIsDisabled(false);
      },
    }
  );

  return (
    <div className="my-8">
      <Card>
        <CardHeader>
          <CardTitle>Add a Comment</CardTitle>
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
            Add Comment 🌺
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
