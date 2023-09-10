import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type DialogProps = {
  deletePost: () => void;
};

export default function DeleteDialog({ deletePost }: DialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Delete</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Are you sure you want to delete this post?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            post.
          </DialogDescription>
        </DialogHeader>
        {/* <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div> */}
        <DialogFooter>
          <Button
            type="submit"
            onClick={deletePost}
            variant={"destructive"}
          >
            Delete Post
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
